import { useEffect } from "react";
import { FC } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

export interface TodoListProps {
    
}
 
const TodoList: FC<TodoListProps> = () => {

    const {error ,loading , page , limit , todos} = useTypedSelector(state => state.todo)
    const {fetchTodos , setTodoPage} = useActions()

    const pages =  [1 , 2 ,3 ,4 ,5]

    useEffect(() => {
        fetchTodos(page , limit)
    } , [page])

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return ( 
            <div>
                {todos.map(todo => 
                    <div key={todo.id} >{todo.id} - {todo.title}</div>
                    )}

                    <div style={{display : 'flex'}}>
                            {pages.map(p => 
                                <div style={{border:p === page ? '2px solid green' : '2ox solid gray' , padding:10}}
                                 onClick={() => setTodoPage(p)}>
                                    {p}
                                </div>  
                                )}
                    </div>
            </div> 
    );
}
 
export default TodoList;