import Route from '@ember/routing/route';
import fetch from 'fetch';
import {
  recursivelyFormTreeStructure,
  formTableStructure,
} from '../../utils/modelutil';

export default class CreateIndexRoute extends Route {
  async model() {
    const res = await fetch('http://localhost:5000/create');
    let data = await res.json();
    let table = [];
    let tree = [];
    formTableStructure(table, data);
    recursivelyFormTreeStructure(tree, data);
    return {
      tree: tree,
      table: table
    };
  }
}
