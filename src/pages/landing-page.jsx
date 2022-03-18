import { Link } from "react-router-dom";
export function LandingPage() {
  return (
    <div>
      <div className="landing-page-container">
        <div className="banner-container">
          <div className="flex-col-center">
            <div>
              <p className="banner-text">WE&nbsp;SELL LIFESTYLE</p>
            </div>
            <small className="sub-headings">Flat&nbsp;30%&nbsp;Off</small>
            <div className="landing-page_btn flex-wrap">
              <a
                className="documentation-link landing-page-btn_primary"
                href="#category"
              >
                Shop&nbsp;Now
              </a>
              <a
                className="landing-page-link landing-page-btn_secondary"
                href="#services"
              >
                Our&nbsp;Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="category">
        <div className="flex-center">
          <h2 className="headings">Choose Category</h2>
        </div>
      </div>
      <div className="landing-page-secondary flex-center">
        <div className="category_container">
          <h2 className="headings">Gadgets Collection</h2>
          <div className="gadgets_container landing-images">
            <Link to="pages/products.html">
              {" "}
              <img
                src="https://i.ibb.co/W2cSP4y/Several-smart-phones-with-large-touch-screens-and-two-digital-tablets-are-placed-in-a-pile-All-brand.jpg"
                className="category-images"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="category_container">
          <h2 className="headings">Mens Collection</h2>
          <div className="mens_container landing-images">
            <Link to="pages/products.html">
              <img
                src="https://i.ibb.co/tLDzkxW/Mens-suits-in-different-colors-hanging-on-hanger-in-a-retail-clothes-store-close-up.jpg"
                className="category-images"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="category_container">
          <h2 className="headings">Kids Collection</h2>
          <div className="kids_container landing-images">
            <Link to="pages/products.html">
              <img
                src="https://i.ibb.co/LdG2zYs/Cute-happy-little-girl-embracing-teddy-bear-Pretty-female-kid-at-home-sitting-on-sofa-with-her-favor.jpg"
                className="category-images"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="category_container">
          <h2 className="headings">Women Collection</h2>
          <div className="women_container landing-images">
            <Link to="pages/products.html">
              <img
                src="https://i.ibb.co/XD8q0Bj/Side-view-of-calm-young-adult-girl-standing-near-wardrobe-choosing-stylish-clothes-compared-trendy-o.jpg"
                className="category-images"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-center">
        <h2 className="headings">Our Services</h2>
      </div>
      <div id="services"></div>
      <div className="landing-page-secondary flex-center">
        <div className="services category_container">
          <h2 className="headings">Best Quality</h2>
          <div className="services_best-quality landing-images">
            <img
              src="https://i.ibb.co/GJZjxMX/Gold-and-silver-stars-on-white-background.jpg"
              className="category-images"
              alt=""
            />
          </div>
        </div>
        <div className="services category_container">
          <h2 className="headings">Best Offers</h2>
          <div className="services_best-offer landing-images">
            <img
              src="https://i.ibb.co/JQ64Rnm/A-Satisfied-Customer-Is-The-Best-Business-Strategy-of-All.jpg"
              className="category-images"
              alt=""
            />
          </div>
        </div>
        <div className="services category_container">
          <h2 className="headings">With Security</h2>
          <div className="services_best-security landing-images">
            <img
              src="https://i.ibb.co/kXbMgp1/Fingerprint-Computer-Technology-Cyber-Security.jpg"
              className="category-images"
              alt=""
            />
          </div>
        </div>
        <div className="services category_container">
          <h2 className="headings">Free Shipping</h2>
          <div className="services_free-shiping landing-images">
            <img
              src="https://i.ibb.co/SxVHf1N/istockphoto-183322339-612x612.jpg"
              className="category-images"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
