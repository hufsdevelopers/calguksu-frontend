import { action, makeObservable, observable } from 'mobx';

export default class DialogStore {
  preview: Boolean = false;
  feedback: Boolean = false;
  select: Boolean = false;
  delivery: Boolean = false;

  constructor() {
    makeObservable(this, {
      preview: observable,
      feedback: observable,
      select: observable,
      delivery: observable,
      previewShow: action,
      feedbackShow: action,
      selectShow: action,
      deliveryShow: action,
      previewClose: action,
      feedbackClose: action,
      selectClose: action,
      deliveryClose: action,
    });
  }

  previewShow = () => {
    if (!this.preview) this.preview = true;
  };

  feedbackShow = () => {
    if (!this.feedback) this.feedback = true;
  };

  selectShow = () => {
    if (!this.select) this.select = true;
  };

  deliveryShow = () => {
    if (!this.delivery) this.delivery = true;
  };

  previewClose = () => {
    if (this.preview) this.preview = false;
  };

  feedbackClose = () => {
    if (this.feedback) this.feedback = false;
  };

  selectClose = () => {
    if (this.select) this.select = false;
  };

  deliveryClose = () => {
    if (this.delivery) this.delivery = false;
  };
}
