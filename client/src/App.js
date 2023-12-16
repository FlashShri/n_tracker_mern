import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./component/Navigationbar";
import { DashBorad } from "./component/DashBorad";
import { Login } from "./component/Login";
import { Signup } from "./component/SignUp";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Adminlogin } from "./component/AdminLogin";
import { AdminPanel } from "./component/adminpanel";
import { StudentEditForm } from './component/StudentEditForm';
import CrudEdit from "./admin/CrudEdit";
import CrudDelete from "./admin/CrudDelete";
import NewAdminPanel from "./admin/NewAdminPanel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<DashBorad></DashBorad>}></Route>

        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<Adminlogin></Adminlogin>}></Route>
        <Route path="/adminpanel" element={<AdminPanel />}></Route>
        <Route path="admin/edit/:name" element={<StudentEditForm />}></Route>

        <Route exact path="/cruds/:n/edit" element={<CrudEdit />} />
        <Route exact path="/cruds/:n/delete" element={<CrudDelete />} />
        <Route exact path="/admincrud" element={<NewAdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
