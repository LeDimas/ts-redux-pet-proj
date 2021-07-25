import { FC } from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

export interface AppProps {
  
}
 
const App: FC<AppProps> = () => {
  return ( 
    <div>
      <UserList/>
      <hr />
      <TodoList />
    </div>

   );
}
 
export default App;