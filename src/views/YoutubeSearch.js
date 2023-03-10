import "./Blog.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment/moment";
const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearchYT = async () => {
    // let res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    //   part: "snippet",
    //   maxResults: "20",
    //   key: "AIzaSyBRgLOPzkYh41Hwksd13CMoM6SzRWWXYSw",
    //   type: "video",
    //   q: query,
    // });

    let res1 = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyBRgLOPzkYh41Hwksd13CMoM6SzRWWXYSw",
        type: "video",
        q: query,
      },
    });
    if (res1 && res1.items) {
      let raw = res1.items;
      if (raw && raw.length > 0) {
        let results = [];
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          results.push(object);
        });
        console.log(">>> Checl result ", results);
      }
    }
    console.log("Check response", res1);
  };
  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearchYT}>
          Search
        </button>
      </div>
      <div className="yt-result">
        <div className="left">
          <iframe
            className="iframe-yt"
            src="https://www.youtube.com/embed/YbmvFEXZG7Q?list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E"
            title="#30.2 Design Giao Diện &amp; Hoàn Thiện Chức Năng &#39;Search Youtube&#39; với Google APIs và React Hook"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="right">
          <div className="title">
            #25 HOC - Higher Order Components Với React.JS | React Cơ Bản Cho
            Beginners Từ A đến Z
          </div>
          <div className="created-add">
            Created At:{" "}
            {moment("2021-09-14T11:00:11Z").format("DD-MM-YYYY HH:mm:ss A")}
          </div>
          <div className="author">Author: HỎI DÂN IT </div>
          <div className="description">     
            HỌC, HỌC NỮA, HỌC MÃI, và cuối cùng đi sử dụng HOC, một công nghệ
            của React giúp chúng ta viết code ít hơn cũng như tái ...
          </div>
        </div>
      </div>
    </div>
  );
};
export default YoutubeSearch;
