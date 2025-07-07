import home from "../assets/home.svg";
import { Link } from "react-router-dom";

interface NavigationProps {
  onAddBookClick: () => void;
}

const Navigation = ({ onAddBookClick }: NavigationProps) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between rounded-lg mb-6 border border-gray-200">
      {/* Logo and App Name */}
      <div className="flex items-center gap-3">
        <img src={home} alt="Home" className="h-10 w-10" />
        <h1 className="text-2xl font-bold text-blue-700">Library Manager</h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 items-center">
        <button
          onClick={onAddBookClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Book
        </button>

        <Link
          to="/borrowSummary"
          className="text-blue-600 hover:text-blue-800 font-medium transition"
        >
          Borrow Summary
        </Link>

        <Link
          to="/bookList"
          className="text-blue-600 hover:text-blue-800 font-medium transition"
        >
          All Books
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
