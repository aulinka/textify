import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAlert,
  IonBackButton, IonBadge,
  IonButton,
  IonButtons, IonCheckbox, IonCol,
  IonContent, IonFab, IonFabButton, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonRow, IonSegment, IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {createOutline, heart, closeOutline, bookmark, book} from "ionicons/icons";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {SQLiteService} from "../services/SqliteService";
import {Bookmark} from "../models/Bookmark";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonItemGroup, IonItem, IonLabel, IonCol, IonFab, IonFabButton, IonItemDivider, RouterLink, IonAlert, IonSegment, IonSegmentButton, IonCheckbox, IonBadge]
})
export class BookmarkPage {

  bookmark: Bookmark | null | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private database: SQLiteService) {
    addIcons({
      heart,
      closeOutline,
      createOutline
    })
  }

  async ionViewWillEnter() {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.bookmark = await this.database.getBookmarkById(id)
  }

  async ngOnInit() {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.bookmark = await this.database.getBookmarkById(id)
  }

  async deleteBookmark(id: number) {
    await this.database.deleteBookmarkById(id)
  }

  public alertButtons = [
    {
      text: 'Cancel',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.router.navigate(['/dashboard']);
      }
    },
  ];
}
