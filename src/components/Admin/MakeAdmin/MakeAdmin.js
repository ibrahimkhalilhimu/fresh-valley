import React from 'react';
import { useForm} from "react-hook-form";
import SideBar from '../SideBar/SideBar';
const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin',{
            method:'POST',
            headers:{ 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           
          if (data) {
           
            alert('Admin make successfully')
          }
        })
    
    };
    return (
        <div className="makeAdmin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar/>
                    </div>
                    <div className="col-md-9">
                        <h4 className="pt-4">Make Admin</h4>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-5">
                        <h4>Email</h4>
                        <input type="email" ref={register({ required: true })} name="email" placeholder="@gmail.com" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                        <button type="submit" className="btn bg-success text-white">Submit</button>
                    </div>
                </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;