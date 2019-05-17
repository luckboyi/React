function getMsgRequest(){
  return {
    type: GET_MSG_REQUEST
  }
}
function getMsgSuc(msg) {
  return{
    type:GET_MSG_SUC,
    msg:msg
  }
}
function getMsgFail(params) {
  return{
    type:Get_MSG_FAIL
  }
}
export const GET_MSG_REQUEST = 'getMsg/GET_MSG_REQUEST'
export const GET_MSG_SUC = 'getMsg/GET_MSG_SUC'
export const Get_MSG_FAIL = 'getMsg/Get_MSG_FAIL'
export function getMsg() {
  return function (dispatch) {
      dispatch(getMsgRequest());

      return fetch('http://localhost:8080/api/user.json')
          .then((response => {
              return response.json()
          }))
          .then((json) => {
                  dispatch(getMsgSuc(json))
              }
          ).catch(
              () => {
                  dispatch(getMsgFail());
              }
          )
  }
}