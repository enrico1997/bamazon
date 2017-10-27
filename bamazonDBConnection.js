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
	// start();
	connection.end();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "POST") {
        postAuction();
      }
      else {
        bidAuction();
      }
    });
}

function afterConnection() {
	connection.query("SELECT * FROM `products`", function(err, res) {
		var price2Dec = 0;
		var item_id2Digit = 0;
		var columns = "";
		if (err) throw err;
      	// console.log(item_id2Digit + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + price2Dec);
    	console.log("-----------------------------------");
    	console.log("ID", "  PRODUCT", "  DEPARTMENT NAME", "     PRICE");
   		// console.log(columnify("",{columns: ['ID', 'PRODUCT NAME', 'DEPARTMENT NAME', 'PRICE']}));
	    for (var i = 0; i < res.length; i++) {
   			price2Dec = parseFloat(Math.round(res[i].price * 100) / 100).toFixed(2);
	      	item_id2Digit = ("0" + res[i].item_id).slice(-2);
	      	console.log(item_id2Digit + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + price2Dec);
    		// console.log(columnify(item_id2Digit, res[i].product_name, res[i].department_name, price2Dec, {columns: ['ITEM ID', 'PRODUCT NAME', 'DEPARTMENT NAME', 'PRICE']}));
    		// console.log(columnify(res[i].item_id, res[i].product_name, res[i].department_name, price2Dec));
    	}
    	console.log("-----------------------------------");
		// connection.end();
	});
}