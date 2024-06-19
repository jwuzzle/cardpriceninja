import React from "react";
import SnkrDunkResults from "../../components/SnkrDunkResults/SnkrDunkResults";
import axios from "axios";
import EbaySearchBar from "../../components/EbaySearchBar/EbaySearchBar";
import "./ResultsPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NinjaLoader from "../../components/NinjaLoader/NinjaLoader";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const ResultsPage = () => {
  const navigate = useNavigate();

  const scrapedDataObjectFromStorage = sessionStorage.getItem("scraped data");
  const scrapedDataObjectParsed = JSON.parse(scrapedDataObjectFromStorage);
  console.log(scrapedDataObjectParsed);
  console.log(scrapedDataObjectParsed.name);

  const regex = /\[.*\)$/;
  const card_name =
    "japanese " + scrapedDataObjectParsed.name.replace(regex, "");
  console.log(card_name);

  const searchPrompt = `https://snkrdunk.com/en/trading-cards/${scrapedDataObjectParsed.id}/used?sort=price_asc&isOnlyOnSale=true`;
  console.log(searchPrompt);

  const [showEbaySearch, setShowEbaySearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async (e) => {
    try {
      setIsLoading(true);

      const fetchSnkListingData = axios.post(`${baseURL}/scrape/used`, {
        url: searchPrompt,
      });
      const fetchEbayData = axios.get(`${baseURL}/ebay?name=${card_name}`);

      const [snkListingResponse, ebayResponse] = await Promise.all([
        fetchSnkListingData,
        fetchEbayData,
      ]);

      console.log(snkListingResponse.data);

      console.log("Response from server after post:", snkListingResponse.data);
      const stringifiedSNKListingData = JSON.stringify(snkListingResponse.data);
      sessionStorage.setItem("snk listing data", stringifiedSNKListingData);

      console.log(ebayResponse.data);

      const findItemsByKeywordsResponse =
        ebayResponse.data.findItemsByKeywordsResponse;
      console.log(findItemsByKeywordsResponse);
      const searchResult =
        ebayResponse.data.findItemsByKeywordsResponse[0].searchResult;
      console.log(searchResult);
      const searchResultItem =
        ebayResponse.data.findItemsByKeywordsResponse[0].searchResult[0].item;
      console.log(searchResultItem);
      const stringifiedEbayData = JSON.stringify(searchResultItem);
      sessionStorage.setItem("ebay data", stringifiedEbayData);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
    navigate("/compare");
  };

  useEffect(() => {
    const body = document.body;
    if (isLoading) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      body.classList.remove("no-scroll");
    };
  }, [isLoading]);

  return (
    <div className="results">
      {isLoading === true ? <NinjaLoader className="no-scroll" /> : ""}
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
      </div>
    </div>
  );
};

export default ResultsPage;
