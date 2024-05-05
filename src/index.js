import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import PostWritePage from './page/PostWritePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import PostViewPage from './page/PostViewPage';
import Header from './components/ui/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route index element={<MainPage/>}></Route>
      <Route path='write' element={<PostWritePage/>}></Route>
      <Route path='post/:id' element={<PostViewPage/>}></Route>
    </Routes>
  </BrowserRouter>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
