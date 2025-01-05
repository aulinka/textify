import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonBadge,
  IonButtons, IonCard, IonCardHeader, IonCardTitle,
  IonContent, IonGrid,
  IonHeader, IonIcon, IonItem, IonLabel, IonNote,
  IonTitle, IonToggle,
  IonToolbar, ToastController
} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import * as moment from "moment";
import {CodeInputModule} from "angular-code-input";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-pin-change',
  templateUrl: './pin-change.page.html',
  styleUrls: ['./pin-change.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonGrid, IonIcon, IonItem, IonLabel, IonToggle, RouterLink, IonNote, CodeInputModule]
})
export class PinChangePage implements OnInit {

  lastPin: string = ''

  constructor(private router: Router, private toastController: ToastController) { }

  async ngOnInit() {
    await this.getLastPinTimestamp()
  }

  async getLastPinTimestamp(){
    let result = await Preferences.get({key: 'pinCreatedAt'});
    if (typeof result.value === "string") {
      this.lastPin = moment.unix(parseInt(result.value) / 1000).format('DD.MM.YYYY')
    }
  }

  onCodeChanged(code: string) {
  }

  async setPin(code: string) {
    await Preferences.remove({key: 'pin'});

    await Preferences.set({
      key: 'pin',
      value: `${code}`
    })

    await Preferences.set({
      key: 'pinCreatedAt',
      value: Date.now().toString()
    })
  }

  async onCodeCompleted(code: string) {
    await this.setPin(code);
    const toast = await this.toastController.create({
      message: 'You successfully created new PIN!',
      duration: 2500,
      position: 'bottom',
    });
    await toast.present();
    await this.router.navigate(['/profile-and-settings'])
  }

}
