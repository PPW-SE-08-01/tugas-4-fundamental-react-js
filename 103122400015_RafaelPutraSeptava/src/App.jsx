import { useState } from "react";
import CardMahasiswa from "./components/CardMahasiswa";
import Counter from "./components/Counter";
import DaftarMahasiswa from "./components/DaftarMahasiswa";
import FormNama from "./components/FormNama";
import Sapaan from "./components/Sapaan";

export default function App() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [namaBaru, setNamaBaru] = useState("");
  const [nimBaru, setNimBaru] = useState("");

  function tambahMahasiswa() {
    const mahasiswaBaru = { id: Date.now(), nama: namaBaru, nim: nimBaru };
    setDaftarMahasiswa([...daftarMahasiswa, mahasiswaBaru]);
    setNamaBaru("");
    setNimBaru("");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-blue-400 p-6 md:p-10 space-y-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Sapaan />

        <CardMahasiswa nama="Rafael" nim="103122400015" />

        <Counter />

        <FormNama />

        <DaftarMahasiswa />

        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 space-y-4">
          <h2 className="text-xl font-bold text-blue-400">Tambah Mahasiswa</h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Nama"
              value={namaBaru}
              onChange={(e) => setNamaBaru(e.target.value)}
              className="flex-1 bg-slate-800 text-blue-100 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 placeholder-slate-500"
            />
            <input
              type="text"
              placeholder="NIM"
              value={nimBaru}
              onChange={(e) => setNimBaru(e.target.value)}
              className="flex-1 bg-slate-800 text-blue-100 border border-slate-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 placeholder-slate-500"
            />
            <button
              onClick={tambahMahasiswa}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition"
            >
              Tambah
            </button>
          </div>

          <div className="grid gap-3 pt-4">
            {daftarMahasiswa.map((mhs) => (
              <CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
