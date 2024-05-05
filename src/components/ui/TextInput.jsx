
import React from "react";
import styled from "styled-components";


function TextInput(props){
  const { height, value, onChange, placeholder } = props;

  return <StyledTextArea height={height||20} placeholder={placeholder} value={value} onChange={onChange}/>
}


const StyledTextArea = styled.textarea`
  width: calc(100% - 32px);
  height: ${props => props.height}px;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid gray;
  border-radius: 10px;
`

export default TextInput