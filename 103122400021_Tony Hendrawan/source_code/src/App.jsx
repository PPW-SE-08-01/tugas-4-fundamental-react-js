import { useState } from "react";
import Sapaan from "./components/Sapaan";
import CardMahasiswa from "./components/CardMahasiswa";
import Counter from "./components/Counter";
import FormNama from "./components/Event";
import DaftarMahasiswa from "./components/RenderList";

function App() {

  //Gabungan
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



  // return (
  // Component
  /*
  <div className="App">
    <Sapaan />
  </div>
  */

  // Props
  /*
  <div>
    <CardMahasiswa nama="Ani" nim="10121001" />
    <CardMahasiswa nama="Budi" nim="10121002" />
  </div>
  */

  // State
  /*
  <div>
    <Counter />
  </div>
  */

  // Penanganan Event
  /*
  <div>
    <FormNama />
  </div>
  */

  // Render List
  /*
  <div>
    <DaftarMahasiswa />
  </div>
  */

  // );


}

export default App;
