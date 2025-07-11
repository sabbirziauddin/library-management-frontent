import EditBookModal from "@/components/EditBookModal";
import { Trash2 } from "lucide-react";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "@/redux/api/libraryApi";
import BorrowBookModal from "@/components/BorrowBookModal";

const BookList = () => {
  const { data: books, isLoading } = useGetBooksQuery();

  const [deleteBook] = useDeleteBookMutation();
  console.log("fetch data from backend", books);

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">All Books</h2>
      </div>
      <table className="w-full table-auto border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Genre</th>
            <th className="p-2 border">ISBN</th>
            <th className="p-2 border">Copies</th>
            <th className="p-2 border">Available</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        {
          <tbody>
            {books?.map((book) => (
              <tr key={book._id} className="text-center">
                <td className="p-2 border">{book.title}</td>
                <td className="p-2 border">{book.author}</td>
                <td className="p-2 border">{book.genre}</td>
                <td className="p-2 border">{book.isbn}</td>
                <td className="p-2 border">{book.copies}</td>
                <td className="p-2 border">{book.available ? "Yes" : "No"}</td>
                <td className="p-2 border">
                  <EditBookModal book={book}></EditBookModal>
                  <BorrowBookModal book={book}></BorrowBookModal>
                  <button
                    title="Delete Book"
                    className="text-red-500"
                    onClick={() => {
                      if (
                        confirm("Are you sure you want to delete this book?")
                      ) {
                        deleteBook(book._id);
                      }
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        }
      </table>
    </div>
  );
};

export default BookList;
