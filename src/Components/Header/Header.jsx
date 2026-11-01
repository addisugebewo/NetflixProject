import { useEffect, useState } from "react";// useEffect and useState are imported from React to manage state and side effects in the component.
import styles from "./Header.module.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router";// Link is imported from react-router to enable navigation between different routes in the application.
// 1. Capitalized Search here
import { Search, Bell, User, ChevronDown } from "lucide-react";// Search, Bell, User, and ChevronDown icons are imported from lucide-react for use in the header component.

const Header = () => {
  const [IsSearchOpen, setIsSearchOpen] = useState(false)
  const [IsProfileOpen, setIsProfileOpen] = useState(false);
 // for blur
 const [IsScrolled, setIsScrolled] = useState(false);// IsScrolled state is used to track whether the user has scrolled down the page or not.
   useEffect(() => {
  const handleScroll = () => {// handleScroll function is defined to update the IsScrolled state based on the scroll position of the window.
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);// An event listener is added to the window object to listen for the scroll event and call the handleScroll function when the user scrolls.
    return () => {
    window.removeEventListener("scroll", handleScroll);// A cleanup function is returned to remove the event listener when the component is unmounted, preventing memory leaks.
  };
}, []);





  return (
    <header className={`${styles.header} ${IsScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="Netflix Logo" />
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/tv-shows">
            TV Shows
          </Link>
          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="/new-popular">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="/my-list">
            My List
          </Link>
          <Link className={styles.navLink} to="/browse-language">
            Browse by Language
          </Link>
        </nav>
        {/* right side section  */}
        <div className={styles.rightSection}>
          <div className={styles.SearchContainer}>
            <button
              onClick={() => setIsSearchOpen(!IsSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {IsSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>
          <button className={styles.iconButton}>
            {/* notifications */}
            <Bell size={20} />
            <span className={styles.NotificationBadge}>4</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!IsProfileOpen)}
              className={styles.profileButton}
            >
              <div className={styles.profileAvatar}>
                {/* user icon */}
                <User size={20} />
              </div>
              <ChevronDown size={20} />
              {/* dropdown icon */}
            </button>
            {IsProfileOpen && (
              <div className={styles.ProfileMenu}>
                <Link className={styles.ProfileMenuItem}> Account </Link>
                <Link className={styles.ProfileMenuItem}> help center </Link>
                <hr className={styles.ProfileMenuDivider} />
                <button className={styles.ProfileMenuItem}> sign out </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
