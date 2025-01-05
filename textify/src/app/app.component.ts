import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from "swiper/element/bundle";
import {SQLiteService} from "./services/SqliteService";

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {
  constructor(private sqliteService: SQLiteService) {
    this.initApp();
  }

  async initApp(){
    console.log(this.sqliteService)
    await this.sqliteService.createDatabase();
  }
}
