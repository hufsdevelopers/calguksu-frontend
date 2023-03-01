import { action, makeObservable, observable } from 'mobx';

export default class DialogStore {
  preview: Boolean = false;
  report: Boolean = false;
  select: Boolean = false;
  subscribe: Boolean = false;

  constructor() {
    makeObservable(this, {
      preview: observable,
      report: observable,
      select: observable,
      subscribe: observable,
      previewShow: action,
      reportShow: action,
      selectShow: action,
      subscribeShow: action,
      previewClose: action,
    });
  }

  previewShow = () => {
    if (!this.preview) this.preview = true;
  };

  reportShow = () => {
    if (!this.report) this.report = true;
  };

  selectShow = () => {
    if (!this.select) this.select = true;
  };

  subscribeShow = () => {
    if (!this.subscribe) this.subscribe = true;
  };

  previewClose = () => {
    if (this.preview) this.preview = false;
  };

  reportClose = () => {
    if (this.report) this.report = false;
  };

  selectClose = () => {
    if (this.select) this.select = false;
  };

  subscribeClose = () => {
    if (this.subscribe) this.subscribe = false;
  };
}
