import React from "react";
import SnkrDunkResults from "../../components/SnkrDunkResults/SnkrDunkResults";
import axios from "axios";
import EbaySearchBar from "../../components/EbaySearchBar/EbaySearchBar";
import "./ResultsPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const ResultsPage = () => {
  const navigate = useNavigate();

  const scrapedDataObjectFromStorage = sessionStorage.getItem("scraped data");
  const scrapedDataObjectParsed = JSON.parse(scrapedDataObjectFromStorage);
  console.log(scrapedDataObjectParsed);
  console.log(scrapedDataObjectParsed.name);

  const regex = /\[.*\)$/;
  const card_name = "japanese " + scrapedDataObjectParsed.name.replace(regex, "");
  console.log(card_name);

  const searchPrompt = `https://snkrdunk.com/en/trading-cards/${scrapedDataObjectParsed.id}/used?sort=price_asc&isOnlyOnSale=true`;
  console.log(searchPrompt);

  const [showEbaySearch, setShowEbaySearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async (e) => {
    try {
      setIsLoading(true);
      try {
        const response = await axios.post(`${baseURL}/scrape/used`, {
          url: searchPrompt,
        });
        console.log(response);
        console.log("Response from server after post:", response.data);
        const stringifiedSNKListingData = JSON.stringify(response.data);
        sessionStorage.setItem("snk listing data", stringifiedSNKListingData);
        setShowEbaySearch(true);
      } catch (error) {
        console.log(error);
      }

      try {
        console.log("Name:", card_name);
        const response = await axios.get(`${baseURL}/ebay?name=${card_name}`);
        console.log(response.data);
        const findItemsByKeywordsResponse =
          response.data.findItemsByKeywordsResponse;
        console.log(findItemsByKeywordsResponse);
        const searchResult =
          response.data.findItemsByKeywordsResponse[0].searchResult;
        console.log(searchResult);
        const searchResultItem =
          response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
        console.log(searchResultItem);
        const stringifiedEbayData = JSON.stringify(searchResultItem);
        sessionStorage.setItem("ebay data", stringifiedEbayData);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      navigate("/compare");
    }
  };

  return (
    <div className="results">
      <div className="results__top">
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
        </div>
        {/*  <div className="results__bottom">
          {isLoading ? (
            <p className="results__loading">Loading...</p>
          ) : (
            <div
              className={`results__ebay-search ${
                showEbaySearch === true ? "show" : "hidden"
              }`}
            >
              <h2 className="results__ebay-search-header">
                Enter the above card name:
              </h2>
              <EbaySearchBar />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ResultsPage;
