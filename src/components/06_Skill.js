import GitImg from "../assets/skills/git.png";
import HTMLImg from "../assets/skills/html5.png";
import CSSImg from "../assets/skills/css3.png";
import JSImg from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/reactjs.png";
import NodeJSImg from "../assets/skills/nodejs.png";

const Skills = () => {
  const imgList = [
    { img: GitImg, title: "GIT" },
    { img: HTMLImg, title: "HTML" },
    { img: CSSImg, title: "CSS" },
    { img: JSImg, title: "Javascript" },
    { img: ReactImg, title: "ReactJS" },
    { img: NodeJSImg, title: "NodeJS" },
  ];

  const skillSets = imgList.map((m, index) => {
    return (
      <div className="col-3" key={index}>
        <div className="card">
          <img src={m.img} className="card-img-top img_size" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">{m.title}</h5>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container" id="skills">
      <div className="row">{skillSets}</div>
    </div>
  );
};

export default Skills;
