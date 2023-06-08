import { useEffect, React, useState } from 'react';
import { AppAPI } from '../../API/axiosAPI';

function UserReadsTable({ activeItem }) {
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await AppAPI.getUserProfile();
        const { userBooks } = response.data.data;
        setUserBooks(userBooks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChangeStatus = async (e, bookId) => {
    const newStatus = e.target.value;
    setUserBooks((prevUserBooks) =>
      prevUserBooks.map((book) =>
        book.book?._id === bookId ? { ...book, status: newStatus } : book,
      ),
    );

    try {
      const data = { book: bookId, status: newStatus };
      console.log(data);
      await AppAPI.editBookStatus(data);
      console.log('Book status updated successfully');
    } catch (error) {
      console.error('Error updating book status:', error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    setUserBooks((prevUserBooks) =>
      prevUserBooks.filter((book) => book.book?._id !== bookId),
    );

    try {
      await AppAPI.removeBookFromUserList(bookId);
      console.log('Book deleted successfully');
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const filteredBooks =
    activeItem === 'all'
      ? userBooks
      : userBooks.filter((book) => book.status === activeItem);

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
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        {filteredBooks.map((book, index) => (
          <tr key={book.book?._id} className="text-start align-items-center">
            <th scope="row">{index + 1}</th>
            <td>
              <img
                src={`${AppAPI.back_Url}/${book.book?.cover}`}
                alt="cover"
                style={{ width: '50px' }}
              />
            </td>
            <td>
              <a href="#">{book.book?.bookName}</a>
            </td>
            <td>
              <a href="#">
                {`${book.book?.author?.firstName} ${book.book?.author?.lastName}`}
              </a>
            </td>
            <td>
              <a href="#">{book.book?.rate}</a>
            </td>
            <td>
              <select
                className="form-select"
                value={book.status}
                onChange={(e) => handleChangeStatus(e, book.book?._id)}
              >
                <option value="read">Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
              </select>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteBook(book.book?._id)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserReadsTable;
