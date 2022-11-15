import { Link } from "react-router-dom";
import { HomeButton } from "./homeButton.style";

export const Settings = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Link to="/">
          <HomeButton />
        </Link>
      </div>
    </div>
  );
};
