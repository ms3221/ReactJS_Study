//eslint-disable 

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { useRecoilState } from 'recoil';
import { 모달변경1 } from './atom';

// import { 모달변경1 } from './atom';




// const Button = styled.button`  
//   color  : #eee;

// `
function Button(){
  return(
    <button>버튼</button>
  );
}





//일종의 자바스크립트 파일! 

function App() {

  
  
let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이선 독학']);  //[a,b] 데이터가 두개가 둘어가 있습니다.
  //그냥 변수가 아닌 useState를 사용하는 이유는 rendering이 중요함이다. 
  //일반변수는 그냥 그냥 새로고침이 되어야 합니다. 
let posts = '강남 고기 맛집';
let [따봉, 따봉변경] = useState(new Array(글제목.length).fill(0));
let [비추, 비추변경] = useState();
let [number, setNumber] = useState();
 //let [modal1, modal변경] = useRecoilState(모달변경1);
let [modal, modal변경] = useState(false);
  
 

 function clickContent(){
   if(modal === false){
    modal변경(true)
   }else {
    modal변경(false)
   }
}

 

//4강숙제 
//버튼을 만들고 버튼에다가 특별한 기능을 추가하자 
// 남자코튼 추천이  -> 여자코튼추천으로 바꾸어봅시다. 


  return (


    <div className="App">    
         <div className="black-nav">
              개발Blog 
              </div>  
      
      {
        글제목.map((글,숫자) => {
        
          return (
            <div className="list">
              <h3 onClick={() => { setNumber(숫자) }}> {글} <span onClick={() => {
                let newArr = [...따봉];
                newArr[숫자] += 2;
                따봉변경(newArr);
              }}> 👍🏻 </span>{따봉[숫자]}</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          );  
      })
    }
    
      <button onClick={()=>{ if(!modal)modal변경(true)
           if(modal)modal변경(false)}}>열고닫기</button>
          
      {modal ? <Modal 글제목={글제목} number={ number }  /> : null}
        
    </div>
  );
}


function Modal(props) {

  //<> </> 프레그먼트 문법 
  return(
    <div className="modal">
    <h2>{props.글제목[props.number]}</h2>
      <p>날짜 : { props.글제목}</p>
     <p>상세내용</p> 
  </div>

  )
}

export default App;
