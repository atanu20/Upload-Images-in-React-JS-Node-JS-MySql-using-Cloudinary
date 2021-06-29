import React ,{useState} from 'react';

import './App.css';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState([]);

  const onSub= (e)=>{
    let formData=new FormData();
    formData.append("file",image[0])
     formData.append("upload_preset","blogpost")

   

   
     axios.post("https://api.cloudinary.com/v1_1/du9emrtpi/image/upload",formData
     ).then((response)=>{
      const fileName=response.data.public_id;
      console.log(fileName)
      axios.post("http://localhost:5000/upload",{
        name:name,
      email:email,
      image:fileName

      });


     });

   


    
    e.preventDefault()
   
  }

  return (
    <>
    <div className="box">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto" id="formdata">
          <form   onSubmit={onSub} >
                        <div className="form-group">
                            <label htmlFor="">Name:</label>
                            <input type="text" className="form-control" placeholder="Enter name" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
                          </div>
                        <div className="form-group">
                          <label htmlFor="">Email address:</label>
                          <input type="email" className="form-control" placeholder="Enter email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Upload Profile Image:</label>
                          <input type="file" name="file" className="form-control"   onChange={(e)=>setImage(e.target.files)}  required />
                        </div>
                       
                      
                        
                        <button type="submit" className="btn btn-primary" >Submit</button>
                      </form>
          </div>
        </div>
      </div>
    </div>


   
     

    </>
  )
}

export default App;



