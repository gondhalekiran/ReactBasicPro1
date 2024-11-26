import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const AdminLogin = lazy(() => import("./Pages/Admin/AdminLogin"));

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Admin" element={<AdminLogin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
