import React from "react";

const IssueLabels = (props) => {
  const labels = props.labels;
  return (
    <span className="labels">
      {labels.map((label) => {
        // return <a style={{backgroundColor: "#fbca04"}} className="issue-label"><p>{label.name}</p></a>;
        return <a style={{backgroundColor: `#${label.color}`}} href={label.url} target='_blank' className="issue-label" key={label.id}>{label.name}</a>;
      })}
    </span>
  );
};

export default IssueLabels;
