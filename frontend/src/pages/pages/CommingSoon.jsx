import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
const CommingSoon = () => {
  return (
    <div>
      <Helmet>
        <title>Comming Soon</title>
      </Helmet>
      <section className='comming-soon'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link to='/'><img src="http://sbtechnosoft.com/recruitepro/images/logo.png" alt="Logo" /></Link>
            </div>
            <div className="col-6">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a> </li>
                <li><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://www.google.com/" target="_blank"><i class="fa-brands fa-google"></i></a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
              </ul>
            </div>
            <div className="col-12">
              <h1>COMING SOON</h1>
              <p>WEBSITE CURRENTLY UNDER CONSTRUCTION</p>
              <div className="time">
                <div className='hours'>
                  <span>00</span>
                  <p>Hours</p>
                </div>
                <div className='minutes'>
                  <span>00</span>
                  <p>Minutes</p>
                </div>
                <div className='seconds'>
                  <span>00</span>
                  <p>Seconds</p>
                </div>
              </div>
              <div>
                <input type="email" placeholder='your @email address' />
                <button>SUBMIT</button>

              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px",position:"relative" }} className="copyright-wrapper">
          <div className="container">
            <p>© Copyright
              <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript">
                var d=new Date();
                document.write(d.getFullYear());
              </script>2023
              Recruite Pro | All Rights Reserved.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default CommingSoon