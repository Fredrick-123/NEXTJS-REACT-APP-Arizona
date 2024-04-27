import SlickSlider from "./SlickSlider";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className="tag">Testimonial</span>
            <span className="title">
              {" "}
              Access capital that complements traditional Funding Options
            </span>
            <span className="des"> What people say about us</span>
          </div>
        </div>

        {/* slider */}
        <SlickSlider />
      </div>
    </div>
  );
};

export default Testimonial;
