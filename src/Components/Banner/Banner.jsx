
import styles from "./Banner.module.css";
import NetflixBanner from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { Movieinstance } from "../../Utility/Movieinstance.js";
import requests from "../../Utility/request.js";

// Base URL for movie images
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

// Function to shorten movie descriptions
function truncate(str, n) {
  if (!str) return "";
  return str.length > n ? str.substring(0, n - 1) + "..." : str;
}

function Banner() {
  // Store selected movie information
  const [bannerImage, setbannerImage] = useState({});

  // Fetch movie information from TMDB API
  useEffect(() => {
    async function fetchbannerimage() {
      try {
        const request = await Movieinstance.get(
          requests.fetchNetflixOriginals
        );

        // Select a random movie
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];

        setbannerImage(randomMovie);
      } catch (error) {
        console.log("Error fetching banner:", error);
      }
    }

    fetchbannerimage();
  }, []);

  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: bannerImage?.backdrop_path
          ? `url("${BANNER_BASE}${bannerImage.backdrop_path}")`
          : "none",
      }}
    >
      <div className={styles.contents}>
        {/* Netflix logo */}
        <img
          className={styles.logoImg}
          src={NetflixBanner}
          alt="Netflix logo"
        />

        {/* Movie title */}
        <h1 className={styles.Title}>
          {bannerImage?.original_name}
        </h1>

        {/* Movie description */}
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>

        {/* Buttons */}
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

      {/* Bottom fading effect */}
      <div className={styles.fadebottom}></div>
    </div>
  );
}

export default Banner;

