import { action, makeObservable, observable } from 'mobx';

export default class SelectDialogStore {
  isClicked: Boolean = false;

  constructor() {
    makeObservable(this, {
      isClicked: observable,
      show: action,
      close: action,
    });
  }

  show = () => {
    if (!this.isClicked) this.isClicked = true;
  };

  close = () => {
    if (this.isClicked) this.isClicked = false;
  };
}
