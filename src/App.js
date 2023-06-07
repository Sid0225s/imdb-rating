import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Detail from "./pages/Moviedetail/Detail";
import Movilist from "./component/Movielist/Movilist";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Detail />}></Route>
          <Route path="movies/:type" element={<Movilist />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
