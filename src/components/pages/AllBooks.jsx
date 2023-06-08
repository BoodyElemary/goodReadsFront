import React ,{useEffect,useState}from 'react';
import {AppAPI} from '../../API/axiosAPI';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams} from "react-router-dom";
function AllBooks() {
    const navigate =useNavigate();
    let[books,setBooks]=useState([]);

    const viewBook = (bookID) => {
        navigate(`/books/${bookID}`);
                // navigate(`/home`);

      };
      const viewAuthor = (authorID) => {
        // navigate(`/authors/${authorID}`);
                navigate(`/home`);

      };
    const getAllBooks=async()=>
    {
        try{
            let response =await AppAPI.getAllBooks();
            setBooks(response.data.data);
            console.log(response.data);
        }
        catch(error)
        {
            console.log(error)
        }
    };
    useEffect(()=>{ getAllBooks()},[]);


return (
    <div className='col-12 container'>
          
    <div className=' my-3 wrap w-25 '>
    <h1 className='d-flex' > All Books</h1>
    </div>
 <div className="text-center my-1  d-flex flex-wrap justify-content-around gap-3 overflow-hidden " style={{ padding:"10px" ,position:"relative" }} >
       {books.map((book, index) => {
  return (
  

    <Card key={book._id} className="border border-primary rounded p-4 w-25 m-1  gap-2 right-1 overflow-hidden wrap" style={{left:"-7",position:"relative"}}>
        <div  className='w-75 h-75'>
       
            <img src= {`${AppAPI.back_Url}/${book.cover}`}alt="BookCover" className='w-100 h-100' style={{objectFit:'contain'}}  />
        </div>
      <h2 className='border rounded m-3'onClick={()=>viewBook(book._id)}>{book.bookName}</h2>
      <h2  className='border rounded m-3'onClick={()=>viewAuthor(book.author._id)}>{book.author.firstName}</h2>
    </Card>
  
  );
  
})}

      
 
</div>
</div>

  )
}

        

export default AllBooks;