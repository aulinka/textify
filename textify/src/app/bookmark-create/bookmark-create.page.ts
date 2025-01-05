import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton, IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonInput,
  IonItem,
  IonItemDivider, IonLabel, IonLoading, IonRow, IonTextarea,
  IonTitle,
  IonToolbar, LoadingController
} from '@ionic/angular/standalone';
import {Router, RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {checkmarkOutline, refreshOutline} from "ionicons/icons";
import * as moment from "moment";
import {SQLiteService} from "../services/SqliteService";
import {Camera, CameraResultType} from "@capacitor/camera";
import {createWorker} from "tesseract.js";
import * as Tesseract from "tesseract.js";
import {debug} from "node:util";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-bookmark-create',
  templateUrl: './bookmark-create.page.html',
  styleUrls: ['./bookmark-create.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonGrid, IonItem, IonItemDivider, IonLabel, IonRow, IonButton, IonIcon, IonInput, IonTextarea, IonLoading, RouterLink, IonBackButton, IonButtons]
})
export class BookmarkCreatePage implements OnInit {

  bookTitle: string = '';
  author: string = '';
  pageNumber: number = 0;
  note: string = '';
  bookmarkContent: string | undefined = ""
  photoPath: string = ''

  languageCode: { [key: string]: string } = {
    "Slovak": "slk",
    "English": "eng"
  }

  constructor(private database: SQLiteService, private router: Router, private loadingCtrl: LoadingController) {
    addIcons({
      checkmarkOutline, refreshOutline
    })
  }
  async ngOnInit() {
    await this.takePhotoAndReturnAddress()
  }

  // @ts-ignore
  async takePhotoAndReturnAddress() {
    try {
      let photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: undefined,
        quality: 90,
        saveToGallery: true,
      });
      console.log('Camera PENIS URI:', photo.webPath);
      if (photo.webPath != null) {
        this.photoPath = photo.webPath;

        const loading = await this.loadingCtrl.create({
          message: 'Processing image...',
        });

        await loading.present();
        await this.recognizeText(this.photoPath);
        await loading.dismiss();

      }
    } catch (error) {
      console.error('Camera error:', error);
    }
  }

  async getOcrLanguage(): Promise<string | null> {
    let result  = await Preferences.get({key: 'ocrLanguage'});
    return result.value;
  }

  async recognizeText(path: string){
    try {
      let worker = await Tesseract.createWorker({
        logger: (info) => console.log(info),
      })
      let language = await this.getOcrLanguage();
      // @ts-ignore
      await worker.loadLanguage(this.languageCode[language])
      // @ts-ignore
      await worker.initialize(this.languageCode[language])

      console.log(`OCR language: ${language}`)
      let { data: { text } } = await worker.recognize(path)
      console.log('OCR Result:', text);
      this.bookmarkContent = text;
      await worker.terminate()

    } catch (e) {
      console.error('Error processing the photo with Tesseract:', e);
    }
  }

  async createBookmark(){
    let currentTimeStamp = Date.now();
    console.log("Creating new bookmark...");
    await this.database.createBookmark(this.bookTitle, this.author, this.pageNumber, this.note, this.bookmarkContent, currentTimeStamp);
    await this.router.navigate(['/dashboard']);
  }
}
