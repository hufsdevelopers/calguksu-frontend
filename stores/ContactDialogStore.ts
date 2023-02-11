import { action, makeObservable, observable } from 'mobx';

export default class ContectDialogStore {
  isClicked: Boolean = false;

  constructor() {
    makeObservable(this, {
      isClicked: observable,
      click: action,
    });
  }

  click = () => {
    this.isClicked = !this.isClicked;
  };
}
