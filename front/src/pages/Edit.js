import { useEffect, useState } from "react" ;
import http from "../http";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs ,setInputs]= useState({});
    const {id} = useParams();

    useEffect(() => {
        fetchUser()
    }, []);    

        
    const fetchUser = () => {
        http.get('/users/'+id+'/Edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }    

    const handlChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]:value}))

    }

    const submitForm =() => {
        http.put('/users/'+id, inputs).then((res)=> {
            navigate('/');
        })
    }
    return (
        <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2" 
                            value={inputs.name || ''}
                            onChange={handlChange} 
                        />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2" 
                            value={inputs.email || ''}
                            onChange={handlChange} 
                        />

                       

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}