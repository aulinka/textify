import {Book} from "./Book";

export interface Bookmark {
  id: number;
  book: Book;
  content: string;
  createdAt: string;
}
