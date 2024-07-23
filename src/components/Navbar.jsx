import "./Navbar.css";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Profile from "../pages/profile/Profile";
const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      {/* <!-- Main navigation container --> */}
      <nav
        className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-gray-800 lg:flex-wrap lg:justify-between lg:py-4"
        style={{ height: "60px" }}
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Collapsible navigation container --> */}
          <div
            className="!visible hidden items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >
            {/* <!-- Logo --> */}

            <Link
              to="/"
              className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            >
              <FacebookIcon className="text-blue-800 me-2" fontSize="large" />
              Facebook
            </Link>
          </div>
          <div class="relative flex w-1/2">
            <input
              type="search"
              class="relative m-0 block flex-auto rounded-full border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-slate-500 dark:autofill:shadow-autofill dark:focus:border-primary"
              placeholder="Search for Friend, Post"
            />
            <span
              class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white"
              id="button-addon2"
            >
              <SearchIcon />
            </span>
          </div>
          {/* <!-- Right elements --> */}
          <div className="relative flex items-center">
            {/* <!-- Icon --> */}
            <a className="me-4 text-neutral-600 dark:text-white" href="#">
              <span className="[&>svg]:w-5">
                <PersonIcon />
              </span>
            </a>
            <a className="me-4 text-neutral-600 dark:text-white" href="#">
              <span className="[&>svg]:w-5">
                <ChatIcon />
              </span>
            </a>
            <a className="me-4 text-neutral-600 dark:text-white" href="#">
              <span className="[&>svg]:w-5">
                <NotificationsIcon />
              </span>
            </a>

            <button onClick={() => setDarkTheme(!darkTheme)}>
              <a className="me-4 text-neutral-600 dark:text-white" href="#">
                <span className="[&>svg]:w-5">
                  {darkTheme ? <NightsStayIcon /> : <LightModeIcon />}
                </span>
              </a>
            </button>
            {/* <!-- Second dropdown trigger --> */}
            <a
              className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-twe-dropdown-toggle-ref
              aria-expanded="false"
            >
              {/* <!-- User avatar --> */}
              <Link to="/profile">
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: "25px", width: "25px" }}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
