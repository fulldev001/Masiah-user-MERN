import { useEffect, useState } from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap'
import api from 'utils/api'
import contactData from '../data/data.json'

function CustomFooter() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [content, setContent] = useState('')
  const [contactInfos, setContactInfos] = useState([])
  const [footerContent, setFooterContent] = useState({
    title: '',
    content: '',
    copyright: ''
  });

  const handleSubmit = () => {
    api.post('/newsletters/create', {
      firstname: firstname,
      lastname: lastname,
      content: content,
    })
  }
  useEffect(async () => {
    await setContactInfos((await api.get('/contactInfos/getAll')).data)
    await setFooterContent((await api.get('/footerContent/getEnabledFooterContent')).data)
  })
  return (
    <>
      <div className="section custom-section-footer">
        <Container>
          <Row>
            <Col md={5}>
              <h2 className="title text-light">Contact Info</h2>
              <h2 className="title custom-text-secondary mb-2">{footerContent.title}</h2>
              <p className="custom-text-secondary">
                {footerContent.content}
              </p>
              <p className="mt-5">
                <a href="/" className="custom-text-secondary">
                  <i className="fa fa-facebook" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="custom-text-secondary">
                  <i className="fa fa-twitter" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="custom-text-secondary">
                  <i className="fa fa-instagram" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="custom-text-secondary">
                  <i className="fa fa-linkedin" />
                </a>
              </p>
            </Col>
            <Col md={3}>
              <h3 className="title text-light">Get In Touch</h3>
              {contactInfos.map((ctInfo) => (
                <div key={ctInfo._id}>
                  <h5 className="text-light">
                    <i className={`fa fa-${ctInfo.icon}`} />
                    &nbsp;&nbsp;&nbsp; {ctInfo.title}
                  </h5>
                  <p className="custom-text-secondary">{ctInfo.content}</p>
                </div>
              ))}
              <Row className="mt-5">
                <Col md={6} className="mb-3">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Col>
                <Col md={12}>
                  <Input
                    type="textarea"
                    placeholder="Message"
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </Col>
                <Col md={12} className="mt-5">
                  <Button
                    color="dark"
                    className="btn-round"
                    onClick={handleSubmit}
                    outline
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CustomFooter
