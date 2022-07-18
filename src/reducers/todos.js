// A reducer in redux is just a function, a 'pure function' it doen't mutate anything

const initialsTodos = [
    {id:1, name:'eat', complete:true},
    {id:2, name:'code', complete:false},
]

// it takes state and a action and returns new state
// an action is a going to be a js object with {type:string,...}


const todos = (state = initialsTodos, action) => {
    switch(action.type){
        case "ADD_TODO":
            // action here {type:'ADD_TODO', todo:{id, name, complete}}
            return [...state, action.todo]
        case "DELETE_TODO":
            // action here {type:'DELETE_TODO', id}
            return state.filter(t=> t.id !== action.id)
        case "UPDATE_TODO":
            // action here {type:'DELETE_TODO', id}
            return state.map(t=> {
                if(t.id === action.id){
                    return {...t, complete:!t.complete}
                }
                return t
            })    
        default:
           return state       
    }

}

export default todos



// default parameter
// const add = (num1, num2 = 10 ) =>{
//     return num1 + num2
// }

// add(1) => 11
// add(1,1) => 2

