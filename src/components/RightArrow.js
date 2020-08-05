import React, { Component } from 'react'
import { FaArrowRight } from 'react-icons/fa'

class RightArrow extends Component {
  render() {
    return (
      <div>
        <FaArrowRight onClick={this.props.goToNextSlide}/>
      </div>
    )
  }
}

export default RightArrow