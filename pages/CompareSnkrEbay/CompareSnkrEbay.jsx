import "./CompareSnkrEbay.scss";
import { useState } from "react";

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
  console.log(scrapedSNKListingDataObjectParsed)

  console.log(snkdunkListingData);
  console.log(snkdunkListingData[0].price);

  //snkrdunk listing pagination

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = snkdunkListingData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(snkdunkListingData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //ebay listing pagination

  const [currentEbayPage, setCurrentEbayPage] = useState(1);
  const ebayItemsPerPage = 2;

  const indexOfLastEbayItem = currentEbayPage * ebayItemsPerPage;
  const indexOfFirstEbayItem = indexOfLastEbayItem - ebayItemsPerPage;
  const currentEbayItems = ebayData.slice(
    indexOfFirstEbayItem,
    indexOfLastEbayItem
  );

  const totalEbayPages = Math.ceil(ebayData.length / ebayItemsPerPage);

  const handleEbayPageChange = (pageNumber) => {
    setCurrentEbayPage(pageNumber);
  };

  return (
    <div className="compare">
      <div className="compare__section">
        <h1 className="compare__subtitle">SNKRDUNK Listings:</h1>
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
        <h1 className="compare__subtitle">Ebay Listings:</h1>
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
