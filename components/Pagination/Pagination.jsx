import React from "react";
import { useEffect, useState } from "react";

const Pagination = (props) => {

const { filteredArray } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxpageNumberLimit, setMaxpageNumberLimit] = useState(5);
  const [minpageNumberLimit, setMinpageNumberLimit] = useState(0);

  const updateItemsPerPage = () => {
    if (window.innerWidth < 768) {
        setItemsPerPage(2);
    } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
    } else {
        setItemsPerPage(5);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredArray.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredArray.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

const handleNextBtn = () => {
    setCurrentPage(currentPage+1) 

    if(currentPage+1> maxpageNumberLimit){
        setMaxpageNumberLimit(maxpageNumberLimit+ pageNumberLimit);
        setMinpageNumberLimit(minpageNumberLimit+ pageNumberLimit);
      }
}

const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1)

    if((currentPage-1) % pageNumberLimit == 0){
        setMaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
        setMinpageNumberLimit(minpageNumberLimit - pageNumberLimit);
      }
  } 

const renderPageNumbers = Array.from({ length: totalPages }, (_, index) => {
    if(index<=maxpageNumberLimit+1 && index>=minpageNumberLimit){
      return (<button
      className="pagination__button"
      key={index}
      onClick={() => handlePageChange(index + 1)}
      disabled={currentPage === index + 1}
    >
      {index + 1}
    </button>)
    } else {
      return null;
    }
})

let pageIncrementBtn = null;
if(currentPage < maxpageNumberLimit){
  pageIncrementBtn= (<li onClick={handleNextBtn}> &hellip; </li>);
}

let pageDecreaseBtn = null;
if(currentPage > maxpageNumberLimit){
    pageDecreaseBtn= (<li onClick={handlePrevBtn}> &hellip; </li>);
}


  return <div className="pagination">
  <ul className="pageNumbers">
    <li>
      <button
      onClick={handlePrevBtn}>
        Prev</button>
    </li>
    {pageDecreaseBtn}
    {renderPageNumbers}
    {pageIncrementBtn}
    <li>
      <button
      onClick={handleNextBtn}
      >Next</button>
    </li>
  </ul>
</div>
};

export default Pagination;
