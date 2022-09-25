import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { sortByDeletedTimeUtil, sortByNameUtil } from '../utils/sort';

export default class DeletetableComponentComponent extends Component {
  sortByDeletedTimeUtil = sortByDeletedTimeUtil;
  sortByNameUtil = sortByNameUtil;

  @tracked isAscendingForDeletedTime = true;

  @tracked isAscendingForName = false;

  @action
  sortByDeletedTime() {
    sortByDeletedTimeUtil(this.args.table, this.isAscendingForDeletedTime);
    this.isAscendingForDeletedTime = !this.isAscendingForDeletedTime;
    this.args.updateModel();
  }

  @action
  sortByName() {
    sortByNameUtil(this.args.table, this.isAscendingForName);
    this.isAscendingForName = !this.isAscendingForName;
    this.args.updateModel();
  }
}
