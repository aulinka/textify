import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton, IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonInput,
  IonItem,
  IonItemDivider, IonLabel, IonLoading, IonRow, IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {checkmarkOutline} from "ionicons/icons";

@Component({
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.page.html',
  styleUrls: ['./bookmark-create.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonGrid, IonItem, IonItemDivider, IonLabel, IonRow, IonButton, IonIcon, IonInput, IonTextarea, IonLoading, RouterLink, IonBackButton, IonButtons]
})
export class BookmarkCreatePage implements OnInit {

  constructor() {
    addIcons({
      checkmarkOutline
    })
  }
  bookmarkContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    " Integer et sapien nec ex faucibus hendrerit. Cras semper" +
    " tellus mollis mattis accumsan. Nulla dignissim finibus blandit. " +
    " Aliquam ac finibus justo."

  ngOnInit() {
  }

}
