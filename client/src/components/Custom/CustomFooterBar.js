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
/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Row, Container, Col } from 'reactstrap';

function CustomFooterBar() {
  return (
    <footer className="footer custom-footer-black">
      <Container>
        <Row>
          <Col md={3} className="text-center">
            <div className="credits ml-auto">
              <span className="copyright custom-text-secondary">
                © {new Date().getFullYear()} The Masiah. All Rights Reserved.
              </span>
            </div>
          </Col>
          <Col md={5} />
          <Col md={4}>
            <nav className="footer-nav" className="text-center">
              <ul className="mt-2 pl-0">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=pkr-footer"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com/?ref=pkr-footer"
                    target="_blank"
                  >
                    Terms of Services
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default CustomFooterBar;
