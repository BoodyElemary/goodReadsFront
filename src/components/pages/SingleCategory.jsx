import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AppAPI } from '../../API/axiosAPI';


export default function SingleCategory() {

    let [category,setCategory]=useState({categoryName:"",books:[]});
    const { id } = useParams();
    const getCategoryById = async () => {
      let response = await AppAPI.getCategoryByID(id);
      setCategory(response.data.data);
      console.log(response.data.data);
    };
    useEffect(() => {
        getCategoryById();
    }, []);


  return (
    <div className='col-12 container'>
          
    <div className=' my-3 wrap w-25 '>
    <h1 className='d-flex' > {category.categoryName}</h1>
    </div>
 <div className="text-center my-1  d-flex flex-wrap justify-content-around gap-3 overflow-hidden " style={{ padding:"10px" ,position:"relative" }} >
       {category.books.map((book, index) => 
       {
  return (
  

    <Card key={book._id} className="border border-primary rounded p-4 w-25 m-1  gap-2 right-1 overflow-hidden wrap" style={{left:"-7",position:"relative"}}>
        <div  className='w-75 h-75'>
       
            <img src= {`${AppAPI.back_Url}/${book.cover}`}alt="BookCover" className='w-100 h-100' style={{objectFit:'contain'}}  />
        </div>
      <h2 className='border rounded m-3   '>{book.bookName}</h2>
      <h2  className='border rounded m-3  '>{book.author.firstName}</h2>
    </Card>
  
  );
  
})}

      
 
</div>
</div>

  )

}
