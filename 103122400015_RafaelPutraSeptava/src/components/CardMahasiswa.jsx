export default function CardMahasiswa(props) {
  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 shadow hover:border-blue-500 transition">
      <h3 className="text-lg font-semibold text-blue-400">{props.nama}</h3>
      <p className="text-sm text-blue-300">NIM: {props.nim}</p>
    </div>
  );
}
