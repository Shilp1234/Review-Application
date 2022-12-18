import "./App.css";
import Reviews from "./Components/Reviews";
import NavBar from "./Components/NavBar/Navbar";
function App() {
  return (
    <>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="container">
        <Reviews />
      </div>
    </>
  );
}

export default App;