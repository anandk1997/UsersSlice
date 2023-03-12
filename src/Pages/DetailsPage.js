import React from "react";
import Sidebar from "./../Components/Sidebar";
import Header from "../Components/Header";

const DetailsPage = ({ children, Page, PageName }) => {
  return (
    <>
      <div className="d-flex pt-5 ps-5 p">
        <Sidebar Page={Page} />
        <div className="w-100">
          <Header PageName={PageName} />
          {children}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
