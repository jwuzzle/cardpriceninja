import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const CompareSnkEbay = () => {
  const scrapedDataObjectFromStorage = sessionStorage.getItem("scraped data");
  const scrapedDataObjectParsed = JSON.parse(scrapedDataObjectFromStorage);

  const ebayDataObjectFromStorage = sessionStorage.getItem("ebay data");
  const ebayDataObjectParsed = JSON.parse(ebayDataObjectFromStorage);

  const snkrunkData = scrapedDataObjectParsed;
  const ebayData = ebayDataObjectParsed;

  console.log(ebayData);
  console.log(ebayData[0].title);

  return (
    <div>
      <div>
        <h1>SNKDUNK Listings:</h1>
      </div>
      <div>
        <h1>Ebay Listings:</h1>
        {ebayData.map((listing) => (
          <div>
            <p>{listing.title}</p>
            <img src={listing.galleryURL} alt="card picture" />
            <p>
              Type: <span>{listing.condition[0].conditionDisplayName}</span>
            </p>
            <p>
              Price:{" "}
              <span>${listing.sellingStatus[0].currentPrice[0].__value__}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareSnkEbay;
