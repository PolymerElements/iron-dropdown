[![Build status](https://travis-ci.org/PolymerElements/iron-dropdown.svg?branch=master)](https://travis-ci.org/PolymerElements/iron-dropdown)

_[Demo and API docs](https://elements.polymer-project.org/elements/iron-dropdown)_


## &lt;iron-dropdown&gt;

`<iron-dropdown>` is a generalized element that is useful when you have
hidden content (`dropdown-content`) that is revealed due to some change in
state that should cause it to do so.

Note that this is a low-level element intended to be used as part of other
composite elements that cause dropdowns to be revealed.

Examples of elements that might be implemented using an `iron-dropdown`
include comboboxes, menubuttons, selects. The list goes on.

The `<iron-dropdown>` element exposes attributes that allow the position
of the `dropdown-content` relative to the `dropdown-trigger` to be
configured.

```html
<iron-dropdown horizontal-align="right" vertical-align="top">
  <div slot="dropdown-content">Hello!</div>
</iron-dropdown>
```

In the above example, the `<div>` assigned to the `dropdown-content` slot will be
hidden until the dropdown element has `opened` set to true, or when the `open`
method is called on the element.

### Changes in 2.0
- Removed the private property `_focusTarget` which was deprecated.
- Distribution moved from the `class="dropdown-content"` to `slot="dropdown-content"`.
- `<iron-dropdown>` animations are not based on the deprecated `neon-animation` component, and use CSS keyframe animations.

### Animations

Set the `entry-animation` and/or `exit-animation` attributes to add an animation when the dialog
is opened or closed. Included in the component are:
- fade-in-animation
- fade-out-animation
- scale-up-animation
- scale-down-animation

These animations are not based on the deprecated `neon-animation` component, and use CSS keyframe animations.
This change reduces code size, and uses the platform. You can implement custom entry/exit animations using
CSS keyframe animations; define the animation keyframes, a CSS class for the animation, and assign the class to the `entry/exit-animation`, e.g.

    <style>
      @keyframes expand-animation {
        from {
          max-height: 10px;
          opacity: 0;
        }
        to {
          max-height: 100px;
        }
      }

      .expand-animation {
        animation-name: expand-animation;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-delay: 150ms;
        animation-duration: 200ms;
      }
    </style>

    <iron-dropdown entry-animation="expand-animation"
                   exit-animation="fade-out-animation">
      <div slot="dropdown-content">Hello!</div>
    </iron-dropdown>
