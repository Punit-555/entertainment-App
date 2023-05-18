import React from "react";
import './footer.css';
import twitter from '../../Assets/images/twitter.png';
import facebook from '../../Assets/images/facebook.png';
import linkedin from '../../Assets/images/linkedin.png';


const FooterComponents = () => {
  return (
    <>
      <div className="bg-dark">
        <footer
          className="text-center text-white footer-comp"
                  >
          <div className="container">
            <section className="mt-2">
              <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/#!" className="text-white">
                      About us
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/#!" className="text-white">
                      Products
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/#!" className="text-white">
                      Awards
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/#!" className="text-white">
                      Help
                    </a>
                  </h6>
                </div>

                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/#!" className="text-white">
                      Contact
                    </a>
                  </h6>
                </div>
              </div>
            </section>

            <hr className="mt-5" />

            {/* <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt distinctio earum repellat quaerat voluptatibus placeat
                    nam, commodi optio pariatur est quia magnam eum harum
                    corrupti dicta, aliquam sequi voluptate quas.
                  </p>
                </div>
              </div>
            </section> */}

            <section className="text-center mb-3">
              <a href="/" className="text-white me-4">
               <img src={twitter}  height={"25px"} width={"25px"} alt="icons"></img>
              </a>
              <a href="/" className="text-white me-4">
               <img src={facebook} height={"25px"} width={"25px"} alt="icons"></img>
              </a>
              <a href="/" className="text-white me-4">
              <img src={linkedin} height={"25px"} width={"25px"} alt="icons"/>
              </a>
             
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2020 Copyright:
            <a className="text-white" href="/https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
export default FooterComponents;
