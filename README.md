# Warehouse Management System

A full-stack enterprise-grade Warehouse Management System built with Django REST Framework and React TypeScript.

## Project Overview
Solves inefficient storage utilization, misplaced inventory, and delayed product retrieval using a centralized digital platform with AI-powered space optimization and demand forecasting.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Tailwind CSS, Vite |
| Backend | Django 6, Django REST Framework 3.17 |
| Database | PostgreSQL |
| Authentication | JWT (SimpleJWT) |
| Deployment | Render.com |

## Project Structure
warehouse-management-system/

├── backend/          # Django REST API

│   ├── inventory/    # Products, stock movements, transfers

│   ├── warehouses/   # Warehouse, zone, rack, shelf models

│   ├── users/        # Auth, roles, audit logging

│   ├── reports/      # Dashboard, analytics, exports

│   ├── notifications/# Alerts and notifications

│   └── schema.yaml   # OpenAPI 3.0 API documentation

├── frontend/         # React TypeScript app

│   ├── src/pages/    # Dashboard, Inventory, Reports etc.

│   ├── src/components/

│   └── src/api/      # API client functions

├── TEST_REPORT.md    # Full test report (26 test cases)

├── DEPLOYMENT_GUIDE.md

└── ASSIGNMENTS_DAY1-5.zip
## User Roles
Admin, Manager, Supervisor, Staff, Picker, Auditor, Viewer

## Branching Strategy
| Branch | Purpose |
|--------|---------|
| main | Production-ready code |
| dev | Integration and testing |
| feature/inventory-management | Feature development |

## Quick Start
See backend/README.md for backend setup and frontend/README.md for frontend setup.

## API Documentation
OpenAPI 3.0 schema available at backend/schema.yaml.
Import into Postman or view with Swagger UI.

## Testing
26 test cases across Unit, Integration, Validation, Security, UI and Performance.
See TEST_REPORT.md for full details.

## Deployment
Live on Render.com. See DEPLOYMENT_GUIDE.md for full deployment steps.
---

## 🤖 AI Integration & Advanced Features

### AI Demand Forecasting
- Located in `backend/inventory/forecasting.py`
- Uses **NumPy linear regression** on historical stock movement data
- Predicts future demand per product and flags restocking needs
- Exposed via `/api/inventory/forecasting/` endpoint
- Frontend: `Analytics.tsx` displays forecast charts

### Automation
- `backend/inventory/management/commands/check_low_stock.py` — auto-runs low stock checks and triggers notifications
- `backend/inventory/management/commands/run_forecasting.py` — scheduled command to regenerate forecasts
- Notifications are auto-created on stock threshold breach

### Analytics & Reporting
- ABC Classification of products by movement velocity (`optimization.py`)
- KPI dashboard with real-time inventory value, warehouse utilization, low stock count
- Reports exportable in **CSV, Excel (.xlsx), and PDF** formats

### Scalability
- Stateless JWT authentication — horizontally scalable
- PostgreSQL on Railway with connection pooling
- WhiteNoise for static file serving without extra infra
- Pagination on all list endpoints prevents large payload issues
- Modular Django app structure — each domain (inventory, warehouses, reports, notifications) is independently maintainable