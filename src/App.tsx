import { Homepage } from "./Routes/Homepage";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Courses from "./Routes/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./Routes/Account";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";
import NotFound from "./Routes/404";

function App() {
  return (
    <div className=" w-full min-h-screen relative dark:bg-slate-100 bg-slate-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Courses" element={<Courses />}></Route>
          <Route path="/Account" element={<Account />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Account" element={<Account />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
