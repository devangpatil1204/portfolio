import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built 3+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> AI Engineer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Helped clients leverage AI to automate tasks, analyze data, and enhance
              decision-making. Built custom AI solutions using Python, TensorFlow, and
              OpenAI APIs.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
