import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ModifyStatsController extends Controller {
    @tracked barGraphData = [];
}
