import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { commentUpadata } from "../redux/action";
import { useDispatch } from "react-redux";
import { commentDelete } from "../redux/action";
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
    event.preventDefault()
    dispatch(commentDelete(id))

  }
  const hendleInput = (event) => {
    setCommentText(event.target.value);
  };

  const onHendleUpdata = (event) => {
    event.preventDefault();
    dispatch(commentUpadata(commentText, id));
  };

  return (
    <form onSubmit={onHendleUpdata} className="comments-item">
      <div onClick={hendleDelate} className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={hendleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingelComment;
