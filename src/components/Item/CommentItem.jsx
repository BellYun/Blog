import styled from "styled-components"

function CommentItem(props){
  const { comment } = props

  return(
    <Wrapper >
      <TitleText>{comment.content}</TitleText>
      <TitleText>{comment.date}</TitleText>
    </Wrapper>
  )
}

export default CommentItem

const Wrapper = styled.div`
  width: calc(100% - 20px);
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  background-color: white;
  padding: 12px;
  transition: all 0.3s ease;
  &:hover{
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateY(-2px);
    background-color: #f9f9f9;
  }
`
const TitleText = styled.p`
  font-size: 14px;
  color: #333;
  white-space: pre-wrap;
  margin: 4px 0;
`
