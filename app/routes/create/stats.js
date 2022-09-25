import Route from '@ember/routing/route';
import { formBarGraphData} from '../../utils/modelutil';

export default class CreateStatsRoute extends Route {

  async model() {
    const res = await fetch('http://localhost:5000/createstats');
    let data = await res.json();
    return formBarGraphData(data); 
  }
}
