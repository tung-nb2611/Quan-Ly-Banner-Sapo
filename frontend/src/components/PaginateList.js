import { Pagination } from "react-bootstrap";
import { useState } from "react";
import "../styles/PaginateList.css";

const PaginateList = ({ currentPage, setCurrentPage, pageNumber }) => {
  let items = [];

  // Ở đây currentPage có range tử 0 -> pageNumber - 1

  const changePage = (e) => {
    // any suggestion better than using e.target.textContent ?

    // isNan() is used to check if user clicks the same page number in the pagination component
    if (isNaN(e.target.textContent)) {
    } else {
      console.log(e.target.textContent);
      const page = e.target.textContent - 1;
      setCurrentPage(page);
    }
  };

  const changeToPrev = (e) => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
    }
  };

  const changeToNext = (e) => {
    if (currentPage < pageNumber - 1) {
      setCurrentPage(currentPage + 1);
    } else {
    }
  };

  const changeToFirst = (e) => {
    if (currentPage !== 0) {
      setCurrentPage(0);
    }
  };

  const changeToLast = (e) => {
    if (currentPage !== pageNumber) {
      setCurrentPage(pageNumber - 1);
    }
  };

  // Nếu có triệu trang thì có cách nào để phần này chỉ cần chạy 1 lần được không ? -- can 'useMemo' help ?
  for (let number = 1; number <= pageNumber; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage + 1}
        onClick={changePage}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>
        <Pagination.First onClick={changeToFirst} />
        <Pagination.Prev onClick={changeToPrev} />
        {items}
        <Pagination.Next onClick={changeToNext} />
        <Pagination.Last onClick={changeToLast} />
      </Pagination>
    </div>
  );
};

export default PaginateList;
