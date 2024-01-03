import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {

  public errorMsg = '';

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  handleClick(event) {
    this.errorMsg = 'Error';
    try {
      void Keyboard.hide();
      event.target.blur();
    } catch {
      console.log('Activated web view.');
    }
  }

  clearErrorMessage() {
    this.errorMsg = '';
  }

  public async openToast() {
    const persistentToast = await this.toastController.create({
    message: `Enable Touch ID<sup class='sup_icon'>&reg;</sup>`,
    cssClass: '',
    position: 'top',
    mode: 'ios',
    animated: true
    });
    await persistentToast.present();
    }

}
