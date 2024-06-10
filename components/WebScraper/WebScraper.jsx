import {useState} from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const WebScraper = () => {

    const [url, setUrl] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const result = await axios(`baseURL/scrape?url=${encodeURIComponent(url)}`);
            setData(result.data)
            console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div>WebScraper</div>
  )
}

export default WebScraper