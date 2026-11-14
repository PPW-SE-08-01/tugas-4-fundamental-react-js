import CardMahasiswa from "./CardMahasiswa";

function DaftarMahasiswa() {
    const mahasiswa = [
        { id: 1, nama: "Ani", nim: "10121001" },
        { id: 2, nama: "Budi", nim: "10121002" },
        { id: 3, nama: "Citra", nim: "10121003" },
    ];

    return (
        <div>
            {mahasiswa.map((mhs) => (
                <CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
            ))}
        </div>
    );
}

export default DaftarMahasiswa;