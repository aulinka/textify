import { Component } from '@angular/core';
import {IonButton, IonContent, IonGrid, IonImg, IonNav, IonRow, NavController} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {DashboardPage} from "../dashboard/dashboard.page";
import {NgOptimizedImage} from "@angular/common";
import {thunderstorm} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonGrid, IonRow, RouterLink, IonNav, IonImg, NgOptimizedImage, IonContent],
})
export class HomePage {
  component = DashboardPage
  constructor(private  router: Router) {}
  navigate(){
    this.router.navigate(['/onboarding']);
  }

}
