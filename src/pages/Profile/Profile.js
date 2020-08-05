import React, { Component } from 'react'
import styles from './profile.module.css'
// import { FaArrowCircleLeft } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { saveExtraData } from '../../api/users'
import { connect } from "react-redux"
import { addMoreDetails, saveToLocal } from '../../redux/gameData/gameActions'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewStatus:false,
      editStatus:false,
      addStatus:false,
      phone:'',
      address:'',
    }
  }

  showProfile = () => {
    this.setState({
      viewStatus:!this.state.viewStatus,
      editStatus:false,
      addStatus:false,
    })
  }

  showForm = () => {
    this.setState({
      editStatus:!this.state.editStatus,
      addStatus:false,
      viewStatus:false,
    })
  }

  showMoreInfo = () => {
    this.setState({
      addStatus:!this.state.addStatus,
      editStatus:false,
      viewStatus:false,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  
  saveUserExtraData = async (e) => {
    e.preventDefault()
    let result = await saveExtraData(this.state.phone,this.state.address,this.props.userId)
    console.log(result)
    let object_data = {
      userPhone:this.state.phone,
      userAddress:this.state.address,
    }
    this.props.appendMoreData(object_data)
  }

  // viewMyData = () =>{
  //   console.log(this.props.saveLogId)
  //   console.log('hello');
  // }

  render() {
    return (
      <div className={styles.prof_container}>
        <Header title="Profile"/>
        <div className={styles.prof_content}>
          <div className={styles.profile_box}>
            <li onClick={this.showProfile}>View Profile</li>
            <li onClick={this.showForm}>Edit Profile</li>
            <li onClick={this.showMoreInfo}>Add More Information</li>
          </div>
          <div className={styles.whole_box}> {/**contains view edit extra box */}
            {(this.state.viewStatus) ? <div className={styles.view_box}>
              <div className={styles.details}>
                <div className={styles.title_box}>
                  <h3>My Account Details</h3>
                </div>
                <div className={styles.info_box}>
                  <p>{this.props.showData.newUserName}</p>
                  <p>Email: arup@gmail.com</p>
                  <p>Password: 123456</p>
                  <p>Address: Kolkata, India</p>
                  <p>Phone No: 9999999999</p>
                </div>
              </div>
            </div> : (this.state.editStatus) ? <div className={styles.edit_box}>
              <form className={styles.edit_form}>
                <div className={styles.edit_sub_form}>
                  <div className={styles.label_section}>
                    <label>Name:</label>
                    <label>Password:</label>
                    <label>Email:</label>
                  </div>
                  <div className={styles.input_section}>
                  <input 
                      type="text">                
                    </input>
                    <input 
                      type="email">                  
                    </input>
                    <input 
                      type="password">                  
                    </input>
                  </div>
                </div>
                <div className={styles.btn_box}> 
                    <button type="button">Edit</button>
                    <button type="button">Save</button>
                  </div>
              </form>
            </div> : (this.state.addStatus) ? <div className={styles.extra_box}>
              <form className={styles.extra_form} onSubmit={this.saveUserExtraData}>
                <div className={styles.extra_sub_form}>
                  <div className={styles.label_section}>
                    <label>Phone Number:</label>
                    <label>Address:</label>
                  </div>
                  <div className={styles.input_section}>
                    <input 
                      type="tel"
                      name="phone"
                      defaultValue={this.state.phone}
                      onChange={this.handleChange}>                  
                    </input>                  
                    <textarea 
                      type="textarea"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}>                  
                    </textarea>
                  </div>
                </div>
                <div className={styles.btn_box}>
                  <button type="submit">Save</button>
                </div>                
              </form>
            </div> : <div className={styles.transparent_box}></div>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  console.log(state.userId)
  return{
    userId: state.userId
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    appendMoreData: (data) =>{
      dispatch(saveToLocal(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)

















