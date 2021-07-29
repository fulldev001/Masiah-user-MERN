import React, { useEffect, useState } from 'react'
import PageHeader from 'components/Headers/PageHeader.js'
import { Media, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import BillyAvatar from 'assets/img/faces/Billy.png'
import SimonAvatar from 'assets/img/faces/Simon.png'
import SueAvatar from 'assets/img/faces/Sue.png'
import WendyAvatar from 'assets/img/faces/Wendy.png'
import aboutImg from 'assets/img/yoga-sm-4.png'
import { filepath } from 'config'
import api from 'utils/api'

var imgStyle = {
  maxWidth: '135px',
  marginRight: '20px',
}

function AboutUs() {
  const [members, setMembers] = useState([])
  useEffect(async () => {
    await setMembers((await api.get("/teamMembers/getAll")).data);
  }, [])
  // const practionersData = [
  //   {
  //     name: 'John Doe',
  //     position: 'Integrative Wellness Consultant',
  //     avatar: SimonAvatar,
  //   },
  //   {
  //     name: 'Mike Doe',
  //     position: 'Doctor of Chiropractic',
  //     avatar: BillyAvatar,
  //   },
  //   {
  //     name: 'Jane Doe',
  //     position: 'Chiropractic Assistant',
  //     avatar: WendyAvatar,
  //   },
  //   {
  //     name: 'Karen Doe',
  //     position: 'Integrative Wellness Consultant',
  //     avatar: SueAvatar,
  //   },
  // ]
  return (
    <>
      <PageHeader title="About Us" />
      <div className="main">
        <Container>
          <Row>
            <Col md="7">
              <div className="about-company-contain">
                <h6>Our Center</h6>
                <h2 className="my-4 title">Welcome to Masiaha</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <Link
                  to="/contact-us"
                  className="my-4 btn btn-danger"
                  color="danger"
                >
                  Make An Appointment
                </Link>
              </div>

              <div className="meet-practioner-contain">
                <h2 className="title">Meet Our Experts</h2>

                {members.map((practioners, i) => (
                  <Media key="i" className="mb-4">
                    <Media left top href="#">
                      <Media
                        style={imgStyle}
                        object
                        src={filepath + practioners.avatar}
                        alt=" placeholder image"
                      />
                    </Media>
                    <Media body>
                      <Media heading>
                        {practioners.name}
                        <small className="d-block">
                          {practioners.position}
                        </small>
                      </Media>
                      <p>
                        {practioners.description}
                      </p>
                    </Media>
                  </Media>
                ))}
              </div>
            </Col>
            <Col md="5">
              <div className="aboutus_img d-block mt-3 mt-md-5 pt-md-5 text-right">
                <img
                  src={aboutImg}
                  className="img-fluid"
                  alt="About Masiaha Image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default AboutUs
