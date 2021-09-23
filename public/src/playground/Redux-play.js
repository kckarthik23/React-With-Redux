import {createStore } from "redux"

const reducers=(state={count:0}, action)=>{
    console.log(action.type);
    console.log(action.incrementBy);
    switch(action.type)
{
    case "INCREMENT" :
    return {count:state.count+action.incrementBy};

    case "DECREMENT" :
    return {count:state.count-1};

    case "RESET" :
        return {count:0};

    default: return{count:0};

}
}

const store =createStore(reducers);

const increment=({incrementBy=1}={})=>{
    console.log(incrementBy);
    return(
    {
        type:"INCREMENT",
        incrementBy
    }
    )
}
store.dispatch(increment({
    incrementBy:5
}));
// store.dispatch(increment(
//     {
//         incrementBy:5
//     }
// ));

// store.dispatch({
//     type:"INCREMENT"
// });
// store.dispatch({
//     type:"RESET"
// });

// store.dispatch({
//     type:"INCREMENT"
// });
// store.dispatch({
//     type:"INCREMENT"
// });
// store.dispatch({
//     type:"INCREMENT"
// });

store.dispatch({
    type:"DECREMENT"
});
console.log(store.getState());
console.log("KCK");

const expenseAction=()=>(
    {

    }
)

