import styled from "styled-components"
import Button from "./Button"
import {  useNavigate } from "react-router-dom"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: center;
  position: fixed;
  top: 0;
`
const NickName = styled.div`
  color: white;
  font-size: 48px;
  margin: 4px;
`

const Content = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`

function Header(){

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <NickName onClick={()=>navigate('/')} >Blog</NickName>
        <Button fontSize="24px" title="POST" onClick={()=>navigate('/write')}></Button>
      </Content>
    </Wrapper>
  )
}

export default Header