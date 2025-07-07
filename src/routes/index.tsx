import App from "@/App";
import BookList from "@/pages/BookList";
import BorrowSummary from "@/pages/BorrowSummary";
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
        path: "/bookList",
        Component: BookList,
      },
      {
        path: "/borrowSummary",
        Component: BorrowSummary,
      },
    ],
  },
]);