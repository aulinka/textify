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
import {Bookmark, bookmarks} from "../bookmark";
import {books} from "../book";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {checkmarkOutline,closeCircleOutline, checkmarkCircleOutline} from "ionicons/icons";

@Component({
  selector: 'app-bookmark-edit-detail',
  templateUrl: './bookmark-edit-detail.page.html',
  styleUrls: ['./bookmark-edit-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButton, IonButtons, IonIcon, IonGrid, IonCol, IonItem, IonItemDivider, IonLabel, IonRow, IonInput, IonTextarea, IonLoading, RouterLink]
})
export class BookmarkEditDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    addIcons({
      checkmarkOutline,
      closeCircleOutline
    })
  }

  protected bookmark: Bookmark | null = null;
  protected bookName: String | null = null;
  protected id: number | null = null;


  ngOnInit() {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.id = id
    this.bookmark = bookmarks[id];
    this.bookName = books[this.bookmark.bookId];
  }

}
