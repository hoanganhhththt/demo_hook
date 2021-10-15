import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import TodoItem from './TodoItem';
import localStorage from '../localStorage';
import * as action from '../actions'
import './TodoList.scss'

const TodoList = () => {
    const dispatch =  useDispatch();
    const user = localStorage.getToken().user;
    // const [todos,setTodos] = useState([])
    useEffect(()=>{
         dispatch(action.get_all_books());
        
    },[])
    
    const res = useSelector((state)=>state.items.listBook);
    const header = ["id","name","author","age","img"];
    if(user.role=='admin'){
        header.push('tools')
    }
    const tableHeader = header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
    return (
        <div>          
            <table id="students">
                <thead>{tableHeader}</thead>
                <tbody>
                    {res.map((todo)=>{
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TodoList;



// function App (){
//     const data = [1,2,3,4,5]
//     return <Home data = {data} />
// }
// // mỗi lần gọi hàm app nó sẽ tạo mới một mảng data và Home sẽ bị render lại
// function App (){
//     const data = useMemo(()=> [1,2,3,4,5],[])
//     return <Home data={data} />
// }
// // hàm useCallback nó sẽ chỉ tạo 1 mảng từ đầu, khi gọi App nó sẽ gọi biến cũ là Home không bị re-render
