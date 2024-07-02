import "./Table.scss";
import TableRows from "./TableRows";

const Table = (props) => {
  let snkrRow = props.tableSnkrData;
  console.log(snkrRow);
  let snkrRowArray = Object.values(snkrRow);
  console.log(snkrRowArray);

  let ebayRow = props.tableEbayData;
  console.log(ebayRow);
  let ebayRowArray = Object.values(ebayRow);
  console.log(ebayRowArray);

  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          {props.tableHeaders.map((head, index) => (
            <tr key={index} className="table__header-row">
              <th className="table__header">{head}</th>
            <TableRows rowArray={snkrRowArray} 
            header={head}
            key={`${head}_snkr`} />
          <TableRows rowArray={ebayRowArray} 
          header={head}
          key={`${head}_ebay`}/>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
