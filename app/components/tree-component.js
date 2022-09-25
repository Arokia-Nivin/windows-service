import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TreeComponentComponent extends Component {
  @action
  expandCollapse(name) {
    this.args.tree.forEach((parent) => {
      if (parent.name === name) {
        parent.childrenHidden = !parent.childrenHidden;
        parent.children.forEach((child) => {
          child.isExpanded = !child.isExpanded;
        });
        return;
      }
    });
    this.args.updateModel();
  }
}
