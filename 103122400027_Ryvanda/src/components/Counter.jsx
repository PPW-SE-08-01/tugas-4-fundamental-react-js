import { useState } from "react";

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div className="box">
      <p className="counter-text">
        Jumlah klik: <strong>{jumlah}</strong>
      </p>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setJumlah(jumlah + 1)}
        >
          Tambah
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setJumlah(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

