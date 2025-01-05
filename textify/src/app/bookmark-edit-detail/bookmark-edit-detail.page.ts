import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonLoading, IonRow, IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {book, checkmarkOutline} from "ionicons/icons";
import {SQLiteService} from "../services/SqliteService";
import {Bookmark} from "../models/Bookmark";

@Component({
  selector: 'app-bookmark-edit-detail',
  templateUrl: './bookmark-edit-detail.page.html',
  styleUrls: ['./bookmark-edit-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons, IonIcon, IonGrid, IonCol, IonItem, IonItemDivider, IonLabel, IonRow, IonInput, IonTextarea, IonLoading, RouterLink]
})
export class BookmarkEditDetailPage {

  bookmark: Bookmark | null | undefined;

  title = '';
  author: string = '';
  pageNumber = '';
  note =  '';

  constructor(private activatedRoute: ActivatedRoute, private database: SQLiteService, private router: Router) {
    addIcons({
      checkmarkOutline
    })
  }

  async ngOnInit() {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.bookmark = await this.database.getBookmarkById(id);
    this.title = this.bookmark?.book.title ?? '';
    this.author = this.bookmark?.book.author ?? '';
    this.pageNumber = (this.bookmark?.book.pageNumber ?? 0).toString();
    this.note = this.bookmark?.book.note ?? '';

    console.log("Bookmark: ", JSON.stringify(this.bookmark))
  }

  async updateBookmark() {
    this.bookmark!.book.title = this.title
    this.bookmark!.book.author = this.author
    this.bookmark!.book.pageNumber = parseInt(this.pageNumber)
    this.bookmark!.book.note = this.note

    await this.database.updateBookmarkById(this.bookmark!)
    console.log("Updated bookmark: ", JSON.stringify(this.bookmark))
    await this.router.navigate(['/bookmark', this.bookmark!.id], {
      replaceUrl: true
    });
  }
}
