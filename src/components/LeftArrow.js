import React, { Component } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

 class LeftArrow extends Component {
  render() {
    return (
      <div>
        <FaArrowLeft onClick={this.props.goToPrevSlide}/>
      </div>
    )
  }
}

export default LeftArrow