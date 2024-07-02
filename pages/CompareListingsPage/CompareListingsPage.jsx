import React from "react";
import "./CompareListingsPage.scss";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

const CompareListingsPage = () => {
  const selectedSnkrListingsToCompareFromStorage = sessionStorage.getItem(
    "snkr listings for compare"
  );
  const selectedSnkrListings = JSON.parse(
    selectedSnkrListingsToCompareFromStorage
  );

  const selectedEbayListingsToCompareFromStorage = sessionStorage.getItem(
    "ebay listings for compare"
  );
  const selectedEbayListings = JSON.parse(
    selectedEbayListingsToCompareFromStorage
  );

  console.log(selectedSnkrListings);
  console.log(selectedEbayListings);
  console.log(selectedSnkrListings[0].image);
  console.log(selectedEbayListings[0].image);

  const tableHeaders = [
    "Site",
    "Picture",
    "Type of Card",
    "Price",
    "Link to Posting",
  ];

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="compare-listing-page">
      <div>
        <button className="back-button" onClick={handleBackClick}>Go Back to Listings</button>
      </div>
      <div>
        <h1 className="compare-listing-page__header">Compare selected items</h1>
      </div>
      <Table
        tableHeaders={tableHeaders}
        tableSnkrData={selectedSnkrListings}
        tableEbayData={selectedEbayListings}
      />
    </div>
  );
};

export default CompareListingsPage;
