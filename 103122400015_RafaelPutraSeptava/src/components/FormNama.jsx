import { useState } from "react";

export default function FormNama() {
  const [nama, setNama] = useState("");

  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 text-blue-400 space-y-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-blue-300">Nama:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan nama..."
          className="bg-slate-800 text-blue-100 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <p className="text-lg text-blue-200">
        Halo,{" "}
        <span className="font-semibold text-blue-400">{nama || "Tamu"}</span>
      </p>
    </div>
  );
}
