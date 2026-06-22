# Database Design

The system consists of the following tables:

## Users Table
Stores user information.

- id (Primary Key)
- username
- email
- password
- role

## Inventory Table
Stores warehouse items.

- id (Primary Key)
- name
- quantity
- category_id (Foreign Key)
- warehouse_id (Foreign Key)
- created_by (Foreign Key)

## Warehouses Table
Stores warehouse details.

- id (Primary Key)
- name
- location
- capacity

## Categories Table
Stores item categories.

- id (Primary Key)
- name

## Stock Transfers Table
Tracks item movement.

- id (Primary Key)
- item_id (Foreign Key)
- from_warehouse
- to_warehouse
- quantity
- date