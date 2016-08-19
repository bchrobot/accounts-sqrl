import './sqrl_ui.html';
import './sqrl_ui.less';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';

Template.sqrlButtons.onCreated(function sqrlButtonsOnCreated() {
  this.sqrlNonce = Random.secret();
});

Template.sqrlButtons.helpers({
  sqrlUri() {
    const sqrlNonce = Template.instance().sqrlNonce;
    const uri = Meteor.absoluteUrl(`sqrl?${sqrlNonce}`).replace(/.*?:\/\//g, '');
    return `sqrl://${uri}`;
  },
  
  sqrlQrOptions() {
    const sqrlNonce = Template.instance().sqrlNonce;
    return {
      text: Meteor.absoluteUrl(`sqrl?${sqrlNonce}`),
      size: 100,
    };
  },
});
