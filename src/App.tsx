import { Outlet } from "react-router";
import Navigation from "./pages/Navigation"

function App() {

  return (
    <div className="m-auto max-w-7xl px-4 py-6"> 
      <h1 className=" text-4xl font-bold flex items-center justify-center mt-2 text-blue-800">
        Library Management System
      </h1>
      <Navigation></Navigation>
      <Outlet/>
    </div>
  );
}

export default App
