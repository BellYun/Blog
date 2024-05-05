import styled from "styled-components";

function Button(props){
  const {fontSize,title, onClick} = props;

  return (
    <StyledButton fontSize={fontSize} onClick={onClick}>
      {title || "button"}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-size: ${({ fontSize }) => `${fontSize}`}; 
  font-weight: bold;
  border-radius: 16px;
  border-width: 1px;
  cursor: pointer;
  background-color: red;
  color: white;
  flex-wrap: nowrap;
  white-space: nowrap;
  border:none
`

export default Button