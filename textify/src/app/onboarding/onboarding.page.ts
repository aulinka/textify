import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {IonicSlides} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {arrowForwardOutline} from "ionicons/icons";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonButton, IonIcon, RouterLink, IonRow],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OnboardingPage implements OnInit {
  swiperModules = [IonicSlides]

  constructor() {
    addIcons({
      arrowForwardOutline
    })
  }

  ngOnInit() {
  }

  swiperImages = ["../assets/onboarding/login.png",
    "../assets/onboarding/dashboard.png",
    "../assets/onboarding/bookmark.png",
    "../assets/onboarding/profile_and_settings.png"
  ];


}
