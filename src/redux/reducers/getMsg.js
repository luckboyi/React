import {GET_MSG_REQUEST,GET_MSG_SUC,Get_MSG_FAIL} from '../actions/getMsg'
const initState = {
  isLoading:false,
  msg:{},
  errorMsg:''
}
export default function reducer(state = initState,action){
  switch (action.type) {
    case GET_MSG_REQUEST:
      return{
        ...state,
        isLoading:true,
        msg:{},
        errorMsg:''
      }
      break;
      case GET_MSG_SUC:
      return{
        ...state,
        isLoading:false,
        msg:action.msg,
        errorMsg:''
      }
      break;
    case GET_MSG_REQUEST:
      return{
        ...state,
        isLoading:true,
        msg:{},
        errorMsg:''
      }
      break;
      case Get_MSG_FAIL:
      return{
        ...state,
        isLoading:false,
        msg:{},
        errorMsg:'请求错误'
      }
      break;
    default:
      return state;
      break;
  }
}