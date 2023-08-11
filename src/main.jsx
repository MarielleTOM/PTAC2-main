import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './Home/Home.jsx';
import Todo from './Todo/Todo.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Todo' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
