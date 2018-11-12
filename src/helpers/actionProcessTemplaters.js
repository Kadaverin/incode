export const start = (actionType) => `START__${actionType}`;
export const success = (actionType) => `SUCCESS__${actionType}`;

export const failActionWithType = (actionType, error, status ) =>({
  type: `FAIL__${actionType}`,
  error,
  status
}) 