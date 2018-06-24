import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import ShortId from 'shortid';
import { Links } from './links';


Meteor.methods({
  'links.insert'(url) {
    if (!this.userId) {
      throw new Meteor.Error(401, 'Unauthorized');
    }

    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({url});

    Links.insert({
      _id: ShortId.generate(),
      url,
      userId: this.userId,
      createdAt: new Date()
    });
  }
});