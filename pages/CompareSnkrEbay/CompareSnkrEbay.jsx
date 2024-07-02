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
    }
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
    if (window.innerWidth < 400) {
      setSnkrItemsPerPage(1);
      setEbayItemsPerPage(1);
    } else if (window.innerWidth < 650) {
      setSnkrItemsPerPage(2);
      setEbayItemsPerPage(2);
    } else if (window.innerWidth < 830) {
      setSnkrItemsPerPage(3);
      setEbayItemsPerPage(3);
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

  //compare select

  const [compareArray, setCompareArray] = useState([]);
  const [compareEbayArray, setCompareEbayArray] = useState([]);
  const [compareButton, setCompareButton] = useState(false);
  const [submitCompare, setSubmitCompare] = useState(false);

  const clickSnkrDunkListing = (listing) => {
    if (compareButton === false) {
      return window.open(`https://snkrdunk.com${listing.snkrurl}`, "_blank");
    }
  };

  const goToEbayListing = (url) => {
    if (compareButton === false) {
      return window.open(url, "_blank");
    }
  };

  const snkrdunkEvaluationConvert = (value) => {
    if (value === "A" || value === "B" || value === "C" || value === "D") {
      return "Ungraded";
    } else if (value.includes("PSA")) {
      return "Graded";
    }
  };

  const removeUSFromSNKRPrice = (value) => {
    if (value.startsWith("US ")) {
      return value.substring(3);
    }
    return value;
  };

  const toggleItem = (listing) => {
    setCompareArray((prevSelectedItems) => {
      const isItemInArray = prevSelectedItems.some(
        (item) => item.image === listing.image
      );

      if (isItemInArray) {
        return prevSelectedItems.filter((item) => item.image !== listing.image);
      } else {
        return [
          {
            price: removeUSFromSNKRPrice(listing.price),
            image: listing.image,
            type: snkrdunkEvaluationConvert(listing.evaluation),
            url: listing.snkrurl,
          },
          ...prevSelectedItems,
        ];
      }
    });
  };

  const isItemSelected = (listing) => {
    return compareArray.some((item) => item.image === listing.image);
  };

  const toggleEbayItem = (listing) => {
    const itemIdStr = listing.itemId.join();
    setCompareEbayArray((prevSelectedItems) => {
      const isEbayItemInArray = prevSelectedItems.some(
        (item) => item.itemId === itemIdStr
      );

      if (isEbayItemInArray) {
        return prevSelectedItems.filter((item) => item.itemId !== itemIdStr);
      } else {
        return [
          {
            itemId: itemIdStr,
            price: listing.sellingStatus[0].currentPrice[0].__value__,
            image: listing.galleryURL.toString(),
            type: listing.condition[0].conditionDisplayName,
            name: listing.title,
            url: listing.viewItemURL,
            //add more information like buy it now vs auction
          },
          ...prevSelectedItems,
        ];
      }
    });
  };

  const isEbayItemSelected = (listing) => {
    const itemIdEbayStr = listing.itemId.join();
    console.log(itemIdEbayStr);
    console.log(
      "Item ID from compareEbayArray:",
      compareEbayArray.some((item) => item.itemId.toString())
    );
    console.log("Item ID from listing:", itemIdEbayStr);
    return compareEbayArray.some(
      (item) => item.itemId.toString() === itemIdEbayStr
    );
  };

  console.log(compareArray);
  console.log(compareEbayArray);

  console.log("compare button:", compareButton);
  console.log("submit button:", submitCompare);

  const compareSubmit = () => {
    setSubmitCompare(false);
    const stringifiedSnkrCompareListings = JSON.stringify(compareArray);
    sessionStorage.setItem(
      "snkr listings for compare",
      stringifiedSnkrCompareListings
    );

    const stringifiedEbayCompareListings = JSON.stringify(compareEbayArray);
    sessionStorage.setItem(
      "ebay listings for compare",
      stringifiedEbayCompareListings
    );

    navigate("/compare-listings");
  };

  return (
    <div className="compare">
      <div className="compare__header-top">
        <div className="compare__text">
          <h1 className="compare__text--pageheader">Card Listings</h1>
          <p className="compare__text--subheader">
            You can easily view and compare listings for your favorite cards
            from both SNKRDunk and eBay. Whether you're looking for graded or
            ungraded cards, we've got you covered.
          </p>
        </div>
          {!compareButton ? (
            <div className="compare__button">
            <button
              className="compare__button--compare"
              onClick={() => {
                setCompareButton(!compareButton);
                setSubmitCompare(!submitCompare);
              }}
            >
              Select Listings to Compare
            </button></div>
          ) : undefined}
          {submitCompare ? (
            <div className="compare__button">
              <button
              className="compare__button--submit"
              onClick={() => {
                compareSubmit();
                setCompareButton(!compareButton);
              }}
            >
              Submit
            </button>
            <button
              className="compare__button--cancel"
              onClick={() => {
                setCompareButton(!compareButton);
                setSubmitCompare(!submitCompare);
              }}
            >
              Cancel
            </button>
           
            <p className="compare__button--help">Select up to 5 listings below</p></div>
          ) : undefined}
      </div>
      <div className="compare__section">
        <div className="compare__top">
          <h1 className="compare__subtitle">SNKRDUNK Listings</h1>
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
              <div
                key={index}
                className={compareButton === false ? "snkr-listings__individual" : "snkr-listings__individual card-expand"}
                onChange={() => {
                  clickSnkrDunkListing(listing);
                }}
              >
                {compareButton === true ? (
                  <input
                    key={index}
                    name="compare"
                    type="checkbox"
                    onChange={() => {
                      toggleItem(listing);
                    }}
                    label="compare"
                    className="compare-box"
                    checked={isItemSelected(listing)}
                  />
                ) : null}
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
          <h1 className="compare__subtitle">Ebay Listings</h1>
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
                className={compareButton === false ? "ebay-listings__individual" : "ebay-listings__individual card-expand"}
                onClick={() => {
                  goToEbayListing(listing.viewItemURL);
                }}
              >
                {compareButton === true ? (
                  <input
                    key={index}
                    name="compare"
                    type="checkbox"
                    onChange={(e) => {
                      toggleEbayItem(listing);
                    }}
                    label="compare"
                    className="compare-box"
                    checked={isEbayItemSelected(listing)}
                  />
                ) : null}
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
