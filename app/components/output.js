import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OutputComponent extends Component {
  @tracked showTree = true;

  @action
  toggleShowTree() {
    this.showTree = !this.showTree;
  }
}
