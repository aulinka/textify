import { Component } from '@angular/core';
import {IonButton, IonGrid, IonNav, IonRow} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {DashboardPage} from "../dashboard/dashboard.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonGrid, IonRow, RouterLink, IonNav],
})
export class HomePage {
  component = DashboardPage
  constructor(private router: Router) {}

  navigate(){
    this.router.navigate(['/dashboard']).then(r => false)
  }
}
