A good-lookin' segmented control React component: `<SegmentedControl>`. Includes a version for [Formsy](https://github.com/christianalfoni/formsy-react): `<FormsySegmentedControl>`.

## Component background

In iOS, a segmented control is usually used to [display different views](https://developer.apple.com/ios/human-interface-guidelines/ui-controls/segmented-controls/) (the equivalent of [tabs](https://material.google.com/components/tabs.html) in material design). However, segmented controls are increasingly being used in lieu of [plain radio buttons](https://material.google.com/components/selection-controls.html#selection-controls-radio-button) or select inputs (dropdowns, or material [menus](https://material.google.com/components/menus.html)). See for instance the designer [lukew](http://www.twitter.com/lukew)'s recommendations:

- [Dropdowns should be the UI of Last Resort](http://www.lukew.com/ff/entry.asp?1950)
- [Obvious Always Wins](http://www.lukew.com/ff/entry.asp?1945)
- [Video: Using Radio Groups for Input](http://www.lukew.com/ff/entry.asp?1890)

Other good choices are radio groups, like [this Ionic component](http://ionicframework.com/docs/v2/components/#radio), or a button list, as used in the Yo or Thumbtack apps, that looks the same, except on click, instead of seeing a checkmark, you're taken to the next screen.

A similar component in material design is the [toggle button](https://material.google.com/components/buttons.html#buttons-toggle-buttons).

## Component

*[Component demo]*

pics

## Usage

```sh
npm install --save segmented-control
```

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

`<FormsySegmentedControl>` has the same props, but includes `Formsy.Mixin` and calls Formsy's `setValue`, so that the value is contained in `onSubmit` (see the event triggered by submitting the [demo form]()). In the example below, the first arg of `onSubmit` would be `{exampleInput: 'two'}`:

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

- CSS from @fstgerm: http://code.fstgerm.com/pure-css-segmented-controls/
- Contributions by [these fine folks]
