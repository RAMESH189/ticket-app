import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PlatForm from "./pages/PlatForm";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/platform" element={<PlatForm />} />
      </Routes>
    </>
  );
}

export default App;
