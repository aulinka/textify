
export class Bookmark {
  public bookId: number;
  public pageNumber: number;
  public note: String;

  constructor(bookId: number, pageNumber: number, note: String) {
    this.bookId = bookId;
    this.pageNumber = pageNumber;
    this.note = note;
  }
}

export const bookmarks = [
  new Bookmark(0, 25, 'Aliquam erat volutpat. Quisque et velit felis. Phasellus id viverra tortor.'),
  new Bookmark(1, 65, 'Aliquam erat volutpat. Quisque et velit felis. Phasellus id viverra tortor.'),
  new Bookmark(2, 42, 'Aliquam erat volutpat. Quisque et velit felis. Phasellus id viverra tortor.'),
  new Bookmark(3, 66, 'Aliquam erat volutpat. Quisque et velit felis. Phasellus id viverra tortor.'),
  new Bookmark(4, 7, 'Aliquam erat volutpat. Quisque et velit felis. Phasellus id viverra tortor.'),
];
