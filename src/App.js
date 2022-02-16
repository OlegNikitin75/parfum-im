import {Routes, Route} from 'react-router-dom';
import Layout from "./components/Lauout";
import Home from "./pages/Home";
import './App.css';
import Error from "./pages/Error";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
