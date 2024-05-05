import styled from "styled-components";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const Wrapper = styled.div`
  margin: 100px 0px;
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const TagInput = styled.input`
  flex-grow: 1;
  width: 30px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const RightAlignContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledTagItem = styled.div`
  display: flex;
  align-items: center;
`;



function PostWritePage(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgurl, setImgUrl] = useState('');
  const [tagInput, setTagInput] = useState('');

  const navigate = useNavigate();

  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, idx) => idx !== index));
  };


  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  return (
    <Wrapper>
      <Container>
        <TextInput height={20} value={title} placeholder={'Title'}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput height={400} value={content} placeholder={'Content'}
          onChange={(e) => setContent(e.target.value)}
        />
        <TextInput height={20} value={imgurl} placeholder={'Image URL'}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <TagsContainer>
          {tags.map((tag, index) => (
            <StyledTagItem key={index}>
              {tag}
              <Button fontSize='12px' title={'X'} onClick={() => handleRemoveTag(index)}>x</Button>
            </StyledTagItem>
          ))}
          <TagInput type="text" value={tagInput} placeholder="add tag"
            onChange={(e) => setTagInput(e.target.value)}
          />
          <Button title="Add Tag" onClick={handleAddTag}>Add Tag</Button>
        </TagsContainer>
        <RightAlignContainer>
        <Button title="Submit Post" onClick={() => {
          const currentDate = formatDate(new Date());
          let timestamp = new Date().getTime().toString();
          db.collection('post').doc(timestamp).set({
            id: timestamp,
            title: title,
            content: content,
            image_url: imgurl,
            tags: tags,
            comments: [],
            date: currentDate
          }).then(() => {
            navigate('/');
          });
        }} />
        </RightAlignContainer>
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
