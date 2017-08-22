import '../../polymer/polymer.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: block;
        height: 100px;
        border: 1px solid red;
        overflow: auto;
      }
      #ChildOne, #ChildTwo {
        height: 200px;
        border: 1px solid blue;
        overflow: auto;
      }
      #GrandchildOne, #GrandchildTwo {
        height: 300px;
        border: 1px solid green;
        overflow: auto;
      }
      .scrollContent {
        height: 400px;
        background-color: yellow;
      }
    </style>
    <div id="ChildOne">
      <div id="GrandchildOne">
        <div class="scrollContent"></div>
      </div>
    </div>
    <div id="ChildTwo">
      <div id="GrandchildTwo">
        <div class="scrollContent"></div>
      </div>
    </div>
`,

  is: 'x-scrollable-element'
});
