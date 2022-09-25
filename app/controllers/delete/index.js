import Controller from '@ember/controller';
import { action } from '@ember/object';
import {
  recursivelyFormTreeStructure,
  formDeleteTableStructure,
} from '../../utils/modelutil';

export default class DeleteIndexController extends Controller {
  @action
  updateTreeInModel() {
    let newtree = JSON.parse(JSON.stringify(this.model.tree));
    this.set('model', { ...this.model, tree: newtree });
  }

  @action
  updateTableInModel() {
    this.set('model', { ...this.model });
  }

  @action 
  async refreshData() {
    const res = await fetch('http://localhost:5000/refreshdelete');
    let data = await res.json();
    let table = [];
    let tree = [];
    formDeleteTableStructure(table, data);
    recursivelyFormTreeStructure(tree, data);
    let newModel={
      tree: tree,
      table: table,
    };

    this.set('model', newModel);

    console.log(newModel);
  }

}
