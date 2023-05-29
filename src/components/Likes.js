import React from "react";
import { connect } from "react-redux";
import { incrementLikes, decrementlikes } from "../redux/action";
import { motion } from "framer-motion";
const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>
        <motion.span
          whileHover={{
            color: "red",
          }}
        >
          ♥
        </motion.span>
        {props.likes}
      </button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { likesRedcuer } = state;
  return {
    likes: likesRedcuer.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      return dispatch(decrementlikes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
