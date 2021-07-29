/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import { connect } from 'react-redux';
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import CustomIndexNavbar from "components/Custom/CustomIndexNavbar";
import CustomIndexHeader from "components/Custom/CustomIndexHeader";
import SectionAboutUs from "./home-sections/SectionAboutUs";
import SectionOurTeam from "./home-sections/SectionOurTeam";
import SectionBlog from "./home-sections/SectionBlog";
import SectionCollaborate from "./home-sections/SectionCollaborate";
import SectionOurServices from "./home-sections/SectionOurServices";
import SectionJoinUs from "./home-sections/SectionJoinUs";
import CustomFooterBar from "components/Custom/CustomFooterBar";
import CustomFooter from "components/Custom/CustomFooter";
import { getAllPostsAct } from "actions/blogActs";

function Index(props) {
  const { storePosts, getAllPostsAct } = props;
  useEffect(() => {
    getAllPostsAct();
  }, []);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {

    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      {/* <CustomIndexNavbar />*/}
      <CustomIndexHeader /> 
      <div className="main my-2">
        <SectionAboutUs />
        <SectionOurTeam />
        <SectionBlog />
        {/* <SectionCollaborate /> */}
        <SectionOurServices />
        {/* <SectionJoinUs /> */}
        {/* <SectionButtons /> */}
        {/* <SectionNavbars /> */}
        {/* <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload /> */}
        {/* <CustomFooter />
        <CustomFooterBar /> */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  storePosts: state.blog.posts
});

export default connect(mapStateToProps, {
  getAllPostsAct 
})(Index);
