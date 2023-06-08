import { React, useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AppAPI } from '../../API/axiosAPI';
import { useParams,useNavigate } from 'react-router-dom';

function SingleBook() {
  const [singleBook, setSingleBook] = useState({
    bookName:"",
    cover:"",
    category:{categoryName:""},
    author:{firstName:"",lastName:""},
    user_review:[{review:"",userID:{firstName:"",lastName:""}}]
  });
  const [rating, setRating] = useState(5);
  const { id } = useParams();
  const navigate =useNavigate();
  let userReviews=[];

  const viewBook = (bookID) => {
    navigate(`/books/${bookID}`);
            // navigate(`/home`);

  };

  const viewAuthor = (authorID) => {
    // navigate(`/authors/${authorID}`);
            navigate(`/home`);

  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await AppAPI.getBookByID(id);
        const singleBook = { ...response.data.data };
        setSingleBook(singleBook);
        console.log(singleBook);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value, index) => console.log(value, index);
  
  // userReviews=[singleBook.user_review];
  return (


    <div className="container">
      {/* {singleBook.map((item,index)=>
      {
        {console.log(singleBook);}
          return( */}
            <div key={singleBook._id}>
                <div className=" mt-4 d-flex gap-4">
                <div className="d-flex flex-column col-3 gap-3 ">
                  <img
                    src={`${AppAPI.back_Url}/${singleBook.cover}`}
                    alt="Book Cover"
                    className=""
                  />
                  <div className="">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="mt-3">
                      <Rating
        
                      /* Available Props */
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start gap-3">
             
                  <h1 onClick={()=>viewBook(singleBook._id)}>{singleBook?.bookName}</h1>
                  <h4 onClick={()=>viewAuthor(singleBook.author._id)}>{singleBook.author?.firstName} {singleBook.author?.lastName}</h4>
        
                  <h5>
                    <span className="badge bg-danger">{singleBook.category?.categoryName}</span>
                  </h5>
                  <Rating
                    readonly
                    initialValue={4}
                    /* Available Props */
                  />
                </div>
                <div className="mt-2">
                  <button className="btn btn-success">+</button>
                </div>
              </div>
        
              <div>
                <div className="card mt-3">
                  <div className="card-header p-4 ">
                    <h5 className="card-title">Reviews</h5>
                    {/* {console.log(singleBook.user_review)}; */}
                    <div>
                    {singleBook?.user_review.map((item,index)=>
                    {
                      // {console.log(item.review)};
                      return(
                        <p className="card-text" key={item._id}>
                          <p>{item?.review}</p>
                         
                       
                      
                      </p>
                      );
                    }
                     )}
                    </div>
                   
                  
                  </div>
                </div>
              </div>
              </div>

          
          {/* );
      })}
      */}
    </div>
  
  
  );
}

export default SingleBook;
