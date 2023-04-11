import { Routes, Route } from "react-router-dom";
import './style.css';
import Read from "./component/Read";
import Update from "./component/Update";
import Add from "./component/Add";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Add />} />
        <Route path="read" element={<Read />} />
        <Route path="update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
