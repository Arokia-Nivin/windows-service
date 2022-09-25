import Route from '@ember/routing/route';
import fetch from 'fetch';
import {
  recursivelyFormTreeStructure,
  formDeleteTableStructure,
} from '../../utils/modelutil';

export default class DeleteIndexRoute extends Route {
  async model() {
    const res = await fetch('http://localhost:5000/delete');
    let data = await res.json();
    let table = [];
    let tree = [];
    formDeleteTableStructure(table, data);
    recursivelyFormTreeStructure(tree, data);
    return {
      tree: tree,
      table: table
    };
  }
}
