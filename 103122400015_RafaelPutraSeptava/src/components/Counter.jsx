import { useState } from "react";

export default function Counter() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 text-blue-400 space-y-4">
      <p className="text-lg font-medium text-blue-200">
        Jumlah klik: <span className="text-blue-400 font-bold">{jumlah}</span>
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => setJumlah(jumlah + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition"
        >
          Tambah
        </button>
        <button
          onClick={() => setJumlah(0)}
          className="bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-600 px-4 py-2 rounded-md font-medium transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
