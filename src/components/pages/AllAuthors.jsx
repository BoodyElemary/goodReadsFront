import React ,{useEffect,useState}from 'react';
import {AppAPI} from '../../API/axiosAPI';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams} from "react-router-dom";
function AllAuthors() {
    const navigate =useNavigate();
    let[authors,setAuthors]=useState([]);

  
      const viewAuthor = (authorID) => {
        // navigate(`/authors/${authorID}`);
                navigate(`/home`);

      };
    const getAllAuthors=async()=>
    {
        try{
            let response =await AppAPI.getAllAuthors();
           setAuthors(response.data.data);
            console.log(response.data);
        }
        catch(error)
        {
            console.log(error)
        }
    };
    useEffect(()=>{ getAllAuthors()},[]);


return (
    <div className='col-12 container'>
          
    <div className=' my-3 wrap w-25 '>
    <h1 className='d-flex' > All Authors</h1>
    </div>
 <div className="text-center my-1  d-flex flex-wrap justify-content-around gap-3 overflow-hidden " style={{ padding:"10px" ,position:"relative" }} >
       {authors.map((author, index) => {
  return (
  

    <Card key={author._id} className="border border-primary rounded p-4 w-25 m-1  gap-2 right-1 overflow-hidden wrap" style={{left:"-7",position:"relative"}}>
        <div  className='w-75 h-75'>
       
            <img src= {`${AppAPI.back_Url}/${author.image}`}alt="BookCover" className='w-100 h-100' style={{objectFit:'contain'}}  />
        </div>
      <h2  className='border rounded m-3'onClick={()=>viewAuthor(author._id)}>{author.firstName}{author.lastName}</h2>
    </Card>
  
  );
  
})}

      
 
</div>
</div>

  )
}

        

export default AllAuthors;