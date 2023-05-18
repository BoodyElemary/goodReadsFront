import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent() {
  return (
    <div>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
