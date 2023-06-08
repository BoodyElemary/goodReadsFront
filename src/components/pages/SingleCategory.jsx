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
    <div>
          
    <div>
        <h1>{category.categoryName}</h1>
    </div>
   <Card className="text-center m-1" style={{ width: '100%', border:"4px solid lightblue", borderRadius:"15px" , padding:"20px"}} >
       {category.books.map((book, index) => {
  return (
    <div key={book._id} className="border border-primary rounded p-5 w-25 m-2">
        <div>
            <img src={book.cover} alt="" />
        </div>
      <h2>{book.bookName}</h2>
      <h2>{book.author.firstName}</h2>
    </div>
  );
})}

      
    </Card>
 
    </div>

  )
}
