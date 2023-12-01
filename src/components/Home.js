import HomePageBanner from "./utilities/HomePageBanner";
import './Home.css';
import FuncCard from "./utilities/FundCard";
import Carousel from "react-elastic-carousel";
import { useContext } from "react";
import AuthContext from "../globalStates/AuthContext";

const Home = () =>{
  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 900, itemsToShow: 1},
  { width: 1000, itemsToShow:  3},
];
const cardData = [1,2,3,5,6,7,8];

const {user,setUser} = useContext(AuthContext);

    return(
        <>
          <div className="home-container">
             
             <section className="home-page-banner-section">
                <HomePageBanner/>
             </section>
             <section className="home-feature-items">
                <h1 style={{marginTop:"50px",color:"purple"}}>Demo Cards</h1>
                <p style={{marginBottom:"35px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="feature-items-container">
                   <Carousel breakPoints={breakPoints}>
                     {
                        cardData.map(d=>(
                        <FuncCard/>
                        ))
                     }
                   </Carousel>
                </div>
             </section>
          </div>
        </>
    );
}

export default Home;