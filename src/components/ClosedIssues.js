import React from "react";
import { ListGroup } from "react-bootstrap";
import { IssueClosedIcon } from "@primer/octicons-react";

const ClosedIssues = (props) => {
  const issue = props.issue;
  let closedAt = Math.floor((new Date() - new Date(issue.closed_at)) / 1000);
  return (
    <>
      <div className="issue-icon-container">
        <IssueClosedIcon size={16} />
      </div>
      <div className="issue-body">
        <a className="repo-name" href={issue.repository_url} target='_blank'>{props.repo}</a>
        <a className="issue-title" href={issue.url} target='_blank'>{issue.title}</a>
        <div className="issues-small">
          <span className="opened-by">
            #{issue.number} by <a href={issue.user.url} target='_blank'>{issue.user.login} </a>
            was closed{" "}
            {closedAt > 60 ? (
              closedAt / 60 > 60 ? (
                closedAt / (60 * 60) > 24 ? (
                  closedAt / (60 * 60 * 24) > 30 ? (
                    <>on {new Date(issue.created_at).toDateString()}</>
                  ) : (
                    <>{Math.floor(closedAt / (60 * 60 * 24))} days ago</>
                  )
                ) : (
                  <>{Math.floor(closedAt / (60 * 60))} hours ago</>
                )
              ) : (
                <>{Math.floor(closedAt / 60)} minutes ago</>
              )
            ) : (
              <>{closedAt} seconds ago</>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default ClosedIssues;
