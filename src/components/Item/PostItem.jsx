import styled from "styled-components";
import TagList from "../list/TagList";

const Wrapper = styled.div`
  padding: 12px;
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
`;

const ImgContainer = styled.div`
  width: 200px;
  height: 125px;
  background-image: url(${(props) => props.IMG});
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  width: 200px;
  display:flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 4px;

`

const TitleText = styled.div`
  font-size: 24px;
  margin: 4px 0px;
`;

const DateText = styled.div`
  font-size: 12px;
  font-weight: Bold;
  margin: 4px 0px;
`;

const ContentText = styled.div`
  font-size: 12px;
  margin: 4px 0px;
`;


function PostItem(props) {
  const { post, onClick } = props;
  function truncateContent(content) {
    if (!content) return ''; 
    const contentWithoutNewline = content.replace(/\\n/g, '');
    const truncatedContent = contentWithoutNewline.substring(0, 20); 
    if (contentWithoutNewline.length > 20) {
      return truncatedContent + "...";
    } else {
      return truncatedContent; 
    }
  }

  return (
    <Wrapper onClick={onClick}>
      <ImgContainer IMG={post.image_url} />
      <TextContainer>
        <DateText>{post.date}</DateText>
        <TitleText>{post.title}</TitleText>
        <ContentText>{truncateContent(post.content)}</ContentText>
        <TagList  tags={post.tags} fontSize={'12px'}  paddingX={'6px'} 
          paddingY={'6px'} marginX={'2px'} marginY={'2px'}
        ></TagList>
      </TextContainer>
    </Wrapper>
  );
}

export default PostItem;
