import React from "react";
import { ListGroup } from "react-bootstrap";
import { IssueOpenedIcon } from "@primer/octicons-react";
import IssueLabels from "./IssueLabels";

const OpenIssues = (props) => {
  const issue = props.issue;
  let openedAt = Math.floor((new Date() - new Date(issue.created_at)) / 1000);
  return (
    <>
      <div className="issue-icon-container flex-shrink-0">
        <IssueOpenedIcon size={16} />
      </div>
      <div className="issue-body">
        <a className="repo-name" href={issue.repository_url} target='_blank'>{props.repo}</a>
        <a className="issue-title" href={issue.url} target='_blank'>{issue.title}</a>
        <IssueLabels labels={issue.labels} />
        <div className="issues-small">
          <span className="opened-by">
            #{issue.number} opened{" "}
            {openedAt > 60 ? (
              openedAt / 60 > 60 ? (
                openedAt / (60 * 60) > 24 ? (
                  openedAt / (60 * 60 * 24) > 30 ? (
                    <>on {new Date(issue.created_at).toDateString()}</>
                  ) : (
                    <>{Math.floor(openedAt / (60 * 60 * 24))} days ago</>
                  )
                ) : (
                  <>{Math.floor(openedAt / (60 * 60))} hours ago</>
                )
              ) : (
                <>{Math.floor(openedAt / 60)} minutes ago</>
              )
            ) : (
              <>{openedAt} seconds ago</>
            )}{" "}
            by {" "}
            <a href={issue.user.url} target='_blank'>{issue.user.login}</a>
          </span>      
        </div>
      </div>
      
    </>
  );
};

export default OpenIssues;
