import {Component, OnInit} from '@angular/core';
import {IonButton, IonContent, IonGrid, IonImg, IonNav, IonRow, NavController} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {DashboardPage} from "../dashboard/dashboard.page";
import {NgOptimizedImage} from "@angular/common";
import {thunderstorm} from "ionicons/icons";
import {Preferences} from "@capacitor/preferences";
import {SplashScreen} from "@capacitor/splash-screen";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonGrid, IonRow, RouterLink, IonNav, IonImg, NgOptimizedImage, IonContent],
})
export class HomePage implements OnInit{
  component = DashboardPage

  constructor(private  router: Router) {}

  ngOnInit(): void {
    SplashScreen.show({
      showDuration: 2000
    })
    this.navigate()
  }

  async getPin(){
    let result = await Preferences.get({key: 'pin'});
    return result.value;
  }

  async navigate(){
    if (await this.getPin() != null){
      await this.router.navigate(['/login']);
    } else {
      await this.router.navigate(['/onboarding']);
    }
  }



}
