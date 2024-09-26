import myImage from './Group 1.png'

const Header = () => {
  return (
    <>
<div>
<nav className="navbar navbar-expand-lg d-flex">
  <div className="container">
<img src={myImage} alt="" />
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="mx-auto">
        <ul className="navbar-nav fs-5">
          <li className="nav-item">
            <a className="nav-link active border-bottom border-danger" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-sm-5" href="#">Services</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className='d-flex mb-3 mb-sm-0'> 
       <button className='btn fs-5 rounded-pill'>
        Login
       </button>
        <button className="btn btn-danger fs-5 rounded-pill" type="submit">Book Scooter</button>
      </div>
    </div>
  </div>
</nav>

</div>

  
    </>
  );
};
export default Header;
