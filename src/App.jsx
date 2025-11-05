import Header from "./components/Header";
import Main from "./components/Main";
import languages from "/src/assets/data/languages.js";

function App() {
  return (
    <>
      <Header />
      <Main buttonsArray={languages} />
    </>
  );
}

export default App;
