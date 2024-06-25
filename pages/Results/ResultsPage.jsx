import React from "react";
import SnkrDunkResults from "../../components/SnkrDunkResults/SnkrDunkResults";
import axios from "axios";
import EbaySearchBar from "../../components/EbaySearchBar/EbaySearchBar";
import "./ResultsPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NinjaLoader from "../../components/NinjaLoader/NinjaLoader";
import ConfirmCard from "../../components/ConfirmCard/ConfirmCard";

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

  const onClickHome = async () => {
    navigate("/");
  };

  const onClick = async (e) => {
    let hasError = false;
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

      console.log("SNK and eBay API requests completed.");

      console.log("SNK Listing Response:", snkListingResponse.data);

      if (snkListingResponse.data.length > 0) {
        const stringifiedSNKListingData = JSON.stringify(
          snkListingResponse.data
        );
        sessionStorage.setItem("snk listing data", stringifiedSNKListingData);
      } else {
        console.warn("SNK listing data is empty or undefined");
        alert("There was an error processing your request. Please try again.");
        hasError = true;
      }

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
    if (!hasError) {
      navigate("/compare");
    }
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
    <>
    {isLoading === true ? <NinjaLoader className="no-scroll" /> : ""}
    <div className="results">
      <div className="results__top">
      </div>
      <div className="results__snkr-container">
        <SnkrDunkResults
          name={scrapedDataObjectParsed.name}
          image={scrapedDataObjectParsed.thumbnailUrl}
          price={scrapedDataObjectParsed.usedMinPrice}
          listings={scrapedDataObjectParsed.usedListingCount}
        />
        <ConfirmCard onClickYes={onClick} onClickNo={onClickHome} />
      </div>
    </div>
    </>
  );
};

export default ResultsPage;
