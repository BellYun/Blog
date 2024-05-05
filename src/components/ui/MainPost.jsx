import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TagList from "../list/TagList";

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${(props) => props.IMG});
  background-size: cover;
  background-position: center;
  :hover{
    cursor: pointer;
  }
`;

const BlackWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Context = styled.div`
  width: 1080px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

const Date = styled.div`
  font-size: 16px;
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: bolder;
`;

const Detail = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
function MainPost(props) {
  const { id, title, content, date, image_url, tags } = props.posts;
  const navigate = useNavigate();

  const truncateContent = (content) => {
    if (!content) return ''; 
    const contentWithoutNewline = content.replace(/\\n/g, '');//개행 문자 제거
    const truncatedContent = contentWithoutNewline.substring(0, 40); 
    if (contentWithoutNewline.length > 40) {
      return truncatedContent + "...";
    } else {
      return truncatedContent; 
    }
  }//내용이 40자 이상힌 경우... 40자 까지만 보여주며 ...을 붙여서 리턴

  return (
    <Wrapper IMG={image_url} onClick={()=>navigate('/post/'+id)}>
      <BlackWrapper>
        <Context>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Detail dangerouslySetInnerHTML={{ __html: truncateContent(content) }} />
          <TagList tags={tags} fontSize={'18px'}  paddingX={'16px'} paddingY={'4px'} 
            marginX={'8px'} marginY={'2px'}
          ></TagList>
        </Context>
      </BlackWrapper>
    </Wrapper>
  );
}

export default MainPost;
