import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
  IonContent, IonFab, IonFabButton, IonGrid,
  IonHeader, IonIcon, IonLabel, IonLoading, IonNav, IonNavLink, IonNote, IonRow, IonSegment, IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {add, heart, personOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";
import {SQLiteService} from "../services/SqliteService";
import {Bookmark} from "../models/Bookmark";
import * as moment from "moment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonButton, IonNavLink, IonNav, RouterLink, IonCardSubtitle, IonLoading, IonLabel, IonSegment, IonSegmentButton, IonBadge, IonNote]
})
export class DashboardPage {

  bookMarkRouter = "/bookmark"
  bookmarks: Bookmark[] = [];
  chunkedCards = [];

  constructor(private database: SQLiteService) {
    addIcons({
      add,
      personOutline,
      heart
    });
  }

  async ionViewWillEnter() {
     await this.getAllBookmarks()
  }

  async ngOnInit() {
    await this.getAllBookmarks()
  }

  chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  async getAllBookmarks(){
    this.bookmarks = await this.database.getAllBookmarks()
    // @ts-ignore
    this.chunkedCards = this.chunkArray(this.bookmarks.map((bm, index) => {
      return {
        title: bm.book.title,
        id: bm.id,
        subtitle: moment.unix(parseInt(bm.createdAt)/1000).format('DD.MM.YYYY'),
        content: bm.book.note,
        routerLink: [this.bookMarkRouter, bm.id]
      };
    }), 2);
  }





}
