import { useState } from "react"
import { connect } from "react-redux"

const TodoForm = (props) => {
    const [name, setName] = useState('')
    const handleSubmit = (e)=> {
        e.preventDefault()
        props.dispatch({
            type: 'ADD_TODO',
            todo:{id:props.idYO, name:name,complete:false}
        })
        props.dispatch({type:'INC_ID'})
        setName('')  
    }
    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <button>add</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{ idYO: state.nextId}
}
// this will give my TodoForm a dispatch prop
export default connect(mapStateToProps)(TodoForm)