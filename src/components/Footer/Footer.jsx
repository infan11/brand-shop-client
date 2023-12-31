
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-neutral-content bg-black text-white">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Free Delivery</a>
    <a className="link link-hover">free license </a>
    <a className="link link-hover">Free servicing</a>
  
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;