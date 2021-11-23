import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import KommunicateChat from "./utility/chat";

function App() {
  return (
    <>
      <NavbarComponent />
      <KommunicateChat />
      <Footer />
    </>
  );
}

export default App;
