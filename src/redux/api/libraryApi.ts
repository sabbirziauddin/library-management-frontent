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
  interface ApiResponse {
    success: boolean;
    message: string;
    data: Book[];
  }

export const libraryApi = createApi({
  reducerPath: "libraryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  tagTypes: ["Books", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query<any[], void>({
      query: () => "/books",
      providesTags: ["Books"],
      transformResponse: (response: ApiResponse) => {
        return response.data; // Extract the books array from response.data
      },
    }),
    addBook: builder.mutation<any, Partial<any>>({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<any,{id:string,updatedData:Partial<Book>}>({
      query: ({ id, updatedData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["Books"],
    }),
    // Add other endpoints: updateBook, borrowBook, getBorrowSummary etc.
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation,useUpdateBookMutation } = libraryApi;
