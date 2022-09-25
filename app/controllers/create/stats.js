import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class CreateStatsController extends Controller {
  @tracked barGraphData = [];
}
