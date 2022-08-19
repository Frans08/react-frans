import logo from '../logo.svg';
import '../App.css';
import '../css/styles.css';
import '../css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Frans F</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#bio">Biografi</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
        <div className="container-lfluid py-5 text-center">
          <p className="fs-5 fst-italic mt-5">New Comer</p>
          <h1 className="display-4">Frans Febry</h1>
          <button className="btn btn-warning border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">
            Linkedin Profile
          </button>
        </div>
      </div>
      <div className="container text-center" id="bio">
          <h3 className="fs-bold fs-2">My Bio</h3>
          <p className="fs-6 fst-italic fw-light">
            Hallo perkenalkan nama saya Frans Febry.S.M, saat ini saya sedang belajar di eduwork,
            materi yang saya ambil adalah MERN kenapa saya mengambil kelas tersebut dikarenakan saya tertarik dengan javascript.</p>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12" id="wordpress">
              <h6 className="fs-5">wordpress</h6>
              <p className="fw-light">Create website for company</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" id="mdm">
              <h6 className="fs-5">MDM Ipad</h6>
              <p className="fw-light">I once set up an ipad for a company in Jakarta</p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12" id="volunteer">
              <h6 className="fs-5">Volunteer in ASIAN Games 2018</h6>
              <p className="fw-light">I am a volunteer in ASIAN Games 2018, I'm in the information sports division which handles the finished match scores.</p>
            </div>
          </div>

          <div className="container mt-5" id="contact">
            <h3 className="fs-bold fs-2 text-center mb-3">Contact</h3>
            <div className="card mx-auto" style={{width: "500px"}}>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Massage</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-warning border border-dark btn-sm shadow-sm text-white px-3 py-2">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
