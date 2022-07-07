import { useState } from 'react'

function App() {
  const [array, setArray] = useState(["上資料結構","寫器材網頁","吃早餐"]);
  const [text, setText] = useState(""); 
  let todo = useState([]);

  array.forEach((item, index)=>{
    todo.push(<p>{index}. <b>{item} </b><button onClick={()=>setArray(array.filter(d=>d!=item))}>刪除</button></p>)
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>React初體驗のTodo</h1>
        <input type="text" onChange={e =>{setText(e.target.value)}}></input><button onClick={()=>{setArray([...array,text])}}>新增</button>
        {todo}
      </header>
    </div>
  )
}

export default App
