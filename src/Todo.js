import { connect } from "react-redux";

const Todo = ({ name, id, complete, dispatch }) => {
  return (
    <div style={{ margin: "10px", border: "1px solid" }}>
      <h3
        style={
          complete ? { textDecoration: "line-through", color: "grey" } : {}
        }
      >
        {name}
      </h3>
      <button onClick={() => dispatch({ type: "DELETE_TODO", id })}>
        delete
      </button>
      <button onClick={() => dispatch({ type: "UPDATE_TODO", id })}>
        {complete? 'mark as undone': 'mark as done'}
      </button>
    </div>
  );
};
export default connect()(Todo);
