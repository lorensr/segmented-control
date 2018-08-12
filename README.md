<!-- this period prevents npm from cutting off the first line of text -->
.
<!-- end period -->
[![npm version](https://badge.fury.io/js/segmented-control.svg)](https://badge.fury.io/js/segmented-control)

`<SegmentedControl>` – a good-lookin' segmented control React component

`<FormsySegmentedControl>` – a version for [Formsy](https://github.com/christianalfoni/formsy-react)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [UX background](#ux-background)
- [Component](#component)
- [Usage](#usage)
  - [Plain](#plain)
  - [Formsy](#formsy)
- [Development](#development)
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

[![two](https://www.dropbox.com/s/ryzcbps1vuo04ad/Screenshot%202016-08-09%2023.38.02.png?raw=1)](http://lorensr.me/segmented-control/?selectedKind=SegmentedControl&selectedStory=Two%20options&full=0&down=1&left=1&panelRight=0)
[![three](https://www.dropbox.com/s/z2j729rl7ul8bma/Screenshot%202016-08-09%2023.38.32.png?raw=1)](http://lorensr.me/segmented-control/?selectedKind=SegmentedControl&selectedStory=Three%20options&full=0&down=1&left=1&panelRight=0)
[![disabled](https://www.dropbox.com/s/n0qn7vysoo6b98g/Screenshot%202016-08-09%2023.38.39.png?raw=1)](http://lorensr.me/segmented-control/?selectedKind=SegmentedControl&selectedStory=One%20disabled&full=0&down=1&left=1&panelRight=0)
[![formsy](https://www.dropbox.com/s/yh5nksg7ndu3nio/Screenshot%202016-08-09%2023.38.46.png?raw=1)](http://lorensr.me/segmented-control/?selectedKind=FormsySegmentedControl&selectedStory=Three%20options&full=0&down=1&left=1&panelRight=0)

## Usage

```sh
npm install --save segmented-control
```

### Plain

`<SegmentedControl>` props:

- `name: PropTypes.string.isRequired`: name of the radio `<input>`s. Also the attribute included in the first argument of Formsy's `onSubmit`.
- `options: PropTypes.array.isRequired`: Maximum length 10, each element an object of the form:
  - `label`: display text
  - `value`: value passed to `setValue` and Formsy's `onSubmit`
  - `default: true`: one object must have this
  - `disabled: true`: optional
- `style: PropTypes.object`: common styles are width and color
- `setValue: PropTypes.func`: callback on input change, passed the value string. Called once initially with the default value on mount.

```jsx
import { SegmentedControl } from 'segmented-control'

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

## Development

```sh
git clone git@github.com:lorensr/segmented-control.git
npm install
npm start
```

[http://localhost:9009](http://localhost:9009)


### Credits

- Contributions by [these fine folks](https://github.com/lorensr/segmented-control/graphs/contributors)
- CSS from [@fstgerm](https://github.com/fstgerm): http://code.fstgerm.com/pure-css-segmented-controls/
