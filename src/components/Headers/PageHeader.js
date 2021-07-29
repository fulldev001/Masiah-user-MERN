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
import React from "react";

// reactstrap components

// core components

function PageHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(#0000009e,#cf8c295e),url(" + require("assets/img/yoga-banner2.jpg").default + ")",
        }}
        className="page-header page-header-small"
        data-parallax={true}
        ref={pageHeader}
      >
      <h1 className="text-white page-title">{props.title}</h1>
        <div className="filter" />

        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              'url(' + require('assets/img/clouds.png').default + ')'
          }}
        />
      </div>
    </>
  );
}

export default PageHeader;
