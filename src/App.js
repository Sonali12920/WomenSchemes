import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header title="WomenSchemes" searchBar={true} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
