const filter = (state='all', action) =>{
    switch(action.type){
        case "SET_FILTER" :
            return action.filter
        default:
            return state    
    }
}

export default filter

// dispatch({type:"SET_FILTER", filter:'complete' })
// dispatch({type:"SET_FILTER", filter:'incomplete' })
// dispatch({type:"SET_FILTER", filter:'all' })