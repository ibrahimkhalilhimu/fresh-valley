import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './AddProduct.css'
const AddProduct = () => {
    const [info,setInfo] = useState({})
    const [file,setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = e => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);

        fetch('https://pure-hollows-18299.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
      e.preventDefault();
    }
    return (
        <div className="addProduct">
         <div className="container-fluid">
         <div className="row">
                <div className="col-md-3">
                    <SideBar/>
                </div>
              <div className="col-md-9">
                    <div className="pt-4">
                    <h4>Add Product</h4>
                    </div>
                  <div className="backgroundColor">
                  <div className="addProduct-from ">
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Product Name and Wight</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Product Name and Wight" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Add Price</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Add Price" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control text-success" id="exampleFormControlFile1" name="file"  placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
                    </div>
                  </div>
                </div>
              </div>
         </div>
        </div>
    );
};

export default AddProduct;