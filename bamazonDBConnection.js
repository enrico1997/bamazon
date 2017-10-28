var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require('columnify')

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "enrico",
	password: "",
	database: "bamazon"
});

connection.connect(function(err) {
	if (err) throw err;
	// console.log("connected as id " + connection.threadId);
	afterConnection();
});

// function to handle purchase of items
function purchaseProduct() {
  // prompt for info about which item to buy
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the item # you would like to purchase?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])

    .then(function(answer) {
    	var product;
		// when finished prompting, purchase item by decrementing db with that info
		// console.log(answer);
		connection.query("SELECT * FROM bamazon.products WHERE item_id = ?", [answer.item], function (err, res) {
	        if (err) throw err;
	        // console.log("res: ", res);
			var product = res[0];
			var stock = product.stock_quantity;

				// If user requests more than the available stock
			if (answer.quantity > stock) {
				console.log("\n*************************************\nSorry, we ran out.\nPlease try again with fewer quantity.\n*************************************");
			}
				// If there is enough product in stock
			else {
				var new_stock = stock - answer.quantity;
				connection.query("UPDATE `products` SET ? WHERE ?", [{stock_quantity: new_stock}, {item_id: answer.item}], function(err) {
					if (err) throw err;
					// if (err) { return console.err('err connecting: ' + err.stack); }
					else {
						var total = product.price * answer.quantity;
			   			var price2Dec = parseFloat(Math.round(total * 100) / 100).toFixed(2);
						console.log("\n**********************************************************************");
						console.log("Thank you for purchasing '" + product.product_name + "' (quantity: " + answer.quantity + ")");
						console.log('Your purchase was successful and your total is $' + price2Dec);
						console.log("**********************************************************************");
					}
		 			 // re-prompt the user for if they want to buy something else
		  			// start();
				});
			}
		});
	});
}

function afterConnection() {
	connection.query("SELECT * FROM `products`", function(err, res) {
		if (err) throw err;

		var columns = "";
		// if (err) { return console.err('err connecting: ' + err.stack); }
      	// console.log(item_id2Digit + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + price2Dec);
    	console.log("\n\nID", "  PRODUCT", "  DEPARTMENT", "                PRICE");
    	console.log("---------------------------------------------------");
   		// console.log(columnify("",{columns: ['ID', 'PRODUCT NAME', 'DEPARTMENT NAME', 'PRICE']}));
	    for (var i = 0; i < res.length; i++) {
   			var price2Dec = parseFloat(Math.round(res[i].price * 100) / 100).toFixed(2);
	      	var item_id2Digit = ("0" + res[i].item_id).slice(-2);
	      	console.log(item_id2Digit + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + price2Dec);
    		// console.log(columnify(item_id2Digit, res[i].product_name, res[i].department_name, price2Dec, {columns: ['ITEM ID', 'PRODUCT NAME', 'DEPARTMENT NAME', 'PRICE']}));
    		// console.log(columnify(res[i].item_id, res[i].product_name, res[i].department_name, price2Dec));
    	}
    	console.log("---------------------------------------------------\n\n");
		
		purchaseProduct();
	});
}