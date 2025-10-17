import { LightningElement } from 'lwc';

export default class ContactMeButton extends LightningElement {
  isOpen = false;
  onOpen() {
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }

  handleSubmit() {

  }
}