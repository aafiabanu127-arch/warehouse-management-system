import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getDashboardSummary } from '../api/dashboard';
import type { DashboardSummary } from '../types/dashboard';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-3xl font-bold text-emerald-400 mt-1">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  const { user } = useAuth();
  const [data, setData] = useState<DashboardSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getDashboardSummary()
      .then(setData)
      .catch(() => setError('Failed to load dashboard data.'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-slate-300 mb-6">
        Welcome, <span className="font-semibold text-emerald-400">{user?.username}</span> ({user?.role})
      </p>

      {isLoading && <p className="text-slate-400">Loading dashboard data...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {data && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Warehouses" value={data.total_warehouses} />
            <StatCard label="Total Products" value={data.total_products} />
            <StatCard label="Total Inventory Units" value={data.total_inventory_quantity} />
            <StatCard label={`Low Stock (< ${data.low_stock_threshold_used})`} value={data.low_stock_count} />
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 p-5 mb-8">
            <h2 className="text-lg font-semibold mb-4">Warehouse Utilization (%)</h2>
            {data.warehouse_utilization.length === 0 ? (
              <p className="text-slate-400">No warehouse data yet.</p>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.warehouse_utilization}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[0, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                  <Bar dataKey="utilization_percent" fill="#34d399" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="bg-slate-800 rounded-lg border border-slate-700 p-5">
            <h2 className="text-lg font-semibold mb-4">Recent Stock Movements</h2>
            {data.recent_movements.length === 0 ? (
              <p className="text-slate-400">No stock movements recorded yet.</p>
            ) : (
              <table className="w-full text-sm">
                <thead className="text-slate-400">
                  <tr>
                    <th className="text-left py-2">Product</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Quantity</th>
                    <th className="text-left py-2">When</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recent_movements.map((m, i) => (
                    <tr key={i} className="border-t border-slate-700">
                      <td className="py-2">{m.product__name}</td>
                      <td className="py-2">{m.movement_type}</td>
                      <td className="py-2">{m.quantity}</td>
                      <td className="py-2">{new Date(m.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
}