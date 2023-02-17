import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
const Covid = () => {
  const [datacovid, setDataCovid] = useState([]);
  useEffect(async () => {
    let res = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z"
    );
    let data = res && res.data ? res.data : [];
    if (data && data.length > 0) {
      data.map((item) => {
        item.Date = moment(item.Date).format("DD/MM/YYYY");
      });
    }
    setDataCovid(data);
  }, []);
  return (
    <table>
      {console.log(">>>Check data", datacovid)}
      <thead>
        <tr>
          <th>Number</th>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {datacovid &&
          datacovid.length > 0 &&
          datacovid.map((item, index) => {
            return (
              <tr key={item.ID}>
                <td>{index + 1}</td>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Recovered}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default Covid;
