import React from "react";
import SingelComment from "./SingelComment";
import { useState } from "react";
import { commentCreate } from "../redux/action";
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
    event.preventDefault();

    const id = uniqid();
    const badWords = ["дурак", "придурок"];
    function isBadWords(arr, val) {
      return arr.some((arrVal) => val === arrVal);
    }

    if (document.getElementById("inp").value === "") {
      alert("Введите комментарий");
    } else if (isBadWords(badWords, document.getElementById("inp").value)) {
      alert("не ругайся");
    } else if (document.getElementById("inp").value !== "") {
      dispatch(commentCreate(textComment, id));
      setTextComment("");
    }
  };

  return (
    <div className="card-comments">
      <form onSubmit={hendleSubmit} oaction="" className="comments-item-create">
        <input
          id="inp"
          type="text"
          value={textComment}
          onChange={hendleInput}
        />
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
