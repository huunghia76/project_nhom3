import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './containers/DefaultLayout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/admin/*" element={<DefaultLayoutAdmin />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
