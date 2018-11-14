export const start = (actionType) => `START__${actionType}`;
export const success = (actionType) => `SUCCESS__${actionType}`;
export const fail = (actionType) =>  `FAIL__${actionType}`

export const startActionWithType = (type, payload) => ({
  type: start(type),
  payload
})

export const successActionWithType = (type, payload) => ({
  type: success(type),
  payload
})

export const failActionWithType = (type, error, status ) =>({
  type: fail(type),
  error,
  status
}) 
