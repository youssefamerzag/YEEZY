import data from './categories.json'
import './Home.css'
import products from './products.json'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
    };

    return(
        <div>
            <div className='categoris'>
                {data.map((category , index) => 
                    <a href='#' className='category' key={index} style={{justifyContent : "flex-end", display : "flex" , flexDirection : "column" ,backgroundImage : `url(${category.src})`, backgroundSize : "cover" ,width : "250px", height : "350px" , margin : "10px" , padding :"20px"}}>
                        <p style={{fontSize : "40px" ,fontWeight : 900}}>{category.name}</p>
                    </a>
                )}
            </div>

            <div style={{backgroundColor : "#202020", paddingBottom : "20px" }}>
                <p style={{textAlign :"center", fontSize : "50px" , margin : "20px", color : "white"}}>Latest News</p>
                <div className='latest' >
                    <a href='#'>
                        <video className='new' style={{borderRadius : '10px'}} width="750" height="400" muted loop autoPlay>
                        <source src='./imgs/YZY PODS.mp4' type="video/mp4"/>
                        </video>
                    </a>
                    <a href='#' className='new' style={{borderRadius : '10px'}}>
                    </a>
                </div>
            </div>
            
            <p style={{textAlign :"center", fontSize : "50px" , margin : "20px"}}>New Arrivals</p>
            <div className='shoes'>
                <Slider {...settings}>
                {products[0].shoes.map((shoe , index) => 
                    <a href='#' className='shoe' key={index}>
                        <img src={shoe.src} width={'300px'}></img>
                        <p>{shoe.name}</p>
                        <p style={{color : "gray"}}>{shoe.category}</p>
                        <p>{shoe.price}</p>
                    </a>
                )}
                </Slider>
            </div>

            <div className='clothes'>
                <Slider {...settings}>
                    {products[1].clothes.map((clothe , index) => 
                        <a href='#' className='clothe' key={index} >
                            <div className='clothe-img' style={{backgroundImage: `url('${clothe.front}')`, backgroundPosition : "top", backgroundRepeat : "no-repeat",  width : "300px" , height : "400px" ,}} onMouseEnter={(e) => e.target.style.backgroundImage = `url('${clothe.back}')`} onMouseLeave={(e) => e.target.style.backgroundImage = `url('${clothe.front}')`}></div>
                            <p>{clothe.name}</p>
                            <p style={{color : "gray"}}>{clothe.category}</p>
                            <p>{clothe.price}</p>
                        </a>
                    )}
                </Slider>
            </div>

            <div className='banner'>

            </div>
        </div>
    )
}
export default Home;