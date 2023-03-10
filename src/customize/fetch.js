import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isIsErr, setisIsErr] = useState(false);
  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token, // <-- 2nd step
        });
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setisIsErr(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request canceled", e.message);
        } else {
          setisIsErr(true);
          setIsLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 3000);

    return () => {
      ourRequest.cancel("Openration canceled by the user!!"); // <-- 3rd step
    };
  }, [url]);

  return {
    data,
    isLoading,
    isIsErr,
  };
};
export default useFetch;
