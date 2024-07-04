
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EbaySearchBar.scss";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const EbaySearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [ebayData, setEbayData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log("Name:", searchPrompt);
      const response = await axios.get(`${baseURL}/ebay?name=${searchPrompt}`);
      console.log(response.data);
      const findItemsByKeywordsResponse = response.data.findItemsByKeywordsResponse;
      console.log(findItemsByKeywordsResponse)
      const searchResult = response.data.findItemsByKeywordsResponse[0].searchResult;
      console.log(searchResult)
      const searchResultItem = response.data.findItemsByKeywordsResponse[0].searchResult[0].item;
      console.log(searchResultItem)
      const stringifiedEbayData = JSON.stringify(searchResultItem);
      sessionStorage.setItem("ebay data", stringifiedEbayData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      navigate("/compare");
    }
  };

  return (
    <>
      <form className="ebay-search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter card name (ie Japanese Umbreon VMAX HR 095/069)"
          className="ebay-search__bar"
        />
        <button
          type="submit"
          className="ebay-search__button"
          disabled={searchPrompt === ""}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </>
  );
};

export default EbaySearchBar;
