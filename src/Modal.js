

import { useRecoilState } from 'recoil';
import { 모달변경1 } from './atom';

function Modal({ 글제목 }) {

    let [modal, modal변경] = useRecoilState(모달변경1);
    //<> </> 프레그먼트 문법 
    return(
      <div className="modal">
      <h2>{글제목}</h2>
      <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => { modal변경(false)}}>test</button>
    </div>
  
    )
}
  
export default Modal;