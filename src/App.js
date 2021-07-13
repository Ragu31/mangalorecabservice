import './App.css';
import cnu from "./assets/img/cna.png";
import address from "./assets/img/add.jpg";
import contact from "./assets/img/contact.jpg";
import icon from "./assets/img/icon.jpg";
import whatsapp from "./assets/img/wat.png";
import call from "./assets/img/ca.png";

const App = () => {

  {/*
    const[msg, Setmsg] = useState({
      name:"",email:"",phone:"",message:""
    });

    //const [records, setRecords] = useState([]);

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        Setmsg({...msg, [name]:value})
        
    }
    
//
    //const handleSubmit = (e) => {
    //  e.preventDefault();
//
//    //  const newRecord = {...msg}
//
//    //  setRecords([...records, newRecord ])
//
//    // Setmsg({ name:"", email:"", phone:"", message:""});
//
//    //}
//

    const PostData = async (e) => {
      e.preventDefault();
      
      const { name, email, phone, message } = msg;

      const res = await fetch("/contact", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            name, email, phone, message 
          })
      });

      const data = await res.json();

      if( !name && !email && !phone && !message ){
        window.alert("please fill the required data");
      }

      else if(data.status === 422 || !data) {
        window.alert("message not sent");
        console.log("message not sent");
      
      } else {
        window.alert(`Dear ${name} message sent successfully, Thank you`);
        window.location.reload();
        console.log("message sent successfully");

      }
        
    }

    const handleSubmit = (e) => {
     e.preventDefault();

     Setmsg({ name:"", email:"", phone:"", message:""});
    }
  */}
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#contact">Book Your Cab Now <i className="callicon" class="fa fa-phone" aria-hidden="true"> <a href="tel:9663124664"> 9663124664  </a> </i> </a>
      
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div className="whatsapp_float">
    <a href="https://wa.me/919663124664" target="_blank"><img src={whatsapp} width="50px" className="whatsapp_float_btn" /></a>
  </div>
  <div className="call_float">
    <a href="tel:9663124664" ><img src={call} width="50px" className="whatsapp_float_btn" /></a>
  </div>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Hello, Welcome to</div>
        <div className="intro-heading text-uppercase">Mangalore Cab Service</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="tel:9663124664">Contact Us</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">On time every time</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-taxi fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Cab Services</h4>
          <p className="text-muted">We provide professional cab service. Experienced drivers with Hygine cabs.
                                    we also provide car rent service.
                                    Our service is just a call away.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-road fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Tours and travels</h4>
          <p className="text-muted">We heartily welcome you to an exotic and rejuvenating travel to places of your choice.
          We are ready to provide what is best for you with continuous support and safety to make your travel experiences memorable.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-plane fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Airport - pickup or drop</h4>
          <p className="text-muted">Airport - pickup or drop taxi services.
                                    Our sevice will be 24/7 available.
                                    We sanitize our car regularly. </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-car fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Car - Rent</h4>
          <p className="text-muted">We provide  24/7 car rent service.
          It is your one-stop destination for all self drive car rental needs,
          be it round trip, one way trip, weekly commute or monthly car subscription. </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-bed fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Hotel - Resevation</h4>
          <p className="text-muted">we also provide hotel reservation facility
          according to the need of our customer.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-car fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Decorated - Car for Wedding</h4>
          <p className="text-muted">We offer you the most reliable decorated luxury cars
                                    of your choice for weddings. </p>
        </div>
        
      </div>
    </div>
  </section>

  {/*
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
  */}
  
  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Mangalore Cab Service</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li >
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={cnu} alt="founder"/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Srinivas</h3>
                  <h5 className="subheading">(founder)</h5>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Hello myself Srinivas
                                            Welcome to Mangalore Cab Service.
                                            The company with the right fare.
                                            Travel securely with us.
                                            Our service will 24/7 available.  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={address} alt="address"/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Address</h4>
                  <h4 className="subheading">Details</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">NoG3 5th block Hariraj apartment Malemar Road, Derebail kottara chowki, near canara bank, Mangalore, Karnataka 575006</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={contact} alt="contact"/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Contact</h4>
                  <h4 className="subheading">Details</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Phone Number:9663124664 <br />
                                            Email Address: seenud92@gmail.com <br /></p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={icon} alt="icon"/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Mangalore Cab Service</h4>
                  <h4 className="subheading">24/7 available</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Our cars are well maintained, clean and properly sanitized. We care for you the most.Enjoy the new experience of reaching destinations.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Trusted
                  <br/>Taxi
                  <br/>Service!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
 {/*}
  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
            <h4>Kay Garland</h4>
            <p className="text-muted">Lead Designer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h4>Larry Parker</h4>
            <p className="text-muted">Lead Marketer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
            <h4>Diana Pertersen</h4>
            <p className="text-muted">Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>
  */}
  {/*
  <div className ="aboutpage">
    <div className="ap"> 
      About Us
    </div>
    <div className="aboutme">
    <img src="{cnu.jpg}" alt="wtf" />
    </div>

  </div>
 
  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Mangalore Cab service</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form method="POST"  onSubmit={handleSubmit} >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" name="name" type="text" autoComplete="off"
                  value={msg.name}
                  onChange={handleInputs}
                  placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" name="email" type="email" autoComplete="off" 
                  value={msg.email}
                  onChange={handleInputs}
                  placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" name="phone" type="number" autoComplete="off"
                  value={msg.phone}
                  onChange={handleInputs}
                  placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" name="message" autoComplete="off"
                  value={msg.message}
                  onChange={handleInputs}
                  placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" name="sendmessage" value="sendmessage" 
                onClick={PostData}
                type="submit" >Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

   */}
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Mangalore Cab Service 2021</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://wa.me/919663124664">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://wa.me/919663124664">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://wa.me/919663124664">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;

