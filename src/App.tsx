import { Outlet } from "react-router";
import Navigation from "./pages/Navigation"
import { Toaster } from "sonner";
import Footer from "./pages/Fotter";
import { useState } from "react";
import AddNewBookModal from "./components/AddNewBookModal";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <div className="m-auto max-w-7xl px-4 py-6">
      <h1 className=" text-4xl font-bold flex items-center justify-center mt-2 text-blue-800">
        Library Management System
      </h1>
      <Navigation onAddBookClick={() => setIsAddModalOpen(true)} />
      <AddNewBookModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
      ></AddNewBookModal>
      <Outlet />
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App
