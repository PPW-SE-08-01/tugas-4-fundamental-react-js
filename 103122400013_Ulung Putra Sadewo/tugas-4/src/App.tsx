import Sapaan from "./components/sapaan";
import CardMahasiswa from "./components/CardMahasiswa";
import Counter from "./components/Counter";
import FormNama from "./components/FormNama";

function App() {
  return (
    <div>
      <Sapaan />
      <CardMahasiswa nama="Ulung Putra Sadewo" nim="103122400013" />
      <hr />
      <Counter />
      <hr />
      <FormNama />
    </div>
  );
}

export default App;