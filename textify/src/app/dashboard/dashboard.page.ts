import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardTitle, IonCol,
  IonContent, IonFab, IonFabButton, IonGrid,
  IonHeader, IonIcon, IonNav, IonNavLink, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {add, navigate, person} from "ionicons/icons";
import {Router, RouterLink} from "@angular/router";
import {ProfileAndSettingsPage} from "../profile-and-settings/profile-and-settings.page";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonFab, IonFabButton, IonGrid, IonIcon, IonRow, IonButton, IonNavLink, IonNav, RouterLink]
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) {
    addIcons({
      add,
      person
    });
  }

  ngOnInit(): void {}
}
