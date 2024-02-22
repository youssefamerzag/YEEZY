import './Header.css'
import data from './categories.json'

const Header = () => {
    return(
        <div className='header'>
            <div className="navBar">
                <div className='lefttSide'>
                    <p>NEWS</p>
                    <p>CARD</p>
                </div>
                <div className='logo'>
                    <img src='./imgs/Yeezy_logo.png' width={"120px"}></img>
                </div>
                <div className='rightSide'>
                    <p>LogIn</p>
                    <p>Sign In</p>
                </div>
            </div>

            <div className='Head'>
                <div className='HeadContent'>
                    <p>YEEZY SHOES AVAILABLE NOW</p><br></br>
                    <button>SHOP NOW  <img width="25" height="25" src="https://img.icons8.com/ios/100/EBEBEB/circled-chevron-right--v1.png" alt="circled-chevron-right--v1"/></button>
                </div>
            </div>

            <div className='categoris'>
                {data.map((category , index) => 
                    <div className='category' key={index} style={{justifyContent : "flex-end", display : "flex" , flexDirection : "column" ,backgroundImage : `url(${category.src})`, backgroundSize : "cover" ,width : "250px", height : "350px" , margin : "10px" , padding :"20px"}}>
                        <p style={{fontSize : "40px" ,fontWeight : 900, color :"#fff6cc"}}>{category.name}</p>
                        <button className='shop_btn'>Shop Now</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Header;