import { useState } from "react";

function FormNama() {
    const [nama, setNama] = useState("");

    return (
        <div>
            <label htmlFor="nama">Nama:</label>
            <input
                id="nama"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
            />
            <p>Halo, {nama || "Tamu"}!</p>
        </div>
    );
}

export default FormNama;