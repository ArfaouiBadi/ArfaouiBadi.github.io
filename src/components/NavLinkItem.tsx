import { NavLinkItemProps } from "../interface";

const NavLinkItem = (props: NavLinkItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(props.path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      className={`navLink ${props.isActive ? "active" : ""}`}
      href={props.path}
      onClick={handleClick}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {props.icon}
      <span className="navLinkText">{props.title}</span>
    </a>
  );
};

export default NavLinkItem;
