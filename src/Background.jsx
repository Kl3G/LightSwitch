
function Background ( {color, onToggle} ) {
// props 객체를 구조 분해해서 한 번에 color와 onToggle을 꺼낸다.

// function Background({color}, {onToggle}) 
// 이건 함수에 인자를 두 개 받겠다는 의미,
// props는 하나의 객체니까 이렇게 쓰면 오류.

    return (

        <div id="Background" style={{ width: "100%", height: "100%",
            backgroundColor: color === 0 ? "gray" : "#FF9F00", 
        }}> {/* style은 반드시 객체 형태로 적을 것. */}
            <h1>LightSwitch</h1>
            <button onClick={onToggle}>on</button>
            {/* 버튼은 자식 컴포넌트에 있고,
            이벤트 핸들러는 부모로부터 props로 전달받는다. */}
        </div>
    );
};

export default Background;