import { Homepage } from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className=" w-full min-h-screen relative dark:bg-dark bg-slate-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="pages/About" element={<About />}></Route>
          <Route path="pages/Contact" element={<Contact />}></Route>
          <Route path="pages/Courses" element={<Courses />}></Route>
          <Route path="pages/Account" element={<Account />}></Route>
          <Route path="pages/SignUp" element={<SignUp />}></Route>
          <Route path="pages/Login" element={<Login />}></Route>
          <Route path="pages/Account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
