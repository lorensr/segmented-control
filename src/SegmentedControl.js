import React, { Component } from 'react'
import PropTypes from 'prop-types'
import find from 'lodash/find'
import extend from 'lodash/extend'

import './SegmentedControl.css'

class SegmentedControl extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    style: PropTypes.object,
    setValue: PropTypes.func
  }

  componentWillMount() {
    const defaultOption = find(this.props.options, { default: true })
    this.setValue(defaultOption.value)
  }

  setValue(val) {
    this.props.setValue && this.props.setValue(val)
  }

  render() {
    const getId = option => this.props.name + option.value

    const defaultStyle = {
      width: '100%'
    }

    const style = extend(defaultStyle, this.props.style)

    let containerClassName = 'segmented-control'
    
    if (typeof this.props.className !== 'undefined') {
      containerClassName = `${containerClassName} ${this.props.className}`
    }

    return (
      <div className={containerClassName} style={style}>
        {this.props.options.map(option => (
          <input
            key={option.value}
            type="radio"
            name={this.props.name}
            id={getId(option)}
            defaultChecked={option.default}
            disabled={option.disabled}
          />
        ))}
        {this.props.options.map(option => (
          <label
            key={option.value}
            onClick={() => this.setValue(option.value)}
            htmlFor={getId(option)}
            data-value={option.label}
          >
            {option.label}
          </label>
        ))}
      </div>
    )
  }
}

export default SegmentedControl
