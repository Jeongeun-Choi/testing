import React, { FormEvent, useCallback, useRef, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Input from "./Input";

function App() {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const ageInputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState<string>("이름 없음");
  const [age, setAge] = useState<number>(0);

  const handleSumbitResult = useCallback((e: FormEvent) => {
    e.preventDefault();
    const nameValue = nameInputRef.current?.value as string;
    const ageValue = ageInputRef.current?.value as string;

    setName(nameValue);
    setAge(parseInt(ageValue, 10));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul id="menu">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/404">다른 화면</Link>
          </li>
          <li>
            <Link to="/">설정</Link>
          </li>
        </ul>
      </header>
      <main>
        <Input name={name} age={age} />
        <form onSubmit={handleSumbitResult}>
          <input placeholder="이름을 입력하세요." ref={nameInputRef} />
          <input placeholder="나이를 입력하세요." ref={ageInputRef} />
          <button>확인</button>
        </form>
      </main>
    </div>
  );
}

export default App;
