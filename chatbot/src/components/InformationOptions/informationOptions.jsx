import React from "react";

import "./informationOptions.css";

const informationOptions = (props) => {
    const options = [
      { text: "Projects", handler: props.actionProvider.handleProjects, id: 1 },
      { text: "Work experience", handler: props.actionProvider.handleWorkExperience, id: 2 },
      { text: "Contact information", handler: props.actionProvider.handleContact, id: 3 },
      { text: "Courses taken", handler: props.actionProvider.handleCourses, id: 4 },
      { text: "More about Tony", handler: props.actionProvider.handlePersonal, id: 5 },
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
};
  
export default informationOptions;