import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./">Service</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="./">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Section - Banner */}
      <section className="section-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 pt-5">
              <div className="col-md-12 main_search_outer">
                <h3>Jindal Saw private limited...</h3>
                <div className="row">
                  <div className="col-md-4 mb-2">
                    <div className="form-group">
                      <label htmlFor="Type">Enter Name</label>
                      <input type="text" className="form-control form-control-lg form-control-a" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="form-group">
                      <label htmlFor="Type">Experience</label>
                      <select className="form-control form-control-lg form-control-a" id="Type">
                        <option value="0">---Select---</option>
                        <option value="1">0+ to 1 Year</option>
                        <option value="2">1+ to 2 Years</option>
                        <option value="3">2+ to 5 Years</option>
                        <option value="4">5+ to 7 Years</option>
                        <option value="5">7+ to 10 Years</option>
                        <option value="6">10+ to 15 Years</option>
                        <option value="7">More than 15 Years</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="form-group">
                      <label htmlFor="Type">Location</label>
                      <input type="text" className="form-control form-control-lg form-control-a" placeholder="" />
                    </div>
                  </div>
                  <div className="col-sm-6 text-left">
                    <button type="submit" className="btn btn-b">
                      <span className="fa fa-search" aria-hidden="true"></span> Advance Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 pt-3">
              <div className="col-xl-10 offset-xl-1 banner_right_up text-center">
                <a href="./" className="btn btn-b w-100">
                  <img src="images/icons/1.png" alt="icon" style={{ width: '28px' }} className="mr-2" />
                  Free Registration in Jindalsaw private limited for internship
                </a>
                <span className="orbdr1">or</span>
                <a href="./" className="btn btn-outline-light w-75 btn-lg">
                  <img src="images/icons/2.png" alt="icon" style={{ width: '28px' }} className="mr-2" />
                  Sign In
                </a>
              </div>
              <div className="col-xl-10 offset-xl-1 text-center banner_right_up mt-2 p-3">
                <img src="images/icons/3.png" alt="icon" style={{ width: '34px' }} className="mr-2 wow tada infinite animated animated animated" />
                <a href="./" style={{ fontSize: '24px', color: '#fff' }}>+91 0000000000</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h3>About Us</h3>
        <h3>Contact Us by Phone</h3>
        <h3>Connect with Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <h3>Be Safe and Happy</h3>
      </footer>
    </div>
  );
};

export default Home;

