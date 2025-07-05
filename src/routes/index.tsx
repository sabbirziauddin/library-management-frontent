import App from "@/App";
import BookList from "@/pages/BookList";
import AddNewBook from "@/pages/AddNewBook";
import BorrowSummary from "@/pages/BorrowSummary";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: BookList,
      },
      {
        path: "/users",
        Component: Users,
      },

      {
        path: "/bookList",
        Component: BookList,
      },
      {
        path: "/borrowSummary",
        Component: BorrowSummary,
      },
      {
        path: "/addBook",
        Component: AddNewBook,
      },
    ],
  },
]);