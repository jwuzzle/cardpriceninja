import "./CompareSnkrEbay.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

const CompareSnkEbay = () => {
  const navigate = useNavigate();
  const scrapedDataObjectFromStorage = sessionStorage.getItem("scraped data");
  const scrapedDataObjectParsed = JSON.parse(scrapedDataObjectFromStorage);

  const scrapedSNKListingDataObjectFromStorage =
    sessionStorage.getItem("snk listing data");
  const scrapedSNKListingDataObjectParsed = JSON.parse(
    scrapedSNKListingDataObjectFromStorage
  );

  const ebayDataObjectFromStorage = sessionStorage.getItem("ebay data");
  const ebayDataObjectParsed = JSON.parse(ebayDataObjectFromStorage);

  const snkrdunkData = scrapedDataObjectParsed;
  const snkdunkListingData = scrapedSNKListingDataObjectParsed;
  const ebayData = ebayDataObjectParsed;

  //Filter

  const [snkrFilterBy, setSnkrFilterBy] = useState("All");
  const [eBayFilterBy, setEbayFilterBy] = useState("All");

  const updateSnkrFilter = (e) => {
    setSnkrFilterBy(e.target.value);
  };

  const updateEbayFilter = (e) => {
    setEbayFilterBy(e.target.value);
  };

  const dropdownSknrFilterItems = () => {
    if (snkrFilterBy === "All") {
      return snkdunkListingData;
    } else if (snkrFilterBy === "Ungraded") {
      return snkdunkListingData.filter(
        (listing) =>
          listing.evaluation === "A" ||
          listing.evaluation === "B" ||
          listing.evaluation === "C" ||
          listing.evaluation === "D"
      );
    } else if (snkrFilterBy === "Graded") {
      return snkdunkListingData.filter((listing) =>
        listing.evaluation.includes("PSA")
      );
    }
  };

  const snkrFilteredItems = dropdownSknrFilterItems();

  const dropdownFilterItems = () => {
    if (!ebayData) return [];
    if (eBayFilterBy === "All") {
      return ebayData;
    }ß
    return ebayData.filter(
      (listing) =>
        listing.condition?.[0]?.conditionDisplayName?.[0] === eBayFilterBy
    );
  };
  const ebayFilteredItems = dropdownFilterItems();

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [snkrItemsPerPage, setSnkrItemsPerPage] = useState(2);

  const [currentEbayPage, setCurrentEbayPage] = useState(1);
  const [ebayItemsPerPage, setEbayItemsPerPage] = useState(2);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxpageNumberLimit, setMaxpageNumberLimit] = useState(5);
  const [minpageNumberLimit, setMinpageNumberLimit] = useState(0);

  const updateItemsPerPage = () => {
    if (window.innerWidth < 768) {
      setSnkrItemsPerPage(2);
      setEbayItemsPerPage(2);
    } else if (window.innerWidth < 1280) {
      setSnkrItemsPerPage(4);
      setEbayItemsPerPage(4);
    } else {
      setSnkrItemsPerPage(5);
      setEbayItemsPerPage(5);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  //snkrdunk listing pagination

  const indexOfLastItem = currentPage * snkrItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - snkrItemsPerPage;
  const currentItems = snkrFilteredItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(snkrFilteredItems.length / snkrItemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderSknrPageNumbers = Array.from(
    { length: totalPages },
    (_, index) => {
      if (index < maxpageNumberLimit + 1 && index >= minpageNumberLimit - 1) {
        return (
          <button
            className="pagination__button"
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        );
      } else {
        return null;
      }
    }
  );

  const handleNextBtnSnkr = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxpageNumberLimit) {
      setMaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setMinpageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtnSnkr = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setMinpageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };

  //ebay listing pagination

  const indexOfLastEbayItem = currentEbayPage * ebayItemsPerPage;
  const indexOfFirstEbayItem = indexOfLastEbayItem - ebayItemsPerPage;
  const currentEbayItems = ebayFilteredItems.slice(
    indexOfFirstEbayItem,
    indexOfLastEbayItem
  );

  const totalEbayPages = Math.ceil(ebayFilteredItems.length / ebayItemsPerPage);

  const handleEbayPageChange = (pageNumber) => {
    setCurrentEbayPage(pageNumber);
  };

  const goToEbayListing = (url) => {
    window.open(url, "_blank");
  };

  const handleNextBtn = () => {
    setCurrentEbayPage(currentEbayPage + 1);

    if (currentEbayPage + 1 > maxpageNumberLimit) {
      setMaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setMinpageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentEbayPage(currentEbayPage - 1);

    if ((currentEbayPage - 1) % pageNumberLimit == 0) {
      setMaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setMinpageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };

  const renderEbayPageNumbers = Array.from(
    { length: totalEbayPages },
    (_, index) => {
      if (index < maxpageNumberLimit + 1 && index >= minpageNumberLimit - 1) {
        return (
          <button
            className="pagination__button"
            key={index}
            onClick={() => handleEbayPageChange(index + 1)}
            disabled={currentEbayPage === index + 1}
          >
            {index + 1}
          </button>
        );
      } else {
        return null;
      }
    }
  );

  let pageIncrementBtn = null;
  if (currentEbayPage < maxpageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
  }

  let pageDecreaseBtn = null;
  if (currentEbayPage >= maxpageNumberLimit) {
    pageDecreaseBtn = <li onClick={handlePrevBtn}> &hellip; </li>;
  }

  return (
    <div className="compare">
      <div className="compare__text">
        <h1 className="compare__text--pageheader">Card Listings</h1>
        <p className="compare__text--subheader">
          You can easily view and compare listings for your favorite cards from
          both SNKRDunk and eBay. Whether you're looking for graded or ungraded
          cards, we've got you covered.
        </p>
      </div>
      <div className="compare__section">
        <div className="compare__top">
          <h1 className="compare__subtitle">SNKRDUNK Listings:</h1>
          <div className="compare__filter">
            <label className="compare__filter--label">
              Filter:
              <select
                className="compare__filter--dropdown"
                value={snkrFilterBy}
                onChange={updateSnkrFilter}
              >
                <option>All</option>
                <option>Ungraded</option>
                <option>Graded</option>
              </select>
            </label>
          </div>
        </div>
        <div className="compare__section-listings">
          <div className="snkr-listings">
            {currentItems.map((listing, index) => (
              <div key={index} className="snkr-listings__individual">
                <img
                  className="snkr-listings__image"
                  src={listing.image}
                  alt="card picture"
                />
                <p className="snkr-listings__price">Price: {listing.price}</p>
                <p className="snkr-listings__evaluation">
                  Product type:{" "}
                  <span className="snkr-listings__evaluation--style">
                    {listing.evaluation}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="pagination">
            <ul className="pagination__pageNumbers">
              <li>
                <button
                  className="pagination__controls"
                  onClick={handlePrevBtnSnkr}
                  disabled={currentPage == 1 ? true : false}
                >
                  Prev
                </button>
              </li>
              {renderSknrPageNumbers}
              <li>
                <button
                  className="pagination__controls"
                  onClick={handleNextBtnSnkr}
                  disabled={currentPage == totalPages ? true : false}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="compare__section">
        <div className="compare__top">
          <h1 className="compare__subtitle">Ebay Listings:</h1>
          <div className="compare__filter">
            <label className="compare__filter--label">
              Filter:
              <select
                className="compare__filter--dropdown"
                value={eBayFilterBy}
                onChange={updateEbayFilter}
              >
                <option>All</option>
                <option>Ungraded</option>
                <option>Graded</option>
              </select>
            </label>
          </div>
        </div>
        <div className="compare__section-listings">
          <div className="ebay-listings">
            {currentEbayItems.map((listing, index) => (
              <div
                key={index}
                className="ebay-listings__individual"
                onClick={() => {
                  goToEbayListing(listing.viewItemURL);
                }}
              >
                <p className="ebay-listings__title">{listing.title}</p>
                <img
                  className="ebay-listings__image"
                  src={listing.galleryURL}
                  alt="card picture"
                />
                <p className="ebay-listings__label--type">
                  Type:{" "}
                  <span className="ebay-listings__data--type">
                    {listing.condition[0].conditionDisplayName}
                  </span>
                </p>
                <p className="ebay-listings__label">
                  Price:{" "}
                  <span className="ebay-listings__data">
                    ${listing.sellingStatus[0].currentPrice[0].__value__}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="pagination">
            <ul className="pagination__pageNumbers">
              <li>
                <button
                  className="pagination__controls"
                  onClick={handlePrevBtn}
                  disabled={currentEbayPage == 1 ? true : false}
                >
                  Prev
                </button>
              </li>
              {pageDecreaseBtn}
              {renderEbayPageNumbers}
              {pageIncrementBtn}
              <li>
                <button
                  className="pagination__controls"
                  onClick={handleNextBtn}
                  disabled={currentEbayPage == totalEbayPages ? true : false}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="compare__disclaimer">
          PLEASE NOTE: This page may not provide all listings on each site.
          Please search on SNKRDUNK and EBAY for a full view of listings
          available to you on their platforms.
        </p>
      </div>
    </div>
  );
};

export default CompareSnkEbay;
