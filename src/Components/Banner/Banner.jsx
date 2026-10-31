import styles from "./Banner.module.css";
import NetflixBanner from "../../assets/image/logo.png";//import the netflix log img
import { Play, Info } from "lucide-react";//import icon
import { useEffect, useState } from "react";
import { Movieinstance } from "../../Utility/Movieinstance.js";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
import requests from "../../Utility/request.js";//Contains the API endpoint for fetching Netflix original titles.
function Banner() {
  const [bannerImage, setbannerImage] = useState({}); //Stores the selected movie's information.
  //Runs the API-fetching operation when the component loads.
  useEffect(() => {
    async function fetchbannerimage() {
      //method sends a GET request to the TMDB API
      const request = await Movieinstance.get(requests.fetchNetflixOriginals);

      setbannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }

    fetchbannerimage();
  }, []); //Makes the effect run when the component mounts, rather than after every render
  // "We use the truncate function to keep the movie description short and make the banner look organized."
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      //This creates the main banner container.
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        //The background changes according to the movie selected by the API.
        backgroundImage: `url("${BANNER_BASE}${bannerImage?.backdrop_path}")`,
      }}
    >
      <div className={styles.contents}>
        {/* image log */}
        <img
          className={styles.logoImg}
          src={NetflixBanner}
          alt="NetflixBanner logo"
        />

        {/*movie title */}
        <h1 className={styles.Title}>{bannerImage?.original_name}</h1>

        {/* description */}
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>
        <div className={styles.buttoncontainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      <div className={styles.fadebottom}>{/* fading */}</div>
    </div>
  );
}

export default Banner;
