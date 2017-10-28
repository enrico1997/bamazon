/* Schema for SQL database/table. */
DROP DATABASE IF EXISTS bamazon;

/* Create database */
CREATE DATABASE `bamazon`;
USE `bamazon`;

/* Create new table with a primary key that auto-increments */
CREATE TABLE `products` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NOT NULL,
  `department_name` VARCHAR(45),
  `price` DECIMAL(10,2) NULL,
  `stock_quantity` INT NULL,
  PRIMARY KEY (`item_id`)
);

/* Tests to validate database created properly */
DESC `products`;
SELECT * FROM `products`;