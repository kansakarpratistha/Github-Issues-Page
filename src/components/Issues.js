import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import ClosedIssues from "./ClosedIssues";
import { allIssues, closedIssues, openIssues } from "./IssuesFetch";
import OpenIssues from "./OpenIssues";
import "./css/style.css";
import { CommentIcon, IssueOpenedIcon } from "@primer/octicons-react";

const Issues = (props) => {
  const data = props.data;
  const [repo, setRepo] = React.useState("facebook/react");
  return (
    <>
      {data.length > 0 ? (
        data.map((issue) => {
          return (
            <div key={issue.id} className="issue-item">
              {issue.state === "open" ? (
                <OpenIssues issue={issue} repo={repo} key={issue.id} />
              ) : (
                <ClosedIssues issue={issue} repo={repo} key={issue.id} />
              )}
              <div className="flex-shrink-0 issue-details">
                <span className="flex-shrink-0"></span>
                <span className="flex-shrink-0">
                  {issue.assignee ? (
                    <div className="avatar-stack flex-shrink-0">
                      <div className="avatar-stack-body">
                        <a
                          className="avatar-user"
                          href={issue.assignee.url}
                          target="_blank"
                        >
                          <img src={issue.assignee.avatar_url} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </span>
                <span className="flex-shrink-0">
                  {issue.comments > 0 ? (
                    <a
                      className="comment"
                      href={issue.comments_url}
                      target="_blank"
                    >
                      <CommentIcon size={16} />
                      <span>{issue.comments}</span>
                    </a>
                  ) : (
                    <></>
                  )}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="no-match">
          <IssueOpenedIcon size={24} style={{ color: "#57606a" }} />
          <h3>No results matched your search.</h3>
          <p>
            You could search <a href="/search">all of GitHub</a> or try an{" "}
            <a href="/search/advanced">advanced search</a>.
          </p>
        </div>
      )}
    </>
  );
};

export default Issues;
