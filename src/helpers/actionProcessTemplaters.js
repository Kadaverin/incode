export const start = (actionType) => `${actionType}_REQUEST`;
export const success = (actionType) => `SUCCESS__${actionType}`;

export const failActionWithType = (actionType, error, status ) =>({
  type: `FAIL__${actionType}`,
  error,
  status
}) 
