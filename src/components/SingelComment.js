import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { commentUpadata } from "../redux/action";
import { useDispatch } from "react-redux";
import { commentDelete } from "../redux/action";
import { motion } from "framer-motion";
const SingelComment = ({ data }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);
  const hendleDelate = (event) => {
    event.preventDefault();
    dispatch(commentDelete(id));
  };
  const hendleInput = (event) => {
    setCommentText(event.target.value);
  };

  const onHendleUpdata = (event) => {
    event.preventDefault();
    dispatch(commentUpadata(commentText, id));
  };
  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  const listVariantsOffInput = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <form onSubmit={onHendleUpdata} className="comments-item">
      <div onClick={hendleDelate} className="comments-item-delete">
        <motion.span
          variants={listVariantsOffInput}
          initial="hidden"
          animate="visible"
        >
          &times;
        </motion.span>
      </div>
      <motion.input
        variants={listVariants}
        initial="hidden"
        animate="visible"
        type="text"
        value={commentText}
        onChange={hendleInput}
      />
      <input type="submit" hidden />
    </form>
  );
};

export default SingelComment;
