import "./Searchbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Results from "../SnkrDunkResults/SnkrDunkResults";
import Tooltip from "../../components/Tooltip/ToolTip";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const Searchbar = (props) => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isValidSNKDUNKProductUrl = (url, string) => {
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;
      //check if hostname contains
      if (
        hostname.includes("snkrdunk.com") ||
        hostname.includes("snkrdunk.") ||
        hostname.endsWith("snkrdunk")
      ) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  };

  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidLink = isValidSNKDUNKProductUrl(searchPrompt);

    if (!isValidLink) return alert("Please provide a valid Snkrdunk link");

    try {
      setIsLoading(true);

      //Scrape the product page

      const response = await axios(
        `${baseURL}/scrape?url=${encodeURIComponent(searchPrompt)}`
      );
      console.log(response.data);
      setData(response.data);
      const stringifiedScrapedData = JSON.stringify(response.data);
  sessionStorage.setItem("scraped data", stringifiedScrapedData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      {!props.openSearchBar ? "" : props.openSearchBar(false)}
      navigate("/results");
    }
  };


  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div className="search__top">
          <div className="search-bar-container">
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter SNKRDUNK product link "
          className="search-bar"
        />
        <Tooltip
          text="Example: https://snkrdunk.com/en/trading-cards/93379" 
          position="bottom"
        /></div>
        <button
          type="submit"
          className="search-bar__button"
          disabled={searchPrompt === ""}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
        </div>
      </form>
    </>
  );
};

export default Searchbar;
