import Controller from '@ember/controller';
import { action } from '@ember/object';
import {
  recursivelyFormTreeStructure,
  formTableStructure,
} from '../../utils/modelutil';


export default class ModifyIndexController extends Controller {
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
    const res = await fetch('http://localhost:5000/refreshmodify');
    let data = await res.json();
    let table = [];
    let tree = [];
    formTableStructure(table, data);
    recursivelyFormTreeStructure(tree, data);
    let newModel={
      tree: tree,
      table: table,
    };

    this.set('model', newModel);

    console.log(newModel);
  }
}
