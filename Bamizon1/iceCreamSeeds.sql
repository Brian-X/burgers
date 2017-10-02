DROP DATABASE IF EXISTS ice_creamDB;

CREATE DATABASE ice_creamDB;

USE ice_creamDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  flavor VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
);

INSERT INTO products (flavor, price, quantity)
VALUES ("vanilla", 2.50, 100),
	("chocolate", 3.10, 120),
	("strawberry", 3.25, 75);



-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
