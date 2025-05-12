import {useState} from 'react';
import Background from './Background';

function App() {

  const [onOff, setSwitch] = useState(0);

  function SwitchHendler () {

    setSwitch( (prev) => (prev + 1) % 2 );
  }

  console.log(onOff);

  return (
    <>
      <Background color={onOff} 
      onToggle={SwitchHendler} />
      {/* 버튼을 Background.jsx로 옮기되, 
      상태(state)는 App(부모)에서 계속 관리하기 위해서 자식 컴포넌트에 props로 내려준다.
      이걸 "상태 끌어올리기(Lifting State Up)" 라고 한다. */}
      {/* SwitchHendler는 콜백함수다, 
      콜백함수는 "호출할 수 있는 권한"과 호출할 함수의 "주소"를 전달한다. */}
    </>
  )
}

export default App;
