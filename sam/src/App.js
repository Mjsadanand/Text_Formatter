import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <About />

        <TextForm />
      </div>

      <Footer />
    </>
  );
}

export default App;
