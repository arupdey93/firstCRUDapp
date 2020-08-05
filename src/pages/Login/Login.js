import React from 'react'
import styles from './login.module.css'
import { Link } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import firebase from 'firebase/app'
import { saveUserData,fetchUsersInfo } from '../../api/users'
import { connect } from 'react-redux'
import { fetchLogId } from '../../redux/gameData/gameActions'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userEmail:'',
      userPassword:'',
      userNumber:'',
      errorMessage:'',
      status:false,
    }
    this.loginRef = React.createRef()
  }

  componentDidMount(){
    firebase
    .auth()
    .onAuthStateChanged(async (user)=>{
      if(user){
        this.props.history.push('/home')
        // let id = await saveUserData()
        // console.log(id);
        // console.log('User Redirected')
        let id = await fetchUsersInfo()
        console.log(id)
        let key = Object.keys(id)[0]
        let data = Object.values(id)[0]
        console.log(key)
        console.log(data);
        this.props.saveLogId(key)
      }
    })
    this.loginRef.current.focus()    
  }

  handleChange = (e) =>{
    this.setState(
      {
      [e.target.name]:e.target.value
    })
   
  }
    
    
  logWithUserAuth = (e) => {
    e.preventDefault()
    firebase
    .auth()
    .signInWithEmailAndPassword(this.state.userEmail,this.state.userPassword)
    .then(response=>{
      this.props.history.push('/home')
      // console.log(response)
    })
    .catch(error=>{
      console.log(error.message)
      this.setState({
        errorMessage:error.message
      })
    })
  }
  

  handleClick = (e) =>{
    e.preventDefault()
   this.setState({
     status:true
   },()=>{
    console.log(this.state.status)
   }
     
   )
  }


  render() {
    return (
      <div className={styles.log_container}>
        <div className={styles.title}>
          <h2>Steam Lite</h2>
        </div>
        <div className={styles.log_content}>
            <form className={styles.form_content_top} onSubmit={this.logWithUserAuth}>
              <div className={styles.form_input}>
                <div className={styles.input1}> 
                  <label>Email:</label>
                  <label>Password:</label>
                </div>
                <div className={styles.input2}>
                  <input 
                    type="email"
                    name="userEmail"
                    value={this.state.userEmail}
                    onChange={this.handleChange}
                    ref={this.loginRef}
                  >
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
                <button>Login <FaSignInAlt /></button>
                <Link className={styles.linker} to="/">
                  <button>Back</button>
                </Link>
              </div>                                
            </form>

            <form className={styles.form_content_bottom}>
            {(this.state.status) ? <div>
                  <form>
                    <label>Phone Number: </label>
                    <input type="text"></input>
                  </form>  
                </div> : <div className={styles.form_btn}>                
                  <button onClick={this.handleClick}>Sign in with Phone Number</button>                
              </div>}
            </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    saveLogId: (id) =>{
      dispatch(fetchLogId(id))
    }
  }
}

export default connect(null,mapDispatchToProps)(Login)
