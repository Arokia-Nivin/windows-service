import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  sortByCreatedTimeUtil,
  sortByModifiedTimeUtil,
  sortByNameUtil,
} from '../utils/sort';

export default class TableComponentComponent extends Component {
  sortByCreatedTimeUtil = sortByCreatedTimeUtil;
  sortByModifiedTimeUtil = sortByModifiedTimeUtil;
  sortByNameUtil = sortByNameUtil;

  @tracked isAscendingForCreatedTime = true;

  @tracked isAscendingForModifiedTime = true;

  @tracked isAscendingForName = false;

  @action
  sortByName() {
    sortByNameUtil(this.args.table, this.isAscendingForName);
    this.isAscendingForName = !this.isAscendingForName;
    this.args.updateModel();
  }

  @action
  sortByCreatedTime() {
    sortByCreatedTimeUtil(this.args.table, this.isAscendingForCreatedTime);
    this.isAscendingForCreatedTime = !this.isAscendingForCreatedTime;
    this.args.updateModel();
  }

  @action
  sortByModifiedTime() {
    sortByModifiedTimeUtil(this.args.table, this.isAscendingForModifiedTime);
    this.isAscendingForModifiedTime = !this.isAscendingForModifiedTime;
    this.args.updateModel();
  }
}
