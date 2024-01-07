import React from "react";
import "../styles/home.scss";
import vg from "../assets/images/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home_container" id="home">
        <div className='search'></div>
        <main>
          <h1>Biscope</h1>
          <p>Near rani sati road</p>
        </main>
      </div>

      
      
      

      <div className="home2">
        <img src={vg} alt="victor graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nihil a similique repellendus deserunt dolorem, iste aperiam cumque
            quod dolorum assumenda fuga dolores molestiae blanditiis eveniet
            iure laudantium cupiditate maxime.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            nihil a similique repellendus deserunt dolorem, iste aperiam cumque
            quod dolorum assumenda fuga dolores molestiae blanditiis eveniet
            iure laudantium cupiditate maxime. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Delectus, expedita. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Delectus sint perferendis
            nulla mollitia voluptates? Soluta ratione explicabo enim numquam
            recusandae sequi, quibusdam repudiandae quaerat accusantium,
            adipisci, laboriosam molestiae ipsa voluptas!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
