import CardMahasiswa from "./CardMahasiswa";

export default function DaftarMahasiswa() {
  const mahasiswa = [
    { id: 15, nama: "Rafael Putra Septava", nim: "103122400015" },
  ];

  return (
    <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 space-y-4">
      <h2 className="text-xl font-bold text-blue-400 mb-4">Daftar Mahasiswa</h2>
      <div className="grid gap-3">
        {mahasiswa.map((mhs) => (
          <CardMahasiswa key={mhs.id} nama={mhs.nama} nim={mhs.nim} />
        ))}
      </div>
    </div>
  );
}
