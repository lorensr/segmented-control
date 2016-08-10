`<SegmentedControl>` – a good-lookin' segmented control React component

`<FormsySegmentedControl>` – a version for [Formsy](https://github.com/christianalfoni/formsy-react)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [UX background](#ux-background)
- [Component](#component)
- [Usage](#usage)
  - [Plain](#plain)
  - [Formsy](#formsy)
- [Credits](#credits)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## UX background

In iOS, a segmented control is usually used to [display different views](https://developer.apple.com/ios/human-interface-guidelines/ui-controls/segmented-controls/) (the equivalent of [tabs](https://material.google.com/components/tabs.html) in material design). However, segmented controls are increasingly being used in lieu of [plain radio buttons](https://material.google.com/components/selection-controls.html#selection-controls-radio-button) or select inputs (dropdowns, or material [menus](https://material.google.com/components/menus.html)). See for instance the designer [lukew](http://www.twitter.com/lukew)'s recommendations:

- [Dropdowns should be the UI of Last Resort](http://www.lukew.com/ff/entry.asp?1950)
- [Obvious Always Wins](http://www.lukew.com/ff/entry.asp?1945)
- [Video: Using Radio Groups for Input](http://www.lukew.com/ff/entry.asp?1890)

Other good choices are radio groups, like [this Ionic component](http://ionicframework.com/docs/v2/components/#radio), or a button list, as used in the Yo or Thumbtack apps, that looks the same, except on click, instead of seeing a checkmark, you're taken to the next screen.

A similar component in material design is the [toggle button](https://material.google.com/components/buttons.html#buttons-toggle-buttons).

## Component

**Demo:** [lorensr.me/segmented-control](http://lorensr.me/segmented-control/)

[![two](https://photos-6.dropbox.com/t/2/AADtLpwaECC3TfnTnsskTQdEgR0TYJCsIa2CXYbny_FS5w/12/27134267/png/32x32/3/1470816000/0/2/Screenshot%202016-08-09%2023.38.02.png/EP6MtxQY8Z2XASACKAI/85cbLlaOvhMAJu4e0J3Ag1gGF_1J9vlMMvqGyzlSOGc?size_mode=3&size=2048x1536&dl=0)](http://lorensr.me/segmented-control/?selectedKind=SegmentedControl&selectedStory=Two%20options&full=0&down=1&left=1&panelRight=0)
[![three](https://photos-2.dropbox.com/t/2/AACatyX4K9bbuKlPAdQrXoIaGimcVz2ZXcaN8BisYbMsPQ/12/27134267/png/32x32/3/1470816000/0/2/Screenshot%202016-08-09%2023.38.32.png/EP6MtxQY8Z2XASACKAI/MK1uFT0YxErZDu3crjs4omGWbZpxILzn0RSe0AYj1FA?size_mode=3&size=2048x1536&dl=0)](http://lorensr.me/segmented-control/?selectedKind=SegmentedControl&selectedStory=Three%20options&full=0&down=1&left=1&panelRight=0)
[![disabled](https://photos-6.dropbox.com/t/2/AABxaalb9FVuQdyfg_Lg6dHWrNjmfdx6KGdQJkh7Ot5fjg/12/27134267/png/32x32/3/1470816000/0/2/Screenshot%202016-08-09%2023.38.39.png/EP6MtxQY8Z2XASACKAI/MjZXWa75gw7hpp0jgAMJ3S4pth9_mtJhvZmGYD2Kf2g?size_mode=3&size=2048x1536&dl=0)](http://lorensr.me/segmented-control/?selectedKind=SegmentedControl&selectedStory=One%20disabled&full=0&down=1&left=1&panelRight=0)
[![formsy](https://photos-1.dropbox.com/t/2/AABqhrjYbcuzVI0dG9o1FOSDrRs4Cji3g-xMW4bZ6Ae8jQ/12/27134267/png/32x32/3/1470816000/0/2/Screenshot%202016-08-09%2023.38.46.png/EP6MtxQY8Z2XASACKAI/s-sxDo0yRf8sYXTdzwv9dT0Y2oqh4Dh2LsRKZnyqOIs?size_mode=3&size=2048x1536&dl=0)](http://lorensr.me/segmented-control/?selectedKind=FormsySegmentedControl&selectedStory=Three%20options&full=0&down=1&left=1&panelRight=0)

## Usage

```sh
npm install --save segmented-control
```

### Plain

`<SegmentedControl>` props:

- `name: PropTypes.string.isRequired`: name of the radio `<input>`s. Also the attribute included in the first argument of Formsy's `onSubmit`.
- `options: PropTypes.array.isRequired`: each an object with:
  - `label`: display text
  - `value`: value passed to `setValue` and Formsy's `onSubmit`
  - `default: true`: one object must have this
  - `disabled: true`: optional
- `style: PropTypes.object`: common styles are width and color
- `setValue: PropTypes.func`: callback on input change, passed the value string. Called once initially with the default value on mount.

```jsx
import { SegmentedControl } from 'segmented-control'

...

<SegmentedControl
  name="oneDisabled"
  options={[
    { label: "One", value: "one", disabled: true },
    { label: "Two", value: "two" },
    { label: "Three", value: "three", default: true },
    { label: "Four", value: "four" }
  ]}
  setValue={newValue => this.doSomething(newValue)}
  style={{ width: 400, color: '#ab47bc' }} // purple400
  />
```

### Formsy

`<FormsySegmentedControl>` has the same props, but includes `Formsy.Mixin` and calls Formsy's `setValue`, so that the value is included in `onSubmit` (see the event triggered by submitting the [demo form](http://lorensr.me/segmented-control/?selectedKind=FormsySegmentedControl&selectedStory=Three%20options&full=0&down=1&left=1&panelRight=0)). In the example below, the first arg of `onSubmit` would be `{exampleInput: 'two'}`:

```jsx
import Formsy from 'formsy-react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { FormsySegmentedControl } from 'segmented-control'

...

<MuiThemeProvider>
  <Formsy.Form
    onValidSubmit={this.onSubmit}
    >
    <FormsySegmentedControl
      name="exampleInput"
      options={[
        { label: "One", value: "one" },
        { label: "Two", value: "two", default: true },
        { label: "Three", value: "three" }
      ]}
      style={{ width: 300, color: 'rgb(0, 188, 212)' }} // match default material-ui primary teal
      />
    <RaisedButton
      type="submit"
      label="submit formsy form"
      style={{
        display: 'block',
        width: 200,
        margin: "20px auto"
      }}
      primary
      />
  </Formsy.Form>
</MuiThemeProvider>
```  

## Credits

- CSS from [@fstgerm](https://github.com/fstgerm): http://code.fstgerm.com/pure-css-segmented-controls/
- Contributions by [these fine folks](https://github.com/lorensr/segmented-control/graphs/contributors)
