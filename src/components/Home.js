import HomePageBanner from "./utilities/HomePageBanner";
import './Home.css';
import FuncCard from "./utilities/FundCard";

const Home = () =>{
    return(
        <>
          <div className="home-container">
             <section className="home-page-banner-section">
                <HomePageBanner/>
             </section>
             <section className="home-feature-items">
                <h1 style={{marginTop:"50px",color:"purple"}}>Trending StartUps</h1>
                <p style={{marginBottom:"35px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="feature-items-container">
                   <FuncCard/>
                   <FuncCard/>
                   <FuncCard/>
                </div>
             </section>
             <section className="home-page-app-add">

             </section>
          </div>
        </>
    );
}

export default Home;