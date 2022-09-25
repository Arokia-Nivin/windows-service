import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class DeleteStatsController extends Controller {
    @tracked barGraphData = [];
}
