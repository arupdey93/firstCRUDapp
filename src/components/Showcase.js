import React from 'react'
import styles from './showcase.module.css'
import landingData from './Landing'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import Slide from './Slide'

class Showcase extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex:0,
      length:landingData.length,
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.goToNextSlide()
    }, 2000);
  }

  goToPrevSlide = () => {
    let index = this.state.activeIndex;
    let length = this.state.length;

    if(index < 1){
      index= length-1;
    }else{
      index--;
    }
    this.setState({
      activeIndex:index
    })
    // console.log(this.state.activeIndex);
  }

  goToNextSlide = () => {
    let index = this.state.activeIndex;
    let length = this.state.length;
    
    if(index === length - 1){
      index =  0
    }else{
      index++;
    }

    this.setState({
      activeIndex:index
    })
    // console.log(this.state.activeIndex);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.slider_box}>
          <div className={styles.title}>
            <h2>
              Welcome
            </h2>
          </div>
          <div className={styles.slider_items}>
            <LeftArrow  goToPrevSlide={this.goToPrevSlide}/>
            <div className={styles.slide_data}>
              
              <Slide data={landingData} activeIndex={this.state.activeIndex} />
            </div>
            <RightArrow  goToNextSlide={this.goToNextSlide}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Showcase
