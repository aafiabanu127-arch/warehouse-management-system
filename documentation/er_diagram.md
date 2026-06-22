🧱 Entities in the System
👤 1. User

Represents people who use the system (Admin, Staff, Manager).

Attributes:
user_id (Primary Key)
username
email
password
role
Purpose:

Handles authentication and system access.

🏢 2. Warehouse

Represents physical storage locations where items are stored.

Attributes:
warehouse_id (Primary Key)
name
location
capacity
Purpose:

Stores and organizes inventory physically.

📦 3. Category

Used to group similar inventory items.

Attributes:
category_id (Primary Key)
name
description
Purpose:

Helps in organizing inventory in a structured way.

📋 4. Inventory Item

Represents actual products stored in warehouses.

Attributes:
item_id (Primary Key)
name
quantity
price
category_id (Foreign Key)
warehouse_id (Foreign Key)
created_by (Foreign Key → User)
Purpose:

Main entity that stores stock details.

🔄 5. Stock Transfer

Tracks movement of items between warehouses.

Attributes:
transfer_id (Primary Key)
item_id (Foreign Key)
from_warehouse_id (Foreign Key)
to_warehouse_id (Foreign Key)
quantity
transfer_date
created_by (Foreign Key → User)
Purpose:

Maintains record of inventory movement.

🔗 Relationships Between Entities
👤 User → Inventory Item
One user can create multiple inventory items
🏢 Warehouse → Inventory Item
One warehouse can store many inventory items
📦 Category → Inventory Item
One category can include many inventory items
📋 Inventory Item → Stock Transfer
One item can be transferred multiple times
🏢 Warehouse → Stock Transfer
A warehouse can act as both source and destination
🧭 ER Diagram Flow (Visual Representation)
            ┌──────────────┐
            │     User     │
            └──────┬───────┘
                   │
                   ▼
        ┌────────────────────┐
        │  Inventory Item     │
        └──────┬────────┬─────┘
               │        │
               ▼        ▼
     ┌────────────┐  ┌────────────┐
     │ Warehouse  │  │  Category  │
     └────┬───────┘  └────────────┘
          │
          ▼
   ┌──────────────────┐
   │ Stock Transfer   │
   └────┬─────────────┘
        │
        ▼
   ┌──────────────┐
   │ Warehouse    │
   └──────────────┘