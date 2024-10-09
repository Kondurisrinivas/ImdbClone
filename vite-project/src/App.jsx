import "./App.css";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies/>}/>
          <Route path="/WatchList" element={<WatchList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
