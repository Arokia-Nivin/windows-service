import Route from '@ember/routing/route';
import fetch from 'fetch';
import {
  recursivelyFormTreeStructure,
  formTableStructure,
} from '../../utils/modelutil';

export default class SearchIndexRoute extends Route {
  async model() {
    const res = await fetch('http://localhost:5000/search');
    let data = await res.json();
    let table = [];
    let tree = [];
    formTableStructure(table, data);
    recursivelyFormTreeStructure(tree, data);
    return {
      tree: tree,
      table: table,
    };
  }
}

// setupController(controller, model) {
  //   super.setupController(controller, model);

  //   let barGraphData = this.controllerFor('search/stats').get('barGraphData');

  //   barGraphData.push(model.barGraphData);
  //   if (barGraphData.length > 5) barGraphData.shift();

  //   this.controllerFor('search/stats').set('barGraphData', [...barGraphData]);
  // }
