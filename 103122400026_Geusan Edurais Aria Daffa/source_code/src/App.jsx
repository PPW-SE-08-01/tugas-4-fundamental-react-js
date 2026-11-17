import { useState } from "react";
import Sapaan from "./components/Sapaan";
import CardMahasiswa from "./components/CardMahasiswa";
import Counter from "./components/Counter";
import FormNama from "./components/FormNama";
import DaftarMahasiswa from "./components/DaftarMahasiswa";
import "./App.css";

function App() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { id: 1, nama: "Ani", nim: "10121001" },
  ]);
  const [namaBaru, setNamaBaru] = useState("");
  const [nimBaru, setNimBaru] = useState("");

  function tambahMahasiswa(e) {
    if (e) e.preventDefault();
    const trimmedNama = namaBaru.trim();
    const trimmedNim = nimBaru.trim();
    if (!trimmedNama || !trimmedNim) return;

    const mahasiswaBaru = {
      id: Date.now(),
      nama: trimmedNama,
      nim: trimmedNim,
    };
    setDaftarMahasiswa([...daftarMahasiswa, mahasiswaBaru]);
    setNamaBaru("");
    setNimBaru("");
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Praktikum Modul 6 - React Dasar</h1>
        <p className="student-info">
          Geusan Edurais Aria Daffa &bull; 103122400026 &bull; SE-08-01
        </p>
      </header>

      {/* 6.3 Component */}
      <section className="section">
        <h3>6.3 Functional Component</h3>
        <Sapaan />
      </section>

      {/* 6.4 Props */}
      <section className="section">
        <h3>6.4 Props</h3>
        <div className="card-list">
          <CardMahasiswa nama="Ani" nim="10121001" />
          <CardMahasiswa nama="Budi" nim="10121002" />
        </div>
      </section>

      {/* 6.5 State */}
      <section className="section">
        <h3>6.5 State (useState)</h3>
        <Counter />
      </section>

      {/* 6.5.1 Event Handling */}
      <section className="section">
        <h3>6.5.1 Penanganan Event</h3>
        <FormNama />
      </section>

      {/* 6.6 Render List */}
      <section className="section">
        <h3>6.6 Render List</h3>
        <DaftarMahasiswa />
      </section>

      {/* 6.7 Menggabungkan Component, Props, State, dan Render List */}
      <section className="section">
        <h3>6.7 Latihan Akhir (Tambah Mahasiswa)</h3>
        <form onSubmit={tambahMahasiswa} className="form-group">
          <input
            type="text"
            placeholder="Nama Mahasiswa"
            value={namaBaru}
            onChange={(e) => setNamaBaru(e.target.value)}
          />
          <input
            type="text"
            placeholder="NIM"
            value={nimBaru}
            onChange={(e) => setNimBaru(e.target.value)}
          />
          <button type="submit">Tambah</button>
        </form>
        <div className="card-list">
          {daftarMahasiswa.map((mhs) => (
            <CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
