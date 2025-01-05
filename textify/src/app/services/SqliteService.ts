import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import {Bookmark} from "../models/Bookmark";

@Injectable({
  providedIn: 'root',
})
export class SQLiteService {
  private db: SQLiteDBConnection | null = null;


  constructor() {}

  async createDatabase() {
    try {
      const sqliteConnection = new SQLiteConnection(CapacitorSQLite);
      await sqliteConnection.checkConnectionsConsistency();
      const existingConnection = await sqliteConnection.isConnection('bookmarks_db', false);
      console.log('meow', JSON.stringify(existingConnection));
      if (existingConnection.result) {
        this.db = await sqliteConnection.retrieveConnection('bookmarks_db', false);
      } else {
        await sqliteConnection.createConnection('bookmarks_db', false, 'no-encryption', 1, false);
        this.db = await sqliteConnection.retrieveConnection('bookmarks_db', false);

        await this.db.open();

        const schema = `CREATE TABLE IF NOT EXISTS bookmark (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        title TEXT NOT NULL,
                        author TEXT,
                        pageNumber INTEGER,
                        note TEXT,
                        content TEXT NOT NULL,
                        createdAt TEXT NOT NULL
                        );`;
        await this.db.execute(schema);
      }
      console.log('Database created successfully!');
    } catch (e) {
      console.error('Unable to create database', e);
    }
    console.log(await this.db!.getUrl());
  }

  async createBookmark(title: string, author: string, pageNumber: number | undefined, note: string | undefined, content: string | undefined, createdAt: any) {
    if (this.db) {
      try {
        await this.db.run(`INSERT INTO bookmark (title, author, pageNumber, note, content, createdAt) VALUES (?, ?, ?, ?, ?, ?)`, [title, author, pageNumber, note, content, createdAt]);
        console.log('Bookmark created successfully!');
      } catch (e) {
        console.error('Error creating bookmark', e);
      }
    }
  }

  async getAllBookmarks(): Promise<Bookmark[]> {
    if (this.db) {
      try {
        const result = await this.db.query('SELECT * FROM bookmark');
        if (result.values && result.values.length > 0) {
          return result.values.map((item: any) => ({
            id: item.id,
            book: {
              title: item.title,
              author: item.author,
              pageNumber: item.pageNumber,
              note: item.note,
            },
            content: item.content || '',
            createdAt: item.createdAt
          }));
        }
      } catch (e) {
        console.error('Error retrieving bookmarks', e);
      }
    }
    return [];
  }

  async getBookmarkById(id: number): Promise<Bookmark | null> {
    if (this.db) {
      try {
        let result = await this.db.query(`SELECT * FROM bookmark WHERE id = ?`, [id]);
        if (result.values && result.values.length > 0) {
          const item = result.values[0];
          return {
            id: item.id,
            book: {
              title: item.title,
              author: item.author,
              pageNumber: item.pageNumber,
              note: item.note,
            },
            content: item.content || '',
            createdAt: item.createdAt
          };
        }
      } catch (e) {
        console.error(`Error retrieving bookmark with id: ${id}`, e);
      }
    }
    return null;
  }

  async updateBookmarkById(updatedBookmark: Bookmark): Promise<Bookmark | null> {
    if (this.db) {
      try {
        let schema = `
        UPDATE bookmark SET
          title = ?,
          author = ?,
          pageNumber = ?,
          note = ?,
          content = ?,
          createdAt = ?
        WHERE id = ?
      `;
        await this.db.run(schema, [
          updatedBookmark.book.title,
          updatedBookmark.book.author,
          updatedBookmark.book.pageNumber,
          updatedBookmark.book.note,
          updatedBookmark.content,
          updatedBookmark.createdAt,
          updatedBookmark.id]);
      } catch (e) {
        console.error(`Error updating bookmark with id: ${updatedBookmark.id}`, e);
      }
    }
    return null;
  }

  async deleteBookmarkById(id: number){
    if (this.db) {
      try {
        await this.db.run(`DELETE FROM bookmark WHERE id = ?`, [id]);
        console.log(`Bookmark with id ${id} deleted successfully!`);
      } catch (e) {
        console.error('Error deleting bookmark:', e);
      }
    } else {
      console.error('Database connection is not available.');
    }
  }

  async getBookmarksCount(): Promise<number | null> {
    if (this.db) {
      try {
        let schema = `SELECT COUNT(*) AS count FROM bookmark`
        let result: any = await this.db.query(schema);
        if (result.values && result.values.length > 0) {
          console.log(`Bookmark count: ${result.value}`)
          return result.values[0].count;
        }
      } catch (e) {
        console.error('Error deleting bookmark:', e);
      }
    }
    return null;
  }

  async closeConnection() {
    if (this.db) {
      await this.db.close();
      await CapacitorSQLite.closeConnection({ database: 'bookmarks_db' });
    }
  }
}
