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
      {/* "상태는 부모에서 관리하고, 자식 컴포넌트에는 props로 내려준다."
      이걸 "상태 끌어올리기(Lifting State Up)" 라고 한다. */}
      {/* 버튼을 Background.jsx로 옮기되, 상태는 App에서 계속 관리 */}
    </>
  )
}

export default App;
