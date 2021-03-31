import { useReducer } from "react";
let initialState = {
    counter : 0
};
let reducer = (state,action)=>{
    if(action.type="add"){
        let newState = {
            ...state,
            counter : state.counter+1
        }
        return newState;
    }
    return state;
}

const App = ()=>{
    let [state,dispatch] = useReducer(reducer,initialState);
    return (
        <>
            <h1>{state.counter}</h1>
            <button onClick={()=>{
                dispatch({
                    type : "add"
                })
            }}>Click Me</button>
        </>
    )
}

export default App;