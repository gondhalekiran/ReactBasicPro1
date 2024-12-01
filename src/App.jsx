import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Register = lazy(() => import("./Pages/Client/RegisterPost"));

const Home = lazy(() => import("./Pages/Home"));
const PropsObjectOrDestructured = lazy(() => import("./Pages/PropsObjectOrDestructured"));
const AdminLogin = lazy(() => import("./Pages/Admin/AdminLogin"));
const MultipleComponentFromSameFile = lazy(() => import("./Pages/MultipleComponentFromSameFile"))
const CLogin = lazy(() => import("./Pages/Client/CLogin"));
const VariableCalls = lazy(() => import("./Pages/VariableCalls"));
const Props = lazy(() => import("./Pages/Props"));
const ProfileGet = lazy(() => import("./Pages/Client/ProfileGet"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propsObjectOrDestructured" element={<PropsObjectOrDestructured />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/login" element={<CLogin/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/multipleComponentFromSameFile" element = {<MultipleComponentFromSameFile/>}/>
            <Route path="/variableCalls" element = {<VariableCalls/>}/>
            <Route path="/props" element = {<Props/>}/>
            <Route path="/profile" element={<ProfileGet/>}></Route>
            
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
