import '../../polymer/polymer.js';
import { NeonAnimationBehavior } from '../../neon-animation/neon-animation-behavior.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  is: 'expand-animation',

  behaviors: [
    NeonAnimationBehavior
  ],

  configure: function(config) {
    var node = config.node;

    var height = node.getBoundingClientRect().height;

    this._effect = new KeyframeEffect(node, [{
      height: (height / 2) + 'px'
    }, {
      height: height + 'px'
    }], this.timingFromConfig(config));

    return this._effect;
  }
});
