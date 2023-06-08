import { React, useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AppAPI } from '../../API/axiosAPI';
import { useParams } from 'react-router-dom';

function SingleBook() {
  const [singleBook, setSingleBook] = useState([]);
  const [rating, setRating] = useState(5);
  const { id } = useParams();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await AppAPI.getBookByID(id);
        const singleBook = { ...response.data.data };
        setSingleBook(singleBook);
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
  return (
    <div className="container">
      <div className=" mt-4 d-flex gap-4">
        <div className="d-flex flex-column col-3 gap-3 ">
          <img
            src="https://www.kindacode.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-27-at-16.20.27.jpg?ezimgfmt=rs%3Adevice%2Frscb5-1"
            alt=""
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
          <h1>Book Name</h1>
          <a href="#">author Name</a>

          <h5>
            <span className="badge bg-danger">CategoryName</span>
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
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
