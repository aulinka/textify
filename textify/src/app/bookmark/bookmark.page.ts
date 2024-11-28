import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons, IonCheckbox, IonCol,
  IonContent, IonFab, IonFabButton, IonGrid,
  IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonRow, IonSegment, IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {createOutline, heart, closeOutline} from "ionicons/icons";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Bookmark, bookmarks} from "../bookmark";
import {books} from "../book";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonButton, IonIcon, IonGrid, IonRow, IonItemGroup, IonItem, IonLabel, IonCol, IonFab, IonFabButton, IonItemDivider, RouterLink, IonAlert, IonSegment, IonSegmentButton, IonCheckbox]
})
export class BookmarkPage {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    addIcons({
      heart,
      closeOutline,
      createOutline
    })
  }

  bookmarkContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    " Integer et sapien nec ex faucibus hendrerit. Cras semper" +
    " tellus mollis mattis accumsan. Nulla dignissim finibus blandit. " +
    " Aliquam ac finibus justo."

  protected bookmark: Bookmark | null = null;
  protected bookName: String | null = null;
  protected id: number | null = null;

  ngOnInit() {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.id = id
    this.bookmark = bookmarks[id];
    this.bookName = books[this.bookmark.bookId];
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
