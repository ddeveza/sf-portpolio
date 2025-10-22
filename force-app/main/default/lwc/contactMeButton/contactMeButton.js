import { LightningElement } from 'lwc';

export default class ContactMeButton extends LightningElement {
  fieldList = ['firstName', 'lastName',];
  get fields() {
    return this.fieldList;
  }
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