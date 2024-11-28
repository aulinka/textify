import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {CodeInputModule} from "angular-code-input";
import {addIcons} from "ionicons";
import {arrowForwardOutline} from "ionicons/icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonGrid, IonRow, RouterLink, CodeInputModule, IonCol, IonIcon]
})
export class LoginPage implements OnInit {

  constructor() {
    addIcons({
      arrowForwardOutline
    })
  }

  ngOnInit(): void {
  }

  onCodeChanged(code: string) {
  }

  onCodeCompleted(code: string) {
  }


}
