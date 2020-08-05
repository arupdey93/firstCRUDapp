import React from 'react'
import styles from './signup.module.css'
import { FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import firebase from 'firebase/app'
import { saveUserData } from "../../api/users";
import { connect } from 'react-redux'
import { fetchSignId, saveToLocal } from '../../redux/gameData/gameActions'


class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        userName:'',
        userEmail:'',
        userPassword:'',
        errorMessage:'',
      }
  }
  // made two changes in the signup and login component - component did mount//if user is signed in/even if its routed to signup and login component, it will get redirected to home component 
  componentDidMount(){
    firebase
    .auth()
    .onAuthStateChanged((user)=>{
      if(user){
        this.props.history.push('/home')
        console.log('User Redirected')
      }
    })
  }

  handleChange = (e) =>{
    this.setState(
      {
      [e.target.name]:e.target.value,
    })
  }

  saveUserAuthData = (e) =>{
    e.preventDefault()
    if(this.state.userName !== '' || this.state.userEmail !=='' || this.state.userPassword !==''){
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.userEmail,this.state.userPassword)
      .then(async (reponse)=>{
        this.props.history.push('/home')
        // console.log(reponse)
        let id = await saveUserData(this.state.userName,this.state.userEmail,this.state.userPassword)
        this.props.saveSignId(id)
        let object_data = {
          userName:this.state.userName,
          userEmail:this.state.userEmail,
          userPassword:this.state.userPassword,
        }
        this.props.saveDataToLocal(object_data)
        // console.log(object_data);
      })
      .catch(error=>{
        console.log(error.message)
        this.setState({ 
          errorMessage:error.message
        })
      })
    }else{
        this.setState({
          errorMessage:'Please fill up'
        })
      }
    }
    
  

  render() {
    return (
      <div className={styles.sign_container}>
        <div className={styles.title}>
          <h2>Steam Lite</h2>
        </div>
        <div className={styles.sign_content}>
            <form className={styles.form_content} onSubmit={this.saveUserAuthData}>
              <div className={styles.form_input}>
                <div className={styles.input1}>
                  <label> Name:</label>
                  <label>Email:</label>
                  <label>Password:</label>
                </div>
                <div className={styles.input2}>
                  <input 
                    type="text" 
                    name="userName" 
                    value={this.state.userName} 
                    onChange={this.handleChange}>
                  </input>
                  <input 
                    type="email" 
                    name="userEmail" 
                    value={this.state.userEmail} 
                    onChange={this.handleChange}>
                  </input>
                  <input 
                    type="password" 
                    name="userPassword"
                    value={this.state.userPassword} 
                    onChange={this.handleChange}>
                  </input>
                </div>
              </div>
              <div className={styles.form_btn}>
                <button>Sign Up <FaUserPlus /></button>
              </div>
              <div className={styles.to_login}>
                <p>Already registered? Click Here 
                  <Link className={styles.linker} to="/login"> <FaArrowRight style={{color:'#7D1128'}}/></Link>    
                </p>
              </div>
              <div className={styles.error_container}>
                <p>{this.state.errorMessage}</p>
              </div>
            </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    saveSignId: (id) => {
      dispatch(fetchSignId(id))
    },
    saveDataToLocal: (data) => {
      dispatch(saveToLocal(data))
    }
  }
}

export default connect(null,mapDispatchToProps)(SignUp)
