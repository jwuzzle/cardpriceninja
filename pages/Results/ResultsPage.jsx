import React from "react";
import SnkrDunkResults from "../../components/SnkrDunkResults/SnkrDunkResults";
import axios from "axios";
import EbaySearchBar from "../../components/EbaySearchBar/EbaySearchBar";
import "./ResultsPage.scss";
import { useState } from "react";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const ResultsPage = () => {
  const scrapedDataObjectFromStorage = sessionStorage.getItem("scraped data");
  const scrapedDataObjectParsed = JSON.parse(scrapedDataObjectFromStorage);
  console.log(scrapedDataObjectParsed);
  console.log(scrapedDataObjectParsed.name);

  const searchPrompt = `https://snkrdunk.com/en/trading-cards/${scrapedDataObjectParsed.id}/used`;
  console.log(searchPrompt);

  const [showEbaySearch, setShowEbaySearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${baseURL}/scrape/used`, {
        url: searchPrompt,
      });
      console.log(response);
      console.log("Response from server after post:", response.data);
      const stringifiedSNKListingData = JSON.stringify(response.data);
      sessionStorage.setItem("snk listing data", stringifiedSNKListingData);
      setShowEbaySearch(true);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="results">
      <h1 className="results__header">SNKRDUNK Result</h1>
      <div className="results__snkr-container">
        <SnkrDunkResults
          name={scrapedDataObjectParsed.name}
          image={scrapedDataObjectParsed.thumbnailUrl}
          price={scrapedDataObjectParsed.usedMinPrice}
          listings={scrapedDataObjectParsed.usedListingCount}
        />
        <div className="results__accept">
          <h2 className="results__accept-header"></h2>
          <h3 className="results__subheader">Is this the correct card?</h3>
          <div className="results__cta">
          <button className="results__button accept" onClick={onClick}>
            Yes
          </button>
          <button className="results__button decline">No</button>
        </div>
        </div>
        {isLoading ? <p>Loading...</p> : (
        <div className={`results__ebay-search ${showEbaySearch === true ? "show" : "hidden"}`}>
        <h2 className="results__ebay-search-header">Enter the above card name:</h2>
          <EbaySearchBar />
        </div>)}
      </div>
    </div>
  );
};

export default ResultsPage;
