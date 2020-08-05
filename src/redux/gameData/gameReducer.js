import { FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE, FETCH_SIGN_ID,FETCH_LOG_ID, FETCH_SELECTED_ITEM, SAVE_USER_LOCAL} from "./gameTypes"
// import GameModel from '../../model/GameModel'

const initialState = {
  isLoading:false,
  gameDataBase:[],
  errorMessage:'',
  userId:'',
  filteredItem:[],
  userData:[],
}

export const gameReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_GAME_REQUEST:
      return{
        ...state,
        isLoading:true,
      } 
    case FETCH_GAME_SUCCESS:
      return{
        ...state,
        isLoading:false,
        gameDataBase:action.payload
      }
    case FETCH_GAME_FAILURE:
      return{
        ...state,
        errorMessage:action.payload
      }
    case FETCH_SIGN_ID:
      return{
        ...state,
        userId:action.payload,
        // logId:action.payload,
      }
    case FETCH_LOG_ID:
      return{
        ...state,
        userId:action.payload
      }
    case FETCH_SELECTED_ITEM:
      let newList = state.filteredItem
      newList.push(state.gameDataBase[action.payload])
      return{
        ...state,
        filteredItem:newList
      }
    case SAVE_USER_LOCAL:
      let newData = state.userData
      newData.push(action.payload)
      return{
        ...state,
        userData:newData
      }
    default :
    return state
  }
}

