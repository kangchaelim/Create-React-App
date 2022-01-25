import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"}></Button>
    </div>
  );
}

export default App;

// import {useState, useEffect} from "react";

// function App() {
//   const [counter, setvalue] = useState(0);
//   const onClick = () => setvalue((prev) => prev + 1);
//   const [keyword, setKeyword] = useState("");
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(()=>{
//     console.log("I run only once") // 처음 실행(렌더)시에 한 번만 실행되고 다시는 하지 말아라
//   }, []); 
//   useEffect(()=>{
// if (keyword !== "" && keyword.length > 5){} 조건 달았을 때
//       console.log("I run when 'keyword' changes"); // 시작할 때랑 keyword 변화 시에 실행해라
//   }, [keyword]); 
//   useEffect(()=>{
//     console.log("I run when 'counter' changes"); // 시작할 때랑 counter 변화 시에 실행해라
//   }, [counter]);
//   useEffect(()=>{
//     console.log("I run when 'keywords' &'counter' changes"); // 시작할 때랑 keyword나 counter 변화 시에 실행해라
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// useEffect 두 개의 argument를 가지는 function. 우리 코드가 딱 한 번만 실행될 수 있도록 보호해줌.
// 첫 번째 argument 우리가 딱 한 번만 실행하고 싶은 코드
// 두 번째 argument [] 안에 들어있는 무언가가 변할 때 실행시킬 수도 있음
// react.js는 아주 간단한 작동 되는데, state를 변화시킬 때 component를 재실행 시키는 것임.
// UI 관점에서 보면 새로운 데이터가 들어올 때 마다 자동으로 새로고침되니 좋은 일이긴 한데..
// 문제는 어떤 코드들은 계속 실행되면 안될 수도 있기때문에.. 
// useEffect를 사용하는 이유. 코드를 언제 실행할지 선택하는 것이 바로 useEffect.
// react.js가 동작하는 관점에서 말하자면 방어막같은 거임.
// export default App;
