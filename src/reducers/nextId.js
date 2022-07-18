const nextId = (state = 10, action) => {
    switch(action.type){
        case 'INC_ID':
          return state + 1
        case 'DEC_ID':
            return state - 1  
        case 'RESET_ID':
            return 10     
        default :
          return state  
    }
}

export default nextId