import React from "react";
import { Container } from "react-bootstrap";
import IssuesBox from "./IssuesBox";
import SubNav from "./SubNav";
import Paginate from "./Paginate";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
const MainContainer = () => {
  const { currentPage } = useParams();
  return (
    <Container className="main">
      <Helmet>
          <title>Github | Issues</title>
        </Helmet>
      <SubNav />
      <IssuesBox page={currentPage}/>
      <Paginate page={currentPage}/>
    </Container>
  );
};

export default MainContainer;
