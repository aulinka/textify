import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonItem, IonNote,
  IonRow,
  IonTitle,
  IonToolbar, ToastController
} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {CodeInputComponent, CodeInputModule} from "angular-code-input";
import {addIcons} from "ionicons";
import {arrowForwardOutline} from "ionicons/icons";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonGrid, IonRow, RouterLink, CodeInputModule, IonCol, IonIcon, IonItem, IonNote]
})
export class LoginPage implements OnInit {

  @ViewChild('codeInput') codeInput !: CodeInputComponent;

  constructor(private router: Router, private toastController: ToastController) {
    addIcons({
      arrowForwardOutline
    })
  }

  ngOnInit(): void{
  }

  async setPin(code: string) {
    await Preferences.set({
      key: 'pin',
      value: `${code}`
      })

    await Preferences.set({
      key: 'pinCreatedAt',
      value: Date.now().toString()
    })
  }

  async getPin(){
    let result = await Preferences.get({key: 'pin'});
    return result.value;
  }

  onCodeChanged(code: string) {
  }

  async onCodeCompleted(code: string) {
    if (await this.getPin() == null){
      await this.setPin(code);
      const toast = await this.toastController.create({
        message: 'You successfully created new PIN!',
        duration: 2500,
        position: 'bottom',
      });
      await toast.present();
      await this.router.navigate(['/dashboard']);

    } else if (await this.getPin() == code){
      console.log("PIN: ", await this.getPin())
      await this.router.navigate(['/dashboard']);

    } else {
      this.codeInput.reset();
      this.codeInput.focusOnField(0);

      const toast = await this.toastController.create({
        message: 'PIN that you provided is not correct!',
        duration: 2500,
        position: 'bottom',
      });
      await toast.present();
    }
  }
}
