import React from "react";
import SingelComment from "./SingelComment";
import { useState, useEffect } from "react";
import { commentCreate, commentsLoad } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
const Comments = (props) => {
  const [textComment, setTextComment] = useState("");
  const dispatch = useDispatch();

  const comments = useSelector((state) => {
    const { commentsReducer } = state; // получаем данные с редакс
    return commentsReducer.comments;
  });
  const hendleInput = (event) => {
    setTextComment(event.target.value); // получаем символы которые набрали
  };

  const hendleSubmit = (event) => {
    event.preventDefault(); // при нажатии на enter не перезагружаем стр
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  return (
    <div className="card-comments">
      <form onSubmit={hendleSubmit} oaction="" className="comments-item-create">
        <input type="text" value={textComment} onChange={hendleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res, i) => {
          return <SingelComment key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
