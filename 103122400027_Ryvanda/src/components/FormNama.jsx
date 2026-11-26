import { useState } from "react";

function FormNama() {
  const [nama, setNama] = useState("");

  return (
    <div className="box">
      <div className="field">
        <label htmlFor="nama">Nama</label>
        <input
          id="nama"
          type="text"
          className="input"
          placeholder="Masukkan nama..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <p className="greeting">Halo, {nama || "Tamu"}!</p>
    </div>
  );
}

export default FormNama;

