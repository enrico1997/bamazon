# Node.js & MySQL

## Overview

Welcome to Bamazon, an Amazon-like storefront built with Node.js using MySQL to persist the data. The app displays a list of products available for purchase and gives our customers the ability to purchase and deplete stock from our store's inventory. Future enhancements will expand our internal tools allowing our storefront managers to track product sales across your store's departments and provide them with a summary of the highest-grossing departments in the store.

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

![Bamazon Schema](https://github.com/enrico1997/bamazon/tree/master/gifs/schema.png) 

5. Running the Node application `bamazonCustomer.js` will first display all of the items available for sale, including the ids, names, product category and prices of products for sale.

6. The app will then prompt our customers with two messages:
   * The ID of the product they would like to buy.
   * How many units of the product they would like to buy.

![Bamazon Prompts](https://github.com/enrico1997/bamazon/tree/master/gifs/01.jpg)

7. Once the customer places the order, the application will check if we have inventory. If not, the app will inform the customer that there is `Insufficient quantity!`, and will prevent the order from going through.

![Bamazon Not Enough](https://github.com/enrico1997/bamazon/tree/master/gifs/02.not_enough.jpg)

8. But we try to keep our inventory high  in order to fulfill our customers' order. Processing the order means:
   * Updating the SQL database to reflect the remaining quantity.
   * Showing the customer the total cost of their purchase.

![Bamazon Success](https://github.com/enrico1997/bamazon/tree/master/gifs/03_success.png)
![Bamazon Success](https://github.com/enrico1997/bamazon/tree/master/gifs/04_reduced.jpg)

- - -

## Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.