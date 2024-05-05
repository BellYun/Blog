import styled from "styled-components";
import PostItem from "../Item/PostItem";

const Wrapper = styled.div`
  width: 1080px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 50px;
  justify-content: center;
  align-items: start;
  background-color: black;
`

function PostList(props){

  const {posts , onClickItem} = props;

  return(
    <Wrapper>
      {posts.map((post, index) =>{
        return(
          <PostItem key = {post.id} post={post} onClick={()=>onClickItem(post)}></PostItem>
        )
      })}
    </Wrapper>
  )
}

export default PostList