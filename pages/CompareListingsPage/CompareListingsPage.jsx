import React from "react";
import "./CompareListingsPage.scss";
import Table from "../../components/Table/Table";
import TableRows from "../../components/Table/TableRows";

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

  return (
    <div className="compare-listing-page">
      <div className="compare-listing-page__header">
        <h1>Compare selected items</h1>
      </div>
      <Table
        tableHeaders={tableHeaders}
        tableSnkrData={selectedSnkrListings}
        tableEbayData={selectedEbayListings}
      />
    </div>

    /* <div className="compare-page">
      <div className="compare-page__back">
        <button className="compare-paeg__back--button">Back</button>
      </div>
      <div className="compare-page__header">
        <h1 className="compare-page__header--title">Chosen Listings at a Glance</h1>
      </div>
      <div className="table">
        <div className="table__headers">
          <div className="table__headers--site">
            <p>Site</p>
          </div>
          <div className="table__headers--image">
            <p>Picture</p>
          </div>
          <div className="table__headers--price">
            <p>Price</p>
          </div>
          <div className="table__headers--type">
          <p>Type of Card</p>
          </div>
        </div>
        <div className="table__section">
        <div className="table__headers--site">
          <p>SNKRDUNK</p>
          </div>
          <div className="table__columns">
            {selectedSnkrListings.map((snkrlisting, index) => (
              <div key={index} className="table__listing">
                <div className="table__headers--image">
                <div className="table__listing-image-container">
                  <img
                    className="table__listing-image"
                    src={snkrlisting.image}
                    alt="card picture"
                  />
                </div>
                </div>
                <div className="table__headers--price">
                <p className="table__listing-price">
                  Price: {snkrlisting.price}
                </p>
                </div>
                <div className="table__headers--type">
                <div className="table__listing-type">
                  <p>{snkrlisting.type}</p>
                </div>
                </div>
                

              </div>
            ))}
          </div>
        </div>
        <div className="table__section">
        <div className="table__headers--site">
          <p>EBAY</p>
          </div>
          <div className="table__columns">
            {selectedEbayListings.map((ebaylisting, index) => (
              <div key={index} className="table__listing">
                <div className="table__headers--image">
                <div className="table__listing-image-container">
                  <img
                    className="table__listing-image"
                    src={ebaylisting.image}
                    alt="card picture"
                  />
                </div>
                </div>
                <div className="table__headers--price">
                <p className="table__listing-price">
                 ${ebaylisting.price}
                </p>
                </div>
                <div className="table__headers--type">
                <div className="table__listing-type">
                  <p>{ebaylisting.type}</p>
                    <p>{ebaylisting.name}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div> */
  );
};

export default CompareListingsPage;
