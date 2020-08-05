import { FETCH_GAME_REQUEST,FETCH_GAME_SUCCESS,FETCH_GAME_FAILURE,FETCH_SIGN_ID,FETCH_SELECTED_ITEM, FETCH_LOG_ID, SAVE_USER_LOCAL } from './gameTypes'
// import axios from 'axios'
// import { saveGameData } from '../../api/users'
import { saveToStore } from '../../api/users' 
import GameModel from '../../model/GameModel'
// import store from '../store'

export const fetchGameRequest = () =>{
  return{
    type:FETCH_GAME_REQUEST,
  }
}

export const fetchGameSuccess = (gameList) => {
  return{
    type:FETCH_GAME_SUCCESS,
    payload:gameList
    }
}

export const fetchGameFailure = (error) => {
  return{
    type:FETCH_GAME_FAILURE,
    payload:error,
  }
}

export const fetchSignId = (id) => {
  return{
    type:FETCH_SIGN_ID,
    payload:id
  }
}

export const fetchLogId = (id) =>{
  return{
    type:FETCH_LOG_ID,
    payload:id
  }
}

export const filterItem = (item) => {
  return{
    type:FETCH_SELECTED_ITEM,
    payload:item
  }
}

export const saveToLocal = (item) =>{
  return{
    type:SAVE_USER_LOCAL,
    payload:item  
  }
}

export const fetchGameData = () => {
  return async function(dispatch){
    dispatch(fetchGameRequest())
    let data = await saveToStore()
    let gameArr = []
    for(let key in data){
      let tempObj = new GameModel(key,data[key].name,data[key].rating,data[key].image,data[key].genre,data[key].platform,data[key].r_date)
      gameArr.push(tempObj)
    }
    // console.log(getState().id)
    dispatch(fetchGameSuccess(gameArr))
  }
}

// not able to use this thunk with only getState, working after using dispatch 
// not albe to hold id after rerendering of page. having to sign in all over again
export const addMoreDetails = () => {
  return function(dispatch,getState){
    // dispatch(fetchGameRequest())
    let result = getState().id
    console.log(result)
  }
}



// fetch data from TPapi and save it to global store
// export const fetchGameData = () => {
//   return async function(dispatch){
//     dispatch(fetchGameRequest())
  
//   axios.get("https://rawg-video-games-database.p.rapidapi.com/games", {
// 	  "headers": {
//       "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//       "x-rapidapi-key": "49591c6640msh45759e746819ed7p1e5c85jsncf3ce3ce969f"
// 	},
// })
//   .then(response => {
//     let result = response.data.results
//     dispatch(fetchGameSuccess(result))
//     saveGameData(result)
//   })
//   .catch(err => {
//     dispatch(fetchGameFailure(err))
//   });
// }
// //not able to fetch data using fetch
// // =================================================================================
//   //  fetch("https://google-books.p.rapidapi.com/volumes", {
//   //   "method": "GET",
//   //   "headers": {
//   //     "x-rapidapi-host": "google-books.p.rapidapi.com",
//   //     "x-rapidapi-key": "49591c6640msh45759e746819ed7p1e5c85jsncf3ce3ce969f"
//   //   }
//   // })
//   // .then(response => {
//   //   console.log(response.json());
//   // })  
//   // .catch(err => {
//   //   console.log(err);
//   // });
// }

