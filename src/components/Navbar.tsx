import NavLinkItem from "./NavLinkItem"
import {navLinkItems} from "../constants"
import { NavLinkItemProps } from "../interface"
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nameHeader">
                <span className="name">Arfaoui Badi</span>
                <br />
                <span className="jobTitle">Full Stack Developer</span>
            </div>


            <div className="navLinks">
                {
                    navLinkItems.map((item:NavLinkItemProps, index:number) => {
                        return <NavLinkItem key={index} icon={item.icon} title={item.title} path={item.path} />
                    })
                }
            </div>

        </nav>
    )

}

export default Navbar