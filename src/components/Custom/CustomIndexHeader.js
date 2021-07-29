import React from 'react';

// reactstrap components
import { Button, Container } from 'reactstrap';

// core components

function CustomIndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            'url(' + require('assets/img/yoga-banner.jpg').default + ')'
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="custom-presentation-title">
                LET THE LIGHT OF YOUR HEART ENGULF YOU
              </h1>
              {/* <div className="fog-low">
                <img
                  alt="..."
                  src={require('assets/img/fog-low.png').default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require('assets/img/fog-low.png').default}
                />
              </div> */}
            </div>
            <h2 className="presentation-subtitle text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              pellentesque ex vel mauris gravida dapibus. Praesent posuere velit
              arcu, at viverra arcu porttitor sed.
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              'url(' + require('assets/img/clouds.png').default + ')'
          }}
        />
        <h6 className="category custom-category-absolute">
          {/* <Button className="btn-round" color="warning" outline>
            Donate for NGO
          </Button> */}
        </h6>
      </div>
    </>
  );
}

export default CustomIndexHeader;
