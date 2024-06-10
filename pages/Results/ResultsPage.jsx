import React from "react";
import Results from "../../components/Results/Results";

const ResultsPage = () => {
  const scrapedDataObjectFromStorage = sessionStorage.getItem("scraped data");
  const scrapedDataObjectParsed = JSON.parse(scrapedDataObjectFromStorage);

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
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
