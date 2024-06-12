import React from "react";
import Results from "../../components/Results/Results";
import axios from "axios";
import EbaySearchBar from "../../components/EbaySearchBar/EbaySearchBar";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const ResultsPage = () => {
  const scrapedDataObjectFromStorage = sessionStorage.getItem("scraped data");
  const scrapedDataObjectParsed = JSON.parse(scrapedDataObjectFromStorage);
  console.log(scrapedDataObjectParsed)
  console.log(scrapedDataObjectParsed.name)

  const searchPrompt = `https://snkrdunk.com/en/trading-cards/${scrapedDataObjectParsed.id}/used`
  console.log(searchPrompt)

  const onClick = async () => {
    try {
      const response = await axios(
        `${baseURL}/scrape?url=${encodeURIComponent(searchPrompt)}`
      );
      console.log(response.data);
      const stringifiedListingData = JSON.stringify(response.data);
  sessionStorage.setItem("scraped listing data", stringifiedListingData);
    } catch (error) {
      console.log(error);
    } 
  };


  return (
    <div>
      <div>
        <Results
          id={scrapedDataObjectParsed.id}
          name={scrapedDataObjectParsed.name}
          image={scrapedDataObjectParsed.thumbnailUrl}
          price={scrapedDataObjectParsed.usedMinPrice}
          listings={scrapedDataObjectParsed.usedListingCount}
        />
        <div>
          <h3>Is this the correct card?</h3>
          <button onClick={onClick}>Yes</button>
          <button>No</button>
        </div>
        <EbaySearchBar />
      </div>
    </div>
  );
};

export default ResultsPage;
