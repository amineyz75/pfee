import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import Normal from "./Normal";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
function Feedback() {
    const nav = useNavigate();
    const [QuestionReg, setQuestionReg] = useState("");
    axios.defaults.withCredentials = true;

    const register = (event) => {
      const id = localStorage.getItem("userid");
        console.log(id)
        event.preventDefault();
        axios.post(`http://localhost:3001/Feedback/${id}`, {
         Question:QuestionReg,id
        })
          .then((res) => {
            if (res) {
              nav("/Normal");
            }
          setQuestionReg("")
          })
          .catch((err) => {
            console.log(err);
          });
      };
   

  const [currentValue, setCurretValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const handleClick = (value) => {
    setCurretValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };
  const stars = Array(5).fill(0);
  return (
    <>
    <Normal/>
    <div style={styles.container}>
      <h2>Star Ratings in React</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return <FaStar 
          key={index} 
          size={24} 
          style={{
              marginRight:10,
              cursor:"pointer"
          }}
          color={(hoverValue || currentValue)>index ? colors.orange :colors.grey}
          onClick={()=>handleClick(index +1)}
          onMouseOver={()=>handleMouseOver(index +1)}
          onMouseLeave={handleMouseLeave}

          />;
        })}
      </div>
      <textarea 
        placeholder="What's your feedback"
        style={styles.textarea}
        value={QuestionReg}
        onChange={(e) => setQuestionReg(e.target.value)}
      />
      {/* //onClick={register} */}
      <button onClick={register} style={styles.button}>submit</button>
    </div>
    </>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea:{
        border:"1px solid #a9a9a9",
        borderRaduis:5,
        width:300,
        margin:'20px 0',
        minHeight:100,
        padding:10
  },
  button: {
    border:"1px solid #a9a9a9",
    borderRaduis:5,
    width:300,
    padding:10
  }
};

export default Feedback;
