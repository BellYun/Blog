import styled from "styled-components";
import CommentItem from "../Item/CommentItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & > *{
    :not(:last-child){
      margin-bottom: 16px;
    }
  }
`

function CommnetList(props){

  const { comments } = props;

  return(
    <Wrapper>
      {comments.map((comment, index) =>{
        return(
          <CommentItem key = {comment.id} comment={comment} ></CommentItem>
        )
      })}
    </Wrapper>
  )
}

export default CommnetList