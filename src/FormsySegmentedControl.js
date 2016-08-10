import React from 'react'
import Formsy from 'formsy-react'

import SegmentedControl from './SegmentedControl'

const FormsySegmentedControl = React.createClass({
  mixins: [Formsy.Mixin],

  render() {
    return (
      <SegmentedControl
        {...this.props}
        setValue={(val) => {
          this.props.setValue && this.props.setValue(val)
          return this.setValue(val) // Formsy's setValue
        }}
        />
    )
  }
})

export default FormsySegmentedControl
