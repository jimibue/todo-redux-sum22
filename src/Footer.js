import { connect } from "react-redux";

const Footer = (props) => {
  const getStyle = (str) => {
    if (props.filter === str) {
      return { color: "blue", fontWeight: "bold" };
    }
    return {};
  };
  const setFilter = (newFilter)=>{
      props.dispatch({type:'SET_FILTER', filter:newFilter})
  }
  return (
    <div>
      <h1>SelectFilter</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p style={getStyle("all")} onClick={() => setFilter("all")}>
          all
        </p>
        <p style={getStyle("complete")} onClick={() => setFilter("complete")}>
          complete
        </p>
        <p style={getStyle("incomplete")} onClick={() => setFilter("incomplete")}>
          incomplete
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { filter: state.filter };
};
export default connect(mapStateToProps)(Footer);
