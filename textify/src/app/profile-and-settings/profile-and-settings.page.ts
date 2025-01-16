import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonBadge,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonListHeader,
  IonNav, IonRow,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {person, arrowForwardOutline} from "ionicons/icons";
import {Router, RouterLink} from "@angular/router";
import {SQLiteService} from "../services/SqliteService";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-profile-and-settings',
  templateUrl: './profile-and-settings.page.html',
  styleUrls: ['./profile-and-settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonNav, IonButtons, IonBackButton, IonToggle, IonIcon, IonGrid, IonRow, NgOptimizedImage, IonCol, IonList, IonItem, IonLabel, IonListHeader, IonItemGroup, IonItemDivider, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, RouterLink]
})
export class ProfileAndSettingsPage implements OnInit {

  bookmarkCount: number | null = 0;
  preferredOcrLanguage: string | null = '';

  constructor(private database: SQLiteService, private router: Router) {
    addIcons({
      person, arrowForwardOutline
    })
  }

  async ngOnInit() {
    this.bookmarkCount = await this.database.getBookmarksCount();
    this.preferredOcrLanguage = await this.getPreferredOcrLanguage();
    console.log(`Preferred OCR language in Preferences: ${await this.getPreferredOcrLanguage()}`)
  }

  async getPreferredOcrLanguage(){
    let result = await Preferences.get({key: 'ocrLanguage'})
    return result.value
  }

  async setPreferredOcrLanguage(selectedLanguage: string) {
    this.preferredOcrLanguage = selectedLanguage;
    await Preferences.set({
      key: 'ocrLanguage',
      value: this.preferredOcrLanguage
    })
  }

  onboarding(){
    this.router.navigate(['/onboarding'])
  }
}
