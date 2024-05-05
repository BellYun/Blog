import styled from "styled-components";
import PostList from "../components/list/PostList";
import { useNavigate } from "react-router-dom";
import { db } from '../firebase'
import { useEffect, useState } from "react";
import MainPost from "../components/ui/MainPost";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`

function MainPage(props){
  const navigate = useNavigate();
  const [mainPost, setMainPost] = useState([])
  const [postList, setPostList] = useState([])

  useEffect(function(){
    let tempData = []
    db.collection('post').orderBy('id', 'desc').get().then(function(qs){
      //id를 기준으로 내림차순으로 정리
      qs.forEach(function(doc){
        tempData.push(doc.data())
      })
      setMainPost(tempData.shift())//가장 최신 데이터는 따로 관리할 것이기에 뽑아냄
      setPostList(tempData);//나머지 데이터들을 PostList에 저장
    })
  },[])

  return (
    <Wrapper>
      <MainPost posts={mainPost}></MainPost>
      <PostList posts={postList} onClickItem={(p)=>{navigate('/post/'+p.id)}}></PostList>
    </Wrapper>
  )
}

export default MainPage