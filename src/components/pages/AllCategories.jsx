import React ,{useEffect,useState}from 'react';
import {AppAPI} from '../../API/axiosAPI';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams} from "react-router-dom";
function AllCategories() {
    const navigate =useNavigate();
    let[categories,setCategories]=useState([]);

    const viewCategory = (CategoryID) => {
        navigate(`/categories/${CategoryID}`);
                // navigate(`/home`);

      };
    const getAllCategories=async()=>
    {
        try{
            let response =await AppAPI.getAllCategories();
            setCategories(response.data.data);
            console.log(response.data);
        }
        catch(error)
        {
            console.log(error)
        }
    };
    useEffect(()=>{ getAllCategories()},[]);


return (
    <div className='col-12 container'>
          
    <div className=' my-3 wrap w-100 '>
    <h1 className='d-flex' > Books Categories</h1>
    </div>
 <div className="text-center my-1  d-flex flex-wrap justify-content-around gap-3 overflow-hidden " style={{ padding:"10px" ,position:"relative" }} >
       {categories.map((category ,index) => {
  return (
  

    <Card key={category._id} className="border border-primary rounded p-4 w-25 m-1  gap-2  overflow-hidden wrap" style={{ borderRadius:"50%"}}>
        
      <h2 className=' ' onClick={()=>viewCategory(category._id)}>{category?.categoryName}</h2>
     
    </Card>
  
  );
  
})}

      
 
</div>
</div>

  )
}



export default AllCategories;
