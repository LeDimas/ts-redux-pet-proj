import { userInfo } from "os";
import { FC , useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";




export interface UserListProps {
    
}
 
const UserList: FC<UserListProps> = () => {

    const {error , loading , users} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
    
    useEffect(() =>{
         fetchUsers()
    } , [])

    if(loading){
        return <h1>Loading ...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return ( 
        <div>
            <h1>Loaded</h1>
            <button onClick={() => {console.log(users)}} >test</button>
            {users.map(user => 
                <div  key={user.id}>
                    {user.name}
                </div>
            )}
        </div>
     );
}
 
export default UserList;