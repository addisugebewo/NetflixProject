import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlayCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ Movie }) {
const genres = ["Adventure", "Action", "Thriller"];

return ( <div className={styles.carrdwrapper}>
{/* Movie poster */}
<img
className={styles.Poster}
src={
Movie?.poster_path
? `${IMAGE_BASE}${Movie.poster_path}`
: "/placeholder.png"
}
alt={Movie?.title || Movie?.name || "Movie poster"}
/>


  {/* Hover card */}
  <div className={styles.HoverCard}>
    <img
      className={styles.Hoverimg}
      src={
        Movie?.backdrop_path
          ? `${IMAGE_BASE}${Movie.backdrop_path}`
          : Movie?.poster_path
            ? `${IMAGE_BASE}${Movie.poster_path}`
            : "/placeholder.png"
      }
      alt={Movie?.title || Movie?.name || "Movie"}
    />

    {/* Badge */}
    <div className={styles.Badge}>Recently Added</div>

    {/* Buttons */}
    <div className={styles.ButtonRow}>
      <FaCirclePlay
        className={styles.CircleButton}
        color="white"
        size={20}
      />

      <BsPlayCircle
        className={styles.CircleButton}
        color="white"
        size={20}
      />

      <GoCheckCircleFill
        className={styles.CircleButton}
        color="white"
        size={20}
      />

      <IoIosArrowDropdownCircle
        className={styles.CircleButtonSmall}
        color="white"
        size={20}
      />
    </div>

    {/* Metadata */}
    <div className={styles.MetaData}>
      <span className={styles.tag}>U/A 16+</span>
      <span className={styles.tag}>Movies</span>
      <span className={styles.tag}>HD</span>
    </div>

    {/* Genres */}
    <div className={styles.genres}>
      {genres.map((genre, index) => (
        <span key={genre}>
          {genre}
          {index < genres.length - 1 && (
            <span className={styles.Dot}> • </span>
          )}
        </span>
      ))}
    </div>
  </div>
</div>


);
}

export default MovieCard;
