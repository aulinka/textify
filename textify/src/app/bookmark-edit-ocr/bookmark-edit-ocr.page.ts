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
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {books} from "../book";
import {addIcons} from "ionicons";
import {checkmarkOutline} from "ionicons/icons";
import {SQLiteService} from "../services/SqliteService";
import {Bookmark} from "../models/Bookmark";

@Component({
  selector: 'app-bookmark-edit-ocr',
  templateUrl: './bookmark-edit-ocr.page.html',
  styleUrls: ['./bookmark-edit-ocr.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAlert, IonBackButton, IonButton, IonButtons, IonIcon, RouterLink, IonCol, IonGrid, IonItem, IonItemDivider, IonLabel, IonRow, IonTextarea, IonLoading, IonRippleEffect]
})
export class BookmarkEditOcrPage implements OnInit {

  bookmark: Bookmark | null | undefined;
  bookmarkContent = '';

  constructor(private activatedRoute: ActivatedRoute, private database: SQLiteService, private router: Router) {
    addIcons({
      checkmarkOutline
    })
  }


  async ngOnInit() {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.bookmark = await this.database.getBookmarkById(id);
    this.bookmarkContent = this.bookmark?.content ?? ''
  }

  async updateBookmark() {
    this.bookmark!.content = this.bookmarkContent

    await this.database.updateBookmarkById(this.bookmark!)
    console.log("Updated bookmark: ", JSON.stringify(this.bookmark))
    await this.router.navigate(['/bookmark', this.bookmark!.id], {
      replaceUrl: true
    });
  }

}
