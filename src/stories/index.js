import React from 'react'
import Formsy from 'formsy-react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SegmentedControl from '../SegmentedControl'
import SegmentedControlWithoutStyles from '../SegmentedControlWithoutStyles'
import FormsySegmentedControl from '../FormsySegmentedControl'

storiesOf('SegmentedControl', module)
  .addDecorator(centered)
  .add('Two options', () => (
    <SegmentedControl
      className="custom-class"
      name="twoOptions"
      options={[
        { label: 'One', value: 'one', default: true },
        { label: 'Two', value: 'two' }
      ]}
      style={{ width: 300, color: '#42a5f5' }} // blue400
      setValue={action('setValue')}
    />
  ))
  .add('Three options', () => (
    <SegmentedControl
      name="threeOptions"
      options={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two', default: true },
        { label: 'Three', value: 'three' }
      ]}
      style={{ width: 303, color: '#ef5350' }} // red400
      setValue={action('setValue')}
    />
  ))
  .add('One disabled', () => (
    <SegmentedControl
      name="oneDisabled"
      options={[
        { label: 'One', value: 'one', disabled: true },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three', default: true },
        { label: 'Four', value: 'four' }
      ]}
      style={{ width: 400, color: '#ab47bc' }} // purple400
      setValue={action('setValue')}
    />
  ))
  .add('Ten options', () => (
    <SegmentedControl
      name="tenOptions"
      options={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
        { label: 'Four', value: 'four' },
        { label: 'Five', value: 'five' },
        { label: 'Six', value: 'six' },
        { label: 'Seven', value: 'seven' },
        { label: 'Eight', value: 'eight', default: true },
        { label: 'Nine', value: 'nine' },
        { label: 'Ten', value: 'ten' }
      ]}
      style={{ width: 1000, color: '#ef5350' }} // red400
      setValue={action('setValue')}
    />
  ))

storiesOf('FormsySegmentedControl', module)
  .addDecorator(centered)
  .add('Three options', () => (
    <MuiThemeProvider>
      <Formsy onValidSubmit={action('onFormsySubmit')}>
        <FormsySegmentedControl
          name="threeOptions"
          options={[
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two', default: true },
            { label: 'Three', value: 'three' }
          ]}
          style={{ width: 300, color: 'rgb(0, 188, 212)' }} // match default material-ui primary teal
          setValue={action('setValue')}
        />
        <RaisedButton
          type="submit"
          label="submit formsy form"
          style={{
            display: 'block',
            width: 200,
            margin: '20px auto'
          }}
          primary
        />
      </Formsy>
    </MuiThemeProvider>
  ))

storiesOf('SegmentedControlWithoutStyles', module)
  .addDecorator(centered)
  .add('Two options without styles', () => (
    <SegmentedControlWithoutStyles
      className="custom-class"
      name="twoOptions"
      options={[
        { label: 'One', value: 'one', default: true },
        { label: 'Two', value: 'two' }
      ]}
      setValue={action('setValue')}
    />
  ))
