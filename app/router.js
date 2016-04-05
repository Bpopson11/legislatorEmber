import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:state'});
  this.route('outputs', {path: '/ouputs/:state'});
});

export default Router;
