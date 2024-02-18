export const logger = store => next => action =>{
    console.log(`type:${action.type}, payload:${action.payload}`);
    console.log(store.getState());
    return next(action)
}