import "./Searchbar.scss";
import { useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidLink = isValidSNKDUNKProductUrl(searchPrompt);

    if (!isValidLink) return alert("Please provide a valid Snkrdunk link");

    try {
      setIsLoading(true);
      //Scrape the product page 
    } catch (error) {
      console.log(error)
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="search-bar"
      />
      <button type="submit" className="search-bar__button" disabled={searchPrompt === ""}>
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
