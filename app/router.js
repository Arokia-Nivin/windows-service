import EmberRouter from '@ember/routing/router';
import config from 'myemberapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('search', function () {
    this.route('stats');
  });
  this.route('create', function () {
    this.route('stats');
  });
  this.route('modify', function () {
    this.route('stats');
  });
  this.route('delete', function () {
    this.route('stats');
  });
});
