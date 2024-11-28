import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader,
  IonNav, IonRow,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {person} from "ionicons/icons";

@Component({
  selector: 'app-profile-and-settings',
  templateUrl: './profile-and-settings.page.html',
  styleUrls: ['./profile-and-settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonNav, IonButtons, IonBackButton, IonToggle, IonIcon, IonGrid, IonRow, NgOptimizedImage, IonCol, IonList, IonItem, IonLabel, IonListHeader, IonItemGroup, IonItemDivider]
})
export class ProfileAndSettingsPage implements OnInit {

  constructor() {
    addIcons({
      person
    })
  }

  ngOnInit() {}
}
