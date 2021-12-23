import React from "react";
import { ListGroup } from "react-bootstrap";

const token = "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";
const baseUrl = `https://api.github.com/repos`;

export const allIssues = async (repo, page) => {
  const resp = await fetch(baseUrl+"/"+repo+"/issues?state=all&page="+page);
  if(resp.status===200){
    const data = await resp.json();
    return data;
  }
  
};

