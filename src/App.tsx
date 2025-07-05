import { Outlet } from "react-router";
import Navigation from "./pages/Navigation"
import { Toaster } from "sonner";
import Footer from "./pages/Fotter";

function App() {
  return (
    <div className="m-auto max-w-7xl px-4 py-6">
      <h1 className=" text-4xl font-bold flex items-center justify-center mt-2 text-blue-800">
        Library Management System
      </h1>
      <Navigation />
      <Outlet />
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App
