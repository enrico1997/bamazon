/* Seeds for 'products' SQL table. */
USE `bamazon`;

/* Insert 'Products' into your new table */
INSERT INTO `products` (`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES 	("Pantene", "Beauty and Personal Care", 4.50, 1000), 
		("Harry Potter DVD", "Movies and TV", 19.99, 999), 
		("Strawberry Jam", "Groceries", 7.99, 700),
		("Foam Roller", "Fitness and Work-out", 24.50, 999),
		("Drone", "Electronics", 189.90, 1024),
		("Lamps", "Household Goods", 79.64, 999),
		("Computer Keyboard & Mouse", "Electronics", 139.99, 1024),
		("iPhone 6s", "Electronics", 549.99, 2000),
		("Fitbit Device", "Health and Well-being", 19.99, 10000),
		("15 Ways to Use your Crockpot", "Books", 19.99, 1200),
		("Pillows", "Household Goods", 19.99, 999),
		("Frozen Pizza Pockets", "Groceries", 9.88, 20999),
		("New Balance Running Shoes", "Shoes", 89.99, 750),
		("Jaws Blu-ray", "Movies", 24.99, 200),
		("Marmot Jacket", "Outerwear", 19.99, 999)
	;
    
/* Tests to validate database created properly */
DESC `products`;
SELECT * FROM `products`;