import { useState } from "react";
import "./App.css";
import CardMahasiswa from "./components/CardMahasiswa";

function App() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { id: 1, nama: "Ani", nim: "10121001" },
  ]);
  const [namaBaru, setNamaBaru] = useState("");
  const [nimBaru, setNimBaru] = useState("");

  function tambahMahasiswa(e) {
    e.preventDefault();
    if (!namaBaru.trim() || !nimBaru.trim()) return;
    const mahasiswaBaru = {
      id: Date.now(),
      nama: namaBaru.trim(),
      nim: nimBaru.trim(),
    };
    setDaftarMahasiswa([...daftarMahasiswa, mahasiswaBaru]);
    setNamaBaru("");
    setNimBaru("");
  }

  return (
    <main className="container">
      <h2>Daftar Mahasiswa</h2>
      <p className="subtitle">Tambahkan nama dan NIM mahasiswa baru.</p>

      <form className="form-row" onSubmit={tambahMahasiswa}>
        <input
          className="input"
          placeholder="Nama"
          value={namaBaru}
          onChange={(e) => setNamaBaru(e.target.value)}
        />
        <input
          className="input"
          placeholder="NIM"
          value={nimBaru}
          onChange={(e) => setNimBaru(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Tambah
        </button>
      </form>

      <div className="card-list">
        {daftarMahasiswa.map((mhs) => (
          <CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
        ))}
      </div>
    </main>
  );
}

export default App;
