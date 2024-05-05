import styled from "styled-components"

const Tag = styled.div`
  background-color: red;
  padding: ${({ paddingX, paddingY }) => `${paddingY} ${paddingX}`};
  margin: ${({ marginY, marginX }) => `${marginY} ${marginX}`};
  color: white;
  border-radius: 20px;
  font-weight: bold;
  white-space: nowrap;
  font-size: ${({ fontSize }) => `${fontSize}`}; 
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width:100%;
  flex-wrap: wrap;
`

function TagList(props){
  const { tags, fontSize, paddingX, paddingY, marginX, marginY } = props
  return(
    <Wrapper >
      {tags && tags.map((tag, index) => (
        <Tag fontSize={fontSize} paddingX={paddingX} paddingY={paddingY} 
          marginX={marginX} marginY={marginY} key={index}
        >{tag}</Tag>
      ))}
    </Wrapper>
  )
}

export default TagList
