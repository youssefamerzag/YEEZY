import "./NavBar.css"
const NavBar = () => {
    return(
        <div>
                <div className="NavBar" style={{backgroundColor : "black", height : "120px"}} >
                        <div className="navLogo">
                            <img src='./imgs/maxresdefault.png' width={"250px"}></img>
                        </div>
                        <div className="navLinks">
                            <a>Home</a>
                            <a>Men</a>
                            <a>Women</a>
                            <a>Albums</a>
                        </div>
                        <div className="navLinks">
                            <a>About</a>
                            <a>Support</a>
                            <a>Advertisers</a>
                        </div>
                </div>      
        </div>
    )
}
export default NavBar;