import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAlert,
  IonBackButton,
  IonButton, IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonLoading, IonRippleEffect, IonRow, IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Bookmark, bookmarks} from "../bookmark";
import {books} from "../book";
import {addIcons} from "ionicons";
import {checkmarkOutline} from "ionicons/icons";

@Component({
  selector: 'app-bookmark-edit-ocr',
  templateUrl: './bookmark-edit-ocr.page.html',
  styleUrls: ['./bookmark-edit-ocr.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAlert, IonBackButton, IonButton, IonButtons, IonIcon, RouterLink, IonCol, IonGrid, IonItem, IonItemDivider, IonLabel, IonRow, IonTextarea, IonLoading, IonRippleEffect]
})
export class BookmarkEditOcrPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    addIcons({
      checkmarkOutline
    })
  }

  bookmarkContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    " Integer et sapien nec ex faucibus hendrerit. Cras semper" +
    " tellus mollis mattis accumsan. Nulla dignissim finibus blandit. " +
    " Aliquam ac finibus justo."

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
