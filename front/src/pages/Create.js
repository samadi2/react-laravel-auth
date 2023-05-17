import { useState } from "react" ;
import http from "../http";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const navigate = useNavigate();
    const [inputs ,setInputs]= useState({});
    const handlChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]:value}))

    }

    const submitForm =() => {
        http.post('/users', inputs).then((res)=> {
            navigate('/');
        })
    }
    return (
        <div>
            <h2>New User</h2>
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

                        <label>Password</label>
                        <input type="password" name="password" className="form-control mb-2" 
                            value={inputs.password || ''}
                            onChange={handlChange}     
                        />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}