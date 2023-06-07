import { useEffect, React, useState } from 'react';
import { AppAPI } from '../../API/axiosAPI';

function UserReadsTable() {
  const [userBooks, setUserBooks] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await AppAPI.getUserProfile();
        // Handle the response data
        const { userBooks } = response.data.data;
        setUserBooks(userBooks);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);
  console.log(userBooks);
  return (
    <table className="table">
      <thead>
        <tr className="table-dark">
          <th scope="col">#</th>
          <th scope="col">cover</th>
          <th scope="col">Name</th>
          <th scope="col">Author</th>
          <th scope="col">Rating</th>
          <th scope="col">shelve</th>
        </tr>
      </thead>
      <tbody>
        {userBooks.map((book, index) => (
          <tr key={book.book._id}>
            {/* {console.log(book.book.cover)} */}
            <th scope="row">{index}</th>
            <td>
              <img
                src={`${AppAPI.back_Url}/${book.book.cover}`}
                alt="cover"
                style={{ width: '50px' }}
              />
            </td>
            <td>
              <a href="#">{book.book.bookName}</a>
            </td>
            <td>
              <a href="#">{`${book.book.author.firstName} ${book.book.author.lastName}`}</a>
            </td>

            <td>
              <a href="#">{book.book.rate}</a>
            </td>
            <td>
              <a href="#">{book.status}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserReadsTable;
