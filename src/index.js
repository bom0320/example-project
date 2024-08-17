import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// `reportWebVitals` 관련 코드를 모두 제거합니다.

// 기존 ReactDOM.render 코드로 대체
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals() 호출 제거 후:
// 만약 아래와 같은 코드를 삭제하지 않았더라면, 삭제하십시오.
// reportWebVitals();
