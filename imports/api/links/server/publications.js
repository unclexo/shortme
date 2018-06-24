import { Meteor } from 'meteor/meteor';
import { Links } from '../links';

if (Meteor.isServer) {
  Meteor.publish('links', function() {
    return Links.find({ userId: this.userId });
  });
}