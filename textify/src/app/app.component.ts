import {Component, NgModule} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {DashboardPage} from "./dashboard/dashboard.page";
import {ProfileAndSettingsPage} from "./profile-and-settings/profile-and-settings.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})

export class AppComponent {
  constructor() {}
}
