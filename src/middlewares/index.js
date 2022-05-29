/*
Los middlewares se usan para realizar acciones entre que se dispara un action
y llegan al reducer, en estre caso vamos a hacer un log de los actions
 */
export const logActions = (store) => (next) => (actionInfo) => {
  console.log("Action:", actionInfo);
  next(actionInfo);
};
