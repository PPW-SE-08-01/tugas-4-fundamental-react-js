import { useState } from "react";
import Sapaan from "./components/Sapaan";
import CardMahasiswa from "./components/CardMahasiswa";
import Counter from "./components/Counter";
import FormNama from "./components/FormNama";
import DaftarMahasiswa from "./components/DaftarMahasiswa";

function App() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { id: 1, nama: "Ani", nim: "10121001" },
  ]);
  const [namaBaru, setNamaBaru] = useState("");
  const [nimBaru, setNimBaru] = useState("");

  function tambahMahasiswa() {
    if (!namaBaru.trim() || !nimBaru.trim()) return;

    const mahasiswaBaru = {
      id: Date.now(),
      nama: namaBaru,
      nim: nimBaru,
    };

    setDaftarMahasiswa([...daftarMahasiswa, mahasiswaBaru]);
    setNamaBaru("");
    setNimBaru("");
  }

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Praktikum React Dasar - Modul 6</h1>
      <p>Muhammad Restu Aditya - 103122400022 - SE-08-01</p>

      <hr />

      <h2>1. Functional Component</h2>
      <Sapaan />

      <hr />

      <h2>2. Props</h2>
      <CardMahasiswa nama="Ani" nim="10121001" />
      <CardMahasiswa nama="Budi" nim="10121002" />

      <hr />

      <h2>3. State</h2>
      <Counter />

      <hr />

      <h2>4. Penanganan Event</h2>
      <FormNama />

      <hr />

      <h2>5. Render List</h2>
      <DaftarMahasiswa />

      <hr />

      <h2>6. Gabungan</h2>
      <input
        placeholder="Nama"
        value={namaBaru}
        onChange={(e) => setNamaBaru(e.target.value)}
      />
      <input
        placeholder="NIM"
        value={nimBaru}
        onChange={(e) => setNimBaru(e.target.value)}
      />
      <button onClick={tambahMahasiswa}>Tambah</button>

      <div>
        {daftarMahasiswa.map((mhs) => (
          <CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
        ))}
      </div>
    </div>
  );
}

export default App;
