import "./TableRows.scss";

const TableRows = (props) => {
  const clickEbayDunkListing = (listing) => {
    return window.open(listing, "_blank");
  };

  const clickSnkrDunkListing = (listing) => {
    return window.open(`https://snkrdunk.com${listing}`, "_blank");
  };

  return (
/* <td className="table-cell">
  {props.rowArray.map((value, index) => (
      <div className="table-cell__content" key={index}>
        {props.header === "Site" && (<p>{value.url.toString().includes("ebay") ? "Ebay" : "SNKRDUNK"}</p>)}
        {props.header === "Picture" && <img src={value.image} alt="" />}
        {props.header === "Type of Card" && <p>{value.type}</p>}
        {props.header === "Price" && (value.price.includes("$") ? (
                <p>{value.price}</p>
              ) : (
                <p>${value.price}</p>
              ))}
            {props.header === "Link to Posting"&& (<button
                role="link"
                onClick={
                  value.url.toString().includes("www.ebay.com")
                    ? () => clickEbayDunkListing(value.url)
                    : () => clickSnkrDunkListing(value.url)
                }
              >
                Go to Listing
              </button>)}
      </div>
  ))}
  </td> */
  <>
      {props.rowArray.map((value, index) => (
        <td className="table-cell" key={index}>
          <div className="table-cell__content">
            {props.header === "Site" && (
              <p>{value.url.toString().includes("ebay") ? "Ebay" : "SNKRDUNK"}</p>
            )}
            {props.header === "Picture" && <img src={value.image} alt="" />}
            {props.header === "Type of Card" && <p>{value.type}</p>}
            {props.header === "Price" && (
              <p>{value.price.includes("$") ? value.price : `$${value.price}`}</p>
            )}
            {props.header === "Link to Posting" && (
              <button
              className="table-cell__button"
                role="link"
                onClick={
                  value.url.toString().includes("www.ebay.com")
                    ? () => clickEbayDunkListing(value.url)
                    : () => clickSnkrDunkListing(value.url)
                }
              >
                Go to Listing
              </button>
            )}
          </div>
        </td>
      ))}

</>
  );
};

export default TableRows;
