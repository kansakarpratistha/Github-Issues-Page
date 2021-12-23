import {
  ChevronDownIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
} from "@primer/octicons-react";
import React from "react";
import Issues from "./Issues";
import { allIssues } from "./IssuesFetch";
import "./css/style.css";
import { Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const IssuesBox = (props) => {
  const [data, setData] = React.useState([]);
  const [repo, setRepo] = React.useState("facebook/react");
  const history = useLocation();
  const page=parseInt(props.page);  
  const openIssues = data.filter((issue) => issue.state === "open").length;
  const closedIssues = data.filter((issue) => issue.state === "closed").length;
  React.useEffect(() => {
    console.log(page);
    allIssues(repo, page).then((issues) => {
      setData(issues);
    });
  }, [history]);
  return (
    <div className="issues-box">
      <div className="issues-box-header">
        <div className="list-filter">
          <div className="list-header-toggle">
            <a>
              <IssueOpenedIcon size={16} />
              {openIssues} Open
            </a>
            <a style={{ marginLeft: "10px" }}>
              <IssueClosedIcon size={16} />
              {closedIssues} Closed
            </a>
          </div>
        </div>
        <div className="list-header-toggle d-flex">
          <Dropdown>
            <Dropdown.Toggle>
              Visibility
              <ChevronDownIcon size={16} />
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              Organization
              <ChevronDownIcon size={16} />
            </Dropdown.Toggle>
          
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              Sort
              <ChevronDownIcon size={16} />
            </Dropdown.Toggle>
          </Dropdown>
        </div>
      </div>
      <div className="issues-container">
        <Issues data={data} />
      </div>
    </div>
  );
};

export default IssuesBox;
