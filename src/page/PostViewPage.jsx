import styled from "styled-components";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import CommnetList from "../components/list/CommentList";
import TagList from "../components/list/TagList";

const Wrapper = styled.div`
  margin-top: 120px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
`
const Container = styled.div`
  width: 769px;
  align-self: center;
`
const DateText = styled.div`
  font-size: 24px;
  font-weight: bold;
  justify-content: start;
`
const TitleText = styled.p`
  justify-content: start;
  font-size: 48px;
  font-weight: bold;
  margin: 4px 0px;
`
const ContentText = styled.div`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`
const CommentLabel = styled.p`
  font-size: 32px;
  margin: 16px 4px;
  font-weight: 500;
`
const StyledImage = styled.img`
  margin-top: 20px;
  width: 100%;  
  height: auto; 
  margin-bottom: 20px;  
`

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

function PostViewPage(props){
  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  const postId = useParams().id;
  const [post, setPost] = useState({
    id: 0,
    title: '',
    content: '',
    comments: [],
    imgUrl: ''
  });

  useEffect(() => {
    db.collection('post').doc(postId).get().then(doc => {
      console.log(doc.data());
      setPost(doc.data());
    });
  }, [postId]);

  const [comment, setComment] = useState('');
  return (
    <Wrapper>
      <Container>
        <DateText>{post.date}</DateText>
        <TitleText>{post.title}</TitleText>
        <TagList tags={post.tags} fontSize={'16px'} paddingX={'32px'} 
          paddingY={'4px'} marginX={'8px'} marginY={'2px'} 
        ></TagList>
        {post.image_url && <StyledImage src={post.image_url} alt="Post Image"/>}
        <ContentText dangerouslySetInnerHTML={{ __html: post.content }} />
        <CommentLabel>댓글</CommentLabel>
        <CommnetList comments={post.comments}></CommnetList>
        <TextInputContainer>
        <TextInput height={40} placeholder={'댓글 입력하기'} value={comment} onChange={(e)=> setComment(e.target.value)}></TextInput>
        <Button fontSize='16px'  title="작성" onClick={
          function(){
            let timestamp = new Date().getTime().toString();
            const currentDate = formatDate(new Date());
            let tempComments = post.comments
            tempComments.push({
              id:(postId+'_'+timestamp),
              content: comment,
              date: currentDate
            })
            db.collection('post').doc(postId).update({
              comments: tempComments
            }).then(function(){
              setComment('')
            })
          }
        }></Button>
        </TextInputContainer>
      </Container>
    </Wrapper>
  )
}

export default PostViewPage;
