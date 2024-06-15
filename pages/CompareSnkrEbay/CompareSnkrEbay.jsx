import "./CompareSnkrEbay.scss";
import { useEffect, useState } from "react";

const CompareSnkEbay = () => {
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

  console.log(ebayData);
  console.log(ebayData[0].title);
  console.log(scrapedSNKListingDataObjectParsed);

  console.log(snkdunkListingData);
  console.log(snkdunkListingData[0].price);

    //Filter

    const [snkrFilterBy, setSnkrFilterBy] = useState("All");
    const [eBayFilterBy, setEbayFilterBy] = useState("All");

    
    const updateSnkrFilter = (e) => {
      setSnkrFilterBy(e.target.value)
    };
    
    const updateEbayFilter = (e) => {
      setEbayFilterBy(e.target.value)
    };
  
    const dropdownSknrFilterItems = () => {
      if (snkrFilterBy === "All") {
        return snkdunkListingData;
      } else if (snkrFilterBy === "Ungraded") {
        return snkdunkListingData.filter((listing) => listing.evaluation === "A" || listing.evaluation === "B" || listing.evaluation === "C" || listing.evaluation === "D");
      } else if (snkrFilterBy === "Graded") {
        return snkdunkListingData.filter(listing => listing.evaluation.includes("PSA"));
      } 
    };
      
    /* return snkrFilterBy === "All" ? snkdunkListingData : snkdunkListingData.filter(listing => listing.evaluation === snkrFilterBy);
    } */
    const snkrFilteredItems = dropdownSknrFilterItems()
  
    const dropdownFilterItems = () => {
      return eBayFilterBy === "All" ? ebayData : ebayData.filter(listing => listing.condition[0].conditionDisplayName[0] === eBayFilterBy);
    }
  
    const ebayFilteredItems = dropdownFilterItems()
  
    console.log(ebayFilteredItems)

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [snkrItemsPerPage, setSnkrItemsPerPage] = useState(2);

  const [currentEbayPage, setCurrentEbayPage] = useState(1);
  const [ebayItemsPerPage, setEbayItemsPerPage] = useState(2);

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


  return (
    <div className="compare">
      <div className="compare__section">
        <div className="compare__top">
        <h1 className="compare__subtitle">SNKRDUNK Listings:</h1>
        <div className="compare__filter">
          <label className="compare__filter--label">Filter:
            <select className="compare__filter--dropdown" value={snkrFilterBy} onChange={updateSnkrFilter}>
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
                  Product type: {listing.evaluation}
                </p>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                className="pagination__button"
                key={index}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="compare__section">
      <div className="compare__top">
        <h1 className="compare__subtitle">Ebay Listings:</h1>
        <div className="compare__filter">
          <label className="compare__filter--label">Filter:
            <select className="compare__filter--dropdown" value={eBayFilterBy} onChange={updateEbayFilter}>
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
              <div key={index} className="ebay-listings__individual">
                <p className="ebay-listings__title">{listing.title}</p>
                <img
                  className="ebay-listings__image"
                  src={listing.galleryURL}
                  alt="card picture"
                />
                <p className="ebay-listings__label">
                  Type:{" "}
                  <span className="ebay-listings__data">
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
            {Array.from({ length: totalEbayPages }, (_, index) => (
              <button
                className="pagination__button"
                key={index}
                onClick={() => handleEbayPageChange(index + 1)}
                disabled={currentEbayPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSnkEbay;
