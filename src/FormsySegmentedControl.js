import React from 'react'
import Formsy from 'formsy-react'

import SegmentedControl from './SegmentedControl'

const FormsySegmentedControl = React.createClass({
  mixins: [Formsy.Mixin],

  render() {
    return (
      <SegmentedControl
        {...this.props}
        setValue={this.setValue}
        />
    )
  }
})

export default FormsySegmentedControl
