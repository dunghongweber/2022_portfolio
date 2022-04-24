import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="codingbg py-2 g5" id="experience">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3 text-center text-white p-2">
            <h2 className="fw-bold">Experience & Skills</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Skill sets */}
          <div className="col-lg-5 pb-5">
            <motion.ul
              className="list-group fw-bold"
              initial={{ x: "-50vh", opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <li className="list-group-item">
                <i className="bi bi-git"> </i> GitHub
              </li>
              <li className="list-group-item">
                <i className="bi bi-filetype-html"></i> HTML
              </li>
              <li className="list-group-item">
                <i className="bi bi-filetype-css"></i> CSS
              </li>
              <li className="list-group-item">
                <i className="bi bi-filetype-js"></i> Javascript
              </li>
              <li className="list-group-item">
                <i className="bi bi-filetype-jsx"></i> ReactJS
              </li>
              <li className="list-group-item">
                <i className="bi bi-filetype-jsx"></i> NodeJS
              </li>
            </motion.ul>
          </div>

          {/* Experience Col */}
          <div className="col-lg-5">
            <motion.div
              className="row"
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="col">
                <div className="card">
                  <h5 className="card-header expbg text-white">
                    Entry Level Programmer
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      Cache Valley Electric [OCT 2019 - DEC 2020]
                    </h5>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          SQL database administration, designed and worked with
                          databases on MS SQL Server.
                        </li>
                        <li className="list-group-item">
                          Created and developed 2 mobile apps, using Xalt
                          Hexagon as a rapid development platform, to help
                          standardize and simplify warehouse processes.
                        </li>
                        <li className="list-group-item">
                          Created command line programs to help extend the
                          mobile apps capability of manipulating data from a
                          third party ToolWatch API to the Internal Company
                          Database. Entity Framework 6 and .NET Core were used
                          to optimize this task.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="row py-3"
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="col">
                <div className="card">
                  <h5 className="card-header expbg text-white">
                    Programming Intern
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      Cache Valley Electric [OCT 2019 - NOV 2020]
                    </h5>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          SQL database administration, created SQL stored
                          procedures and queries.
                        </li>
                        <li className="list-group-item">
                          Used GML to design UI, handled XML HTTP Requests and
                          Responses to server.
                        </li>
                        <li className="list-group-item">
                          Implemented rapid application development by using
                          Xalt Hexagon.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
