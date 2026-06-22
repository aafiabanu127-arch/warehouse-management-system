import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <nav className="flex items-center justify-between px-8 py-5">
        <span className="text-xl font-semibold text-emerald-400">Warehouse System</span>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded text-sm font-medium hover:bg-slate-800"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-slate-900"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
          Run your warehouse with clarity and control
        </h1>
        <p className="text-slate-300 max-w-xl mb-8">
          Track inventory, manage stock movements, forecast demand, and
          approve transfers — all in one place.
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="inline-block px-6 py-3 rounded bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold"
          >
            Create an Account
          </Link>
          <Link
            to="/login"
            className="inline-block px-6 py-3 rounded border border-slate-600 hover:bg-slate-800 font-semibold"
          >
            Sign In
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
          <div className="bg-slate-800 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2 text-emerald-400">Inventory Tracking</h3>
            <p className="text-sm text-slate-300">
              Real-time stock levels across multiple warehouses and zones.
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2 text-emerald-400">Demand Forecasting</h3>
            <p className="text-sm text-slate-300">
              Predict future stock needs using historical movement data.
            </p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2 text-emerald-400">Approval Workflows</h3>
            <p className="text-sm text-slate-300">
              Transfers and adjustments routed for manager sign-off.
            </p>
          </div>
        </div>
      </main>

      <footer className="text-center text-slate-500 text-sm py-6">
        Warehouse Management System
      </footer>
    </div>
  );
}
