import rounded from "./images/Ellipse 1.png";
import heroImg from "./images/Group 4.png"

const MainSection = () => {
  return (
    <>
    
    <div className="container my-5 my-sm-0">
      <div className="d-flex justify-content-between row align-items-center">
        <div className="col-md-6">
        <div className="position-relative ">
        <img className="position-absolute top-0 start-0 translate-middle" src={rounded} alt="" />
        </div>
       
          <h2>Fair price ride</h2>
          <h1 className="fw-bold ">Rent our <span className="text-warning">Scooter</span></h1>
          <p className="text-secondary fs-5">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        
        </div>
        <div className="col-md-6">
            <img className="img-fluid" src={heroImg} alt="" />
        </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};
export default MainSection;
