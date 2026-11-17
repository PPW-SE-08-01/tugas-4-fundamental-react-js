import { useState } from "react";

function FormNama() {
  const [nama, setNama] = useState("");

  return (
    <div className="form-nama-box">
      <div className="form-inline">
        <label htmlFor="nama">Nama: </label>
        <input
          id="nama"
          type="text"
          placeholder="Masukkan nama..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <p className="greeting-text">
        Halo, <strong>{nama.trim() || "Tamu"}</strong>!
      </p>
    </div>
  );
}

export default FormNama;
