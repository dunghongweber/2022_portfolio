import { motion } from "framer-motion";

const Intro = () => {
  return (
    //   intro section for big screen
    <div id="intro">
      <div className="bg fade-in d-none d-lg-block" id="bigintro">
        <div className="row py-5 justify-content-center">
          <div className="col-2 col-xl-2">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="dh-logo-round">
                <circle
                  id="Ellipse 1"
                  cx="115"
                  cy="101"
                  r="75"
                  fill="#030509"
                />
                <motion.path
                  id="d-letter"
                  d="M75.1754 140L75 50C146.348 59.5039 147.59 131.437 75.1754 140Z"
                  stroke="white"
                  stroke-width="12"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <g id="Group 1">
                  <motion.path
                    id="vert-right"
                    d="M145 168L145 86"
                    stroke="white"
                    stroke-width="10"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    id="vert-left"
                    d="M106 168L106 86"
                    stroke="white"
                    stroke-width="10"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    id="Vector 2"
                    d="M109.162 128.128H142.844"
                    stroke="white"
                    stroke-width="10"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="row py-5 justify-content-center">
          <div className="col-3 col-xl-3">
            <motion.div
              className="input-group mb-3"
              initial={{ opacity: 0, y: "-1000vh" }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-envelope-fill text-primary"></i>
              </span>

              <input
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="dunghong362@gmail.com"
                disabled
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* intro section for small screens */}
      <div className="d-lg-none d-md-block pt-5" id="bigintro">
        <div className="row py-5  justify-content-center">
          <div className="col-7 col-sm-7">
            <motion.div
              className="input-group mb-3"
              initial={{ y: "-1000vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-envelope-fill text-primary"></i>
              </span>

              <input
                type="text"
                className="form-control text-center"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value="dunghong362@gmail.com"
                disabled
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
