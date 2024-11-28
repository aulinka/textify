import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {bookmarks} from "../bookmark";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
  IonContent, IonFab, IonFabButton, IonGrid,
  IonHeader, IonIcon, IonLabel, IonLoading, IonNav, IonNavLink, IonRow, IonSegment, IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {add, heart, personOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";
import {books} from "../book";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonButton, IonNavLink, IonNav, RouterLink, IonCardSubtitle, IonLoading, IonLabel, IonSegment, IonSegmentButton]
})
export class DashboardPage {
  constructor() {
    addIcons({
      add,
      personOutline,
      heart
    });
  }

  bookMarkRouter = "/bookmark"
  chunkedCards = this.chunkArray(bookmarks.map((bm, index) => {
    return {
      title: books[bm.bookId],
      subtitle: this.getRandomDate2024(),
      content: bm.note,
      routerLink: [this.bookMarkRouter, index]
    };
  }), 2); //

  getRandomDate2024(): string {
    const month = Math.floor(Math.random() * 12) + 1;
    const daysInMonth = new Date(2024, month, 0).getDate();
    const day = Math.floor(Math.random() * daysInMonth) + 1;
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');
    return `${formattedDay}.${formattedMonth}.2024`;
  }
  chunkArray(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
