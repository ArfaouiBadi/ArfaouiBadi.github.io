import { Link } from "react-router-dom";
import { NavLinkItemProps } from "../interface";

const NavLinkItem = (props: NavLinkItemProps) => {
  console.log(props);
  return (
    <Link className="navLink" to={props.path} style={{ textDecoration: 'none', color: 'inherit' }}>
      {props.icon}
      <span className="navLinkText">{props.title}</span>
    </Link>
  );
};

export default NavLinkItem;