import { useState } from "react";
import CardMahasiswa from "./components/CardMahasiswa";

function App() {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { id: 1, nama: "Ani", nim: "10121001" },
  ]);
  const [namaBaru, setNamaBaru] = useState("");
  const [nimBaru, setNimBaru] = useState("");

  function tambahMahasiswa() {
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
    <div>
      <h2>Daftar Mahasiswa</h2>

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