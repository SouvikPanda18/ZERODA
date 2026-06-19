function Footer() {
  return (


<footer style={{ backgroundColor: "rgb(250,250,250)" }}>
  <div className="container border-top mt-5">

    <div className="row mt-5">
      {/* Logo */}
      <div className="col">
        <img
          src="media/images/logo.svg"
          alt="Logo"
          style={{ width: "50%" }}
        />
        <p className="mt-3">
          &copy; 2010 - 2026, Not Zerodha Broking Ltd. All rights reserved.
        </p>
      </div>

      {/* Account */}
      <div className="col">
        <p><strong>Account</strong></p>
        <a href="#" className="text-decoration-none d-block  mb-2">Open demat account</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Minor demat account</a>
        <a href="#" className="text-decoration-none d-block  mb-2">NRI demat account</a>
        <a href="#" className="text-decoration-none d-block  mb-2">HUF demat account</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Commodity</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Dematerialisation</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Fund transfer</a>
        <a href="#" className="text-decoration-none d-block  mb-2">MTF</a>
      </div>

      {/* Support */}
      <div className="col">
        <p><strong>Support</strong></p>
        <a href="#" className="text-decoration-none d-block  mb-2">Contact us</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Support portal</a>
        <a href="#" className="text-decoration-none d-block  mb-2">How to file a complaint?</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Status of your complaints</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Bulletin</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Circular</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Z-Connect blog</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Downloads</a>
      </div>

      {/* Company */}
      <div className="col">
        <p><strong>Company</strong></p>
        <a href="#" className="text-decoration-none d-block  mb-2">About</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Philosophy</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Press & media</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Careers</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Zerodha Cares (CSR)</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Zerodha.tech</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Open source</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Referral program</a>
      </div>

      {/* Quick Links */}
      <div className="col">
        <p><strong>Quick links</strong></p>
        <a href="#" className="text-decoration-none d-block  mb-2">Upcoming IPOs</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Brokerage charges</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Market holidays</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Economic calendar</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Calculators</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Markets</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Sectors</a>
        <a href="#" className="text-decoration-none d-block  mb-2">Gift Nifty</a>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="mt-5 small text-muted">
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
        Registration no.: INZ000031633. CDSL/NSDL: Depository services
        through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES
        portal. Mandatory details for filing complaints include Name, PAN,
        Address, Mobile Number, and E-mail ID.
      </p>

      <p>
        Investments in securities market are subject to market risks.
        Read all the related documents carefully before investing.
      </p>

      <p>
        Prevent unauthorised transactions in your account. Update your
        mobile number and email ID with your stock broker/depository
        participant to receive transaction alerts directly from exchanges
        and depositories.
      </p>

      <p>
        Fixed deposit products offered on this platform are third-party
        products and are regulated by the Reserve Bank of India (RBI).
      </p>
    </div>

    {/* Bottom Links */}
    <div className="text-center mt-5 pb-4 small">
      <a href="#" className="text-muted text-decoration-none mx-3">NSE</a>
      <a href="#" className="text-muted text-decoration-none mx-3">BSE</a>
      <a href="#" className="text-muted text-decoration-none mx-3">MCX</a>
      <a href="#" className="text-muted text-decoration-none mx-3">MSEI</a>
      <a href="#" className="text-muted text-decoration-none mx-3">Terms & conditions</a>
      <a href="#" className="text-muted text-decoration-none mx-3">Policies & procedures</a>
      <a href="#" className="text-muted text-decoration-none mx-3">Privacy policy</a>
      <a href="#" className="text-muted text-decoration-none mx-3">Disclosure</a>
      <a href="#" className="text-muted text-decoration-none mx-3">For investor's attention</a>
      <a href="#" className="text-muted text-decoration-none mx-3">Investor charter</a>
      <a href="#" className="text-muted text-decoration-none mx-3">Sitemap</a>
    </div>

  </div>
</footer>

  )
}
export default Footer;