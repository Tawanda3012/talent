import { useState } from "react";

const SkillsData = () => {
  const [skillsData] = useState([
    {
      icon: require("../Assets/Images/skill.png"),
      id: 1
    },
    {
      name: "Styled Components",
      icon: require("../Assets/Images/skill1.png"),
      id: 2
    },
    {
      name: "NexJS",
      icon: require("../Assets/Images/skill3.png"),
      id: 3
    },
    {
      name: "Amp",
      icon: require("../Assets/Images/skill3.png"),
      id: 4
    },
    {
      name: "Bootstrap",
      icon: require("../Assets/Images/skill4.png"),
      id: 5
    },
    {
      name: "Figma",
      icon: require("../Assets/Images/skill5.png"),
      id: 6
    },
    {
      name: "Redux",
      icon: require("../Assets/Images/skill6.png"),
      id: 7
    },
    {
      name: "ReactJS",
      icon: require("../Assets/Images/skill7.png"),
      id: 8
    },
    {
      name: "GraghQL",
      icon: require("../Assets/Images/skill8.png"),
      id: 9
    },
    {
      name: "Bootstrap",
      icon: require("../Assets/Images/skill4.png"),
      id: 10
    },
    {
      name: "Figma",
      icon: require("../Assets/Images/skill5.png"),
      id: 11
    },
    {
      name: "Redux",
      icon: require("../Assets/Images/skill6.png"),
      id: 12
    },
    {
      name: "ReactJS",
      icon: require("../Assets/Images/skill7.png"),
      id: 13
    },
    {
      name: "GraghQL",
      icon: require("../Assets/Images/skill8.png"),
      id: 14
    },
    {
      name: "GraghQL",
      icon: require("../Assets/Images/skill8.png"),
      id: 15
    },
  ])

  return (
    <div className="wrapper">
      {
        skillsData.map((skill) => (

          <div className="box" key={skill.id}>
            <img src={skill.icon} alt={skill.name} className="img-fluid" />
          </div>

        ))
      }

    </div>
  );
}

export default SkillsData;

