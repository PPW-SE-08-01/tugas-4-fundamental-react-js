import { useState } from "react";

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div className="counter-box">
      <p className="counter-display">
        Jumlah klik: <span className="counter-badge">{jumlah}</span>
      </p>
      <div className="button-group">
        <button onClick={() => setJumlah((prev) => prev + 1)}>Tambah</button>
        <button className="btn-secondary" onClick={() => setJumlah(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
