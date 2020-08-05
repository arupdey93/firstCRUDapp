// import axios from 'axios'
import store from '../redux/store'

// save user name email pass from sign up component
export const saveUserData = async (name,email,password) =>{
  let response = await fetch('https://fir-proj-1-f9dfd.firebaseio.com/users.json',{
    method:'POST',
    header:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      newUserName:name,
      newUserEmail:email,
      newPassword:password,
    })
  })
  let result = await response.json()
  return result
}

// save phone address to firebase from Profile component
export const saveExtraData = async (phone,address,id) =>{
  console.log(id)
  let response = await fetch(`https://fir-proj-1-f9dfd.firebaseio.com/users/${id}.json`,{
    method:'PATCH',
    header:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      newUserPhone:phone,
      newUserAddress:address,
    })
  })
  let result = await response.json()
  return result
}

// fetch name,email,pass from firebase
export const fetchUsersInfo = async () =>{
  let response = await fetch(`https://fir-proj-1-f9dfd.firebaseio.com/users.json`,{
    method:'GET',
  })
  let result = await response.json()
  // let key = Object.keys(result)
  // console.log(key)
  return result
}

store.subscribe(()=>{
  console.log(store.getState().gameDataBase)
})



// saving game data to firebase after fetching data from api and storing it to G-store in gameAction.js
// with the help of fetchGameData
// export const saveGameData = (data) => {
//   // const obj_content = Object.assign({},data)
//   // console.log(obj_content);
//   let counter = data.length
//   // const { 0 : { genres : [ item1 ] : { name } } } = data
//   // console.log(item1)
//   for(let i=0;i<counter;i++){
//     let game_data = {
//       name:data[i].name,
//       rating:data[i].rating,
//       image:data[i].background_image,
//       genre:data[i].genres[0].name,
//       platform:data[i].platforms[0].platform.name,
//       r_date:data[i].released
//     }
//     fetch('https://fir-proj-1-f9dfd.firebaseio.com/game_repository.json',{
//       method:'POST',
//       header:{
//         "Content-type":"application/json"
//       },
//       body:JSON.stringify(game_data)
//     })
//   }
// }

// unable to fetch data using fetch 
export const saveToStore = async () => {
  let response = await fetch('https://fir-proj-1-f9dfd.firebaseio.com/game_repository.json')
  let data = await response.json()
  // console.log(data)
  return data
}
