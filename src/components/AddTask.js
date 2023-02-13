import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/todos";

import Add from "../others/Add.png";
// import Search from "../others/Search.png";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #333;
  width: 300px;
  font-size: 16px;
  letter-spacing: 0.05em;
  color: #FFFFFF;

  img {
    cursor: pointer;
  }

  &::placeholder {
    color: 	#FFFFFF;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 25px auto 40px;
`;

const AddBtn = styled.button`
  padding: 0;
  border: none;
  height: 27px;
  width: 27px;
  background-color: inherit;

  img {
    cursor: pointer;
  }
`;

/*const SearchBtn = styled.button`
  padding: 0;
  border: none;
  height: 27px;
  width: 27px;
  background-color: inherit;

  img {
    cursor: pointer;
  }
`;*/

function AddTask() {
  const dispatch = useDispatch();

  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const handleClick = (event) => {
    if(newTask === "") return;
    dispatch(actions.addTask(newTask));
    setnewTask("");
  };

  return (
    <Wrapper>
      <Input
        name="addtask"
        type="text"
        placeholder={"輸入內容"}
        value={newTask}
        onChange={handleChange}
      />
      <AddBtn onClick={() => handleClick()} >
        <img src={Add} alt="新增"/>
      </AddBtn>
      {/* <SearchBtn onClick={() => handleClick()} > */}
        {/* <img src={Search} alt="搜尋"/>*/ }
      {/* </SearchBtn> */}
    </Wrapper>
  );
}

export default AddTask;
