import { connect } from "react-redux"
import Todo from "./Todo"

const TodoList = (props) => {

    const renderTodos = () => {
        let filteredTodos = []
        if(props.filter === 'complete'){
            filteredTodos = props.todos.filter(t=> t.complete)
        } 
        else if(props.filter === 'incomplete') {
            filteredTodos = props.todos.filter(t=> !t.complete)
        } else {
            filteredTodos = props.todos
        }
        return filteredTodos.map(t=> <Todo key={t.id} {...t}/>)
    }
    return (
        <div>
            {props.user && <p>{`welcome ${props.user.name}`}</p>}
            {!props.user && <p>please login</p>}

            {props.user && <button onClick={()=>props.dispatch({type:'CLEAR_USER'})}>logout</button>}
            {!props.user && <button onClick={()=>props.dispatch({type:'SET_USER', user:{name:'BOB'}})}>login</button>}
            
            <h1>TodoList</h1>
            <p>active fitler: {props.filter}</p>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {todos: state.todos, filter:state.filter, user: state.user}
}
export default connect(mapStateToProps)(TodoList)