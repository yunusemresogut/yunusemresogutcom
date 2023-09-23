import { Link } from "react-router-dom";
import logo from "~/assets/img/yes.gif"

export default function Logo() {
  return (
    <Link to="/">
      <div className="w-8 h-8">
        <img src={logo} alt="logo" className="w-auto" />
      </div>
    </Link>
  );
}
