import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
}

interface Shelf {
  id: number;
  shelf_code: string;
}

interface InventoryItem {
  id?: number;
  product: number;
  shelf: number;
  quantity: number;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: InventoryItem) => void;
  initial?: InventoryItem | null;
  products: Product[];
  shelves: Shelf[];
}

export default function InventoryFormModal({
  isOpen,
  onClose,
  onSubmit,
  initial,
  products,
  shelves,
}: Props) {
  const [form, setForm] = useState<InventoryItem>({
    product: 0,
    shelf: 0,
    quantity: 0,
  });

  useEffect(() => {
    if (initial) {
      setForm(initial);
    } else {
      setForm({ product: 0, shelf: 0, quantity: 0 });
    }
  }, [initial, isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          {initial ? "Edit Inventory" : "Add Inventory"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product
            </label>
            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={0} disabled>
                Select a product
              </option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shelf
            </label>
            <select
              name="shelf"
              value={form.shelf}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={0} disabled>
                Select a shelf
              </option>
              {shelves.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.shelf_code}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              min={0}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              {initial ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}