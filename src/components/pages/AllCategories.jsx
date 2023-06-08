import React ,{useEffect,useState}from 'react';
import {AppAPI} from '../../API/axiosAPI';
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
  <div className='container p-5 rounded'>

     <h1  className=''>BOOKS Categories</h1>

        <section className='d-flex justify-content-around  gap-5 flex-wrap py-5'>

        {
            
        categories.map((category ,index) => (
                     <div key={category._id} className=' border border-primary rounded p-5 w-25 '>

                        <h2 className='' onClick={()=>viewCategory(category._id)}>{category?.categoryName}</h2>

                    </div>

                      ))}

        </section>




     </div>
    )

}



export default AllCategories;
