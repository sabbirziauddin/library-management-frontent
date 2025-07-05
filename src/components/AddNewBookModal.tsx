import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useAddBookMutation } from "@/redux/api/libraryApi";
import { useNavigate } from "react-router";

import { toast } from "sonner";
import { useState } from "react";

interface AddBookFormData {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: string;
  isAvailable: string;
  description: string;
}

export default function AddNewBookModal() {
  const [addBook, { isLoading }] = useAddBookMutation();
  const form = useForm<AddBookFormData>({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      copies: "",
      isAvailable: "true",
      description: "",
    },
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: AddBookFormData) => {
    try {
      const result = await addBook({
        title: data.title,
        author: data.author,
        genre: data.genre,
        isbn: data.isbn,
        description: data.description,
        copies: Number(data.copies),
        available: data.isAvailable === "true", // convert string to boolean
      }).unwrap();

      console.log("book added successfully", result);

      form.reset();
      setOpen(false); // Clear form
      navigate("/bookList");
      toast.success("Book added successfully!");
    } catch (error: any) {
      toast.error("Failed to add book. Please try again.");
      console.error(
        "Error adding book:",
        error?.data || error?.error || error?.message || error
      );
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-400 hover:bg-blue-200" variant="outline">
          Add New Book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Book</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Book title</FormLabel>
                  <FormControl>
                    <Input placeholder="Book Title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Add Book Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Book Author" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">Fiction</SelectItem>
                      <SelectItem value="NON_FICTION">Non_fiction</SelectItem>
                      <SelectItem value="SCIENCE">Science</SelectItem>
                      <SelectItem value="HISTORY">History</SelectItem>
                      <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                      <SelectItem value="FANTASY">Fantasy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Book ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="Book ISBN" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Book Copies</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Book Copies" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isAvailable"
              defaultValue="true" // Set default here or in useForm defaultValues
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is Available?</FormLabel>
                  <FormControl>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          value="true"
                          checked={field.value === "true"}
                          onChange={field.onChange}
                          className="accent-blue-600"
                        />
                        True
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          value="false"
                          checked={field.value === "false"}
                          onChange={field.onChange}
                          className="accent-blue-600"
                        />
                        False
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Book Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Book Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="mt-2">
                  Cancel
                </Button>
              </DialogClose>
              <Button className="mt-2" type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

