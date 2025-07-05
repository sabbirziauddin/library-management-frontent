import App from "@/App";
import BookList from "@/pages/BookList";
import BorrowBooks from "@/pages/BorrowBooks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {
                index:true,
                Component:BookList
            },
            {
                path:"/users",
                Component:Users
            },
            {
                path:"/borrow",
                Component:BorrowBooks
            },
            {
                path:"/bookList",
                Component:BookList
            }
        ]

    }
])