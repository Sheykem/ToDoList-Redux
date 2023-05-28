import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { inputText } from "../redux/action";
const Title = (props) => {
    const dispatch = useDispatch()

    const valueText = useSelector(state => {
        const {inputReducer} = state
        return inputReducer.text
    })

    const hendleChange = (event) => {
        dispatch(inputText(event.target.value))
    }
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={hendleChange} />
      </div>
      {valueText}
    </div>
  );
};

export default Title;
