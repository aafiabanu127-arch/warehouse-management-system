# User Roles & Permissions

## Roles & Responsibilities

| Role | Responsibility |
|---|---|
| **Admin** | Full system access. Manages users and roles, all CRUD operations, system configuration, and audit logs. |
| **Manager** | Oversees warehouse operations. Manages categories, products, warehouses, and shelves. Approves/rejects stock transfer requests. Views all reports. |
| **Warehouse Supervisor** | Supervises daily floor operations for assigned warehouse(s). Approves/rejects stock transfer requests, manages stock movements and space allocation. Views warehouse-level reports. |
| **Staff (Inventory Staff)** | Performs day-to-day inventory updates: stock counts, adjustments, stock movements. Raises stock transfer requests. Cannot approve transfers or edit master data (categories/products/warehouses). |
| **Picker/Operator** | Executes pick, pack, and putaway tasks. Records stock movements tied to assigned tasks. Raises stock transfer requests. Read-only on products, categories, and shelf listings. |
| **Auditor** | Read-only access across all modules, including audit logs, for compliance and stock verification. Cannot create, update, or delete. |
| **Viewer** | Read-only access to dashboards and summary reports only. |

## Permission Matrix

| Module / Action | Admin | Manager | Supervisor | Staff | Picker | Auditor | Viewer |
|---|---|---|---|---|---|---|---|
| Categories (manage) | Full | Full | Read only | Read only | Read only | Read only | Read only |
| Products (manage) | Full | Full | Read only | Read only | Read only | Read only | Read only |
| Warehouses (manage) | Full | Full | Read only | Read only | Read only | Read only | Read only |
| Inventory records | Full | Full | Full | Full | Read only | Read only | Read only |
| Stock Movements | Full | Full | Full | Full | Create/Update | Read only | Read only |
| Space Allocation | Full | Full | Full | Full | Read only | Read only | Read only |
| Transfer Request – Create | Yes | Yes | Yes | Yes | Yes | No | No |
| Transfer Request – Approve/Reject | Yes | Yes | Yes | No | No | No | No |
| Reports – View | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Reports – Export (CSV/Excel/PDF) | Yes | Yes | Yes | Yes | No | Yes | No |
| User Management | Yes | No | No | No | No | No | No |
| Audit Logs – View | Yes | No | No | No | No | Yes | No |

**Notes:**
- Read access on safe methods (GET/HEAD/OPTIONS) is granted to any authenticated user by default; the table above marks where write/approve access diverges from that.
- Enforcement lives in `users/permissions.py` via `IsAdminOrManager`, `IsAdminManagerOrSupervisor`, `IsAdminManagerOrStaff`, and `IsWarehouseFloorStaff`.