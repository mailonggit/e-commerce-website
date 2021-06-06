import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div
      className="Footer"
      style={{ backgroundColor: "aquamarine", marginTop: "30px" }}
    >
      {/* Footer */}
      <footer className="page-footer font-  small blue pt-4">
        {/* Footer Links */}
        <div className="container-fluid text-center text-md-left">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-6 mt-md-0 mt-3">
              {/* Content */}
              <h5 className="text-uppercase">ONLINEstore</h5>
              <p>TOP 1 QUALITY ONLINE MOBILE STORE</p>
            </div>
            {/* Grid column */}
            <hr className="clearfix w-100 d-md-none pb-3" />
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://onlinestore.co m/"> onlstore.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer;
