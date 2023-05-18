import React from "react";

function UserReadsTable() {
  return (
    <table class="table">
      <thead>
        <tr className="table-dark">
          <th scope="col">#</th>
          <th scope="col">cover</th>
          <th scope="col">Name</th>
          <th scope="col">Author</th>
          <th scope="col">AvgRate</th>
          <th scope="col">Rating</th>
          <th scope="col">shelve</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            <img
              src="https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg"
              alt=""
              style={{ width: "50px" }}
            />
          </td>
          <td>
            <a href="#">Harry potter</a>
          </td>
          <td>
            <a href="#">Harry potter</a>
          </td>
          <td>
            <a href="#">Harry potter</a>
          </td>
          <td>
            <a href="#">Harry potter</a>
          </td>
          <td>
            <a href="#">Harry potter</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserReadsTable;
