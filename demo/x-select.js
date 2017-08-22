import '../iron-dropdown.js';
import '../../neon-animation/neon-animations.js';
import './grow-height-animation.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
        margin: 1em;
      }
    </style>
    <div on-tap="open">
      <slot name="dropdown-trigger"></slot>
    </div>
    <iron-dropdown id="dropdown" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" disabled="[[disabled]]" open-animation-config="[[openAnimationConfig]]" close-animation-config="[[closeAnimationConfig]]">
      <slot name="dropdown-content" slot="dropdown-content"></slot>
    </iron-dropdown>
`,

  is: 'x-select',

  properties: {
    verticalAlign: String,
    horizontalAlign: String,
    disabled: Boolean,
    openAnimationConfig: {
      type: Array,
      value: function() {
        return [{
          name: 'fade-in-animation',
          timing: {
            delay: 150,
            duration: 50
          }
        }, {
          name: 'expand-animation',
          timing: {
            delay: 150,
            duration: 200
          }
        }];
      }
    },

    closeAnimationConfig: {
      type: Array,
      value: function() {
        return [{
          name: 'fade-out-animation',
          timing: {
            duration: 200
          }
        }];
      }
    }
  },

  open: function() {
    this.$.dropdown.open();
  }
});
