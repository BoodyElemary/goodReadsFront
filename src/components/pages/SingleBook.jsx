import { React, useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AppAPI } from '../../API/axiosAPI';
import { useParams, useNavigate } from 'react-router-dom';

function SingleBook() {
  const [singleBook, setSingleBook] = useState({
    bookName: '',
    cover: '',
    category: { categoryName: '' },
    author: { firstName: '', lastName: '' },
    user_review: [{ review: '', userID: { firstName: '', lastName: '' } }],
  });
  const [rating, setRating] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [isReviewTextValid, setIsReviewTextValid] = useState(true);
  const [bookRate, setBookRate] = useState(0);
  const [userId, setUserId] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  const { id } = useParams();
  const navigate = useNavigate();

  const viewBook = (bookID) => {
    navigate(`/books/${bookID}`);
    // navigate(`/home`);
  };

  const viewAuthor = (authorID) => {
    // navigate(`/authors/${authorID}`);
    navigate(`/home`);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
    setIsReviewTextValid(true);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (reviewText.trim() === '') {
      setIsReviewTextValid(false);
      return;
    }

    try {
      // Submit review logic
      const newReview = {
        review: reviewText,
        userID: {
          firstName: 'assas',
          lastName: 'dssdd',
        },
      };
      console.log(id);
      await AppAPI.addReview(id, reviewText);

      // Refetch the book data to include the latest comments
      const response = await AppAPI.getBookByID(id);
      const updatedSingleBook = { ...response.data.data };
      setSingleBook(updatedSingleBook);

      setReviewText('');
      setIsFormVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await AppAPI.getUserProfile();
        const { userBooks } = response.data.data;
        setUserId(response.data.data._id);
        // console.log(userBooks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();

    const fetchBookData = async () => {
      try {
        const response = await AppAPI.getBookByID(id);
        const singleBook = { ...response.data.data };
        setSingleBook(singleBook);
        console.log(singleBook.user_rate);
        const totalRatings = singleBook.user_rate.length;
        const totalRate = singleBook.user_rate.reduce(
          (sum, rating) => sum + rating.rate,
          0,
        );
        const averageRate = totalRate / totalRatings;
        // console.log(averageRate);

        setBookRate(averageRate);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookData();
  }, []);

  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };

  // Optional callback functions
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value, index) => console.log(value, index);
  // console.log(singleBook);
  // console.log(userId);

  return (
    <div className="container">
      <div key={singleBook._id}>
        <div className=" mt-4 d-flex gap-4">
          <div className="d-flex flex-column col-3 gap-3 ">
            <img
              src={`${AppAPI.back_Url}/${singleBook.cover}`}
              alt="Book Cover"
              style={{ height: '350px' }}
            />
            <div className="">
              <select
                className="form-select"
                aria-label="Default select example"
              >
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
            <h1 onClick={() => viewBook(singleBook._id)}>
              {singleBook?.bookName}
            </h1>
            <h4 onClick={() => viewAuthor(singleBook.author._id)}>
              {singleBook.author?.firstName} {singleBook.author?.lastName}
            </h4>
            <h5>
              <span className="badge bg-danger">
                {singleBook.category?.categoryName}
              </span>
            </h5>
            <Rating
              readonly
              initialValue={bookRate}
              /* Available Props */
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-success">+</button>
          </div>
        </div>
        <div>
          <h4 className="">Reviews</h4>
          {!isFormVisible && (
            <button className="btn btn-warning" onClick={toggleFormVisibility}>
              Add Review
            </button>
          )}

          {isFormVisible && (
            <form onSubmit={handleSubmitReview}>
              <div className="mb-3">
                <label htmlFor="reviewText" className="form-label">
                  Write your review
                </label>
                <textarea
                  className={`form-control ${
                    !isReviewTextValid ? 'is-invalid' : ''
                  }`}
                  id="reviewText"
                  rows="3"
                  value={reviewText}
                  onChange={handleReviewTextChange}
                ></textarea>
                {!isReviewTextValid && (
                  <div className="invalid-feedback">
                    Please enter a valid review.
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary mx-2"
                onClick={toggleFormVisibility}
              >
                Cancel
              </button>
            </form>
          )}

          <div>
            {singleBook.user_review.map((review) => {
              return (
                <div key={review._id}>
                  <div className="d-flex justify-content-between">
                    <h5>
                      {review.userID?.firstName} {review.userID?.lastName}
                    </h5>
                  </div>
                  <p>{review.review}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
