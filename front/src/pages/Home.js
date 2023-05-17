import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";



export  function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();

    },[]);

    const fetchAllUsers = ()=> {
        http.get('./users').then(res=>{
            setUsers(res.data);
        })
    }

    const deleteUser = (id)=> {
        http.delete('./users/'+id).then(res=>{
            fetchAllUsers();
        })
    }

    

    return (
        <div>
            <h2>Users listing ...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.name}</td>
                            <td>{user.email} </td>
                            <td>
                                <Link className="btn btn-info" to={{pathname:"/Edit/"+user.id}}>Edit</Link>
                                <Link className="btn btn-primary" to={{pathname:"/View/"+user.id}}>View</Link>
                                <button type="button" className="btn btn-danger" onClick={()=>{deleteUser(user.id)}} >Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}