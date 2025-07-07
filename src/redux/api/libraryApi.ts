import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define proper types
interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export const libraryApi = createApi({
  reducerPath: "libraryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  tagTypes: ["Books", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query<any[], void>({
      query: () => "/api/books",
      providesTags: ["Books"],
      transformResponse: (response: any) => {
        // Handle the nested structure: response.data.books
        return response.data.books || response.data; // Fallback to response.data if books property doesn't exist
      },
    }),
    addBook: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: "/api/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<
      any,
      { id: string; updatedData: Partial<Book> }
    >({
      query: ({ id, updatedData }) => ({
        url: `/api/books/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["Books"],
    }),
    borrowBook: builder.mutation<
      any,
      { bookId: string; quantity: number; dueDate: string }
    >({
      query: (body) => ({
        url: "/api/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Books", "Borrow"], // refresh both
    }),
    getBorrowSummary: builder.query<
      { book: { title: string; isbn: string }; totalQuantity: number }[],
      void
    >({
      query: () => "/api/borrow",
      providesTags: ["Borrow"],
      transformResponse: (response: any) => response.data,
    }),

    // Add other endpoints: updateBook, borrowBook, getBorrowSummary etc.
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = libraryApi;
