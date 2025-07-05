import { useGetBorrowSummaryQuery } from "@/redux/api/libraryApi";

export default function BorrowSummary() {
  const { data: summary, isLoading } = useGetBorrowSummaryQuery();

  if (isLoading) return <div className="p-6">Loading summary...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📚 Borrow Summary</h2>
      <table className="w-full table-auto border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">ISBN</th>
            <th className="p-2 border">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {summary?.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{item.book.title}</td>
              <td className="p-2 border">{item.book.isbn}</td>
              <td className="p-2 border">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
