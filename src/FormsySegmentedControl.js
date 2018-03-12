import React, { Component } from 'react'
import createReactClass from 'create-react-class'
import { withFormsy } from 'formsy-react'

import SegmentedControl from './SegmentedControl'

class FormsySegmentedControl extends Component {
  render() {
    return (
      <SegmentedControl
        {...this.props}
        setValue={(val) => {
          this.props.setValue && this.props.setValue(val)
          return this.props.setValue(val) // Formsy's setValue
        }}
      />
    )
  }
}

export default withFormsy(FormsySegmentedControl)
