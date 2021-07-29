import React, { useEffect, useState } from 'react'
import PageHeader from 'components/Headers/PageHeader.js'
import {
  Button,
  Card,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap'
import contactData from '../../components/data/data.json'
import api from 'utils/api'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [contactInfos, setContactInfos] = useState([])
  useEffect(async () => {
    await setContactInfos((await api.get('/contactInfos/getAll')).data)
  })
  const handleSubmit = () => {
    api.post('/touchers/create', {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      content: content,
    })
  }
  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="filter" />
      <div className="main py-5">
        <div className="section contact-detail">
          <Container>
            <Row>
              {contactInfos.map((ctdata, i) => (
                <Col md="4" key={i}>
                  <div className="contact-box text-center">
                    <i class={`fa fa-${ctdata.icon}`}></i>
                    <h4>{ctdata.title}</h4>
                    <p>{ctdata.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div
          className="section contact-form py-5"
          style={{
            backgroundImage:
              'linear-gradient(#000000ba, #161616bf),url(' +
              require('assets/img/contact-us-bg.jpg').default +
              ')',
          }}
        >
          <Container>
            <Row>
              <Col>
                <h2 className="title text-white text-center d-block">
                  Get In Touch With Us
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg="8" className="mx-auto">
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="userName">Name</Label>
                        <Input
                          required
                          type="text"
                          name="name"
                          id="userName"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="userEmail">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="userEmail"
                          placeholder="Email-ID"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="userPhone">Phone</Label>
                    <Input
                      type="text"
                      name="phone"
                      id="userPhone"
                      placeholder="Your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="userSubject">Subject</Label>
                    <Input
                      type="text"
                      name="subject"
                      id="userSubject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="message">Want to Say :</Label>
                    <Input
                      type="textarea"
                      name="text"
                      rows="5"
                      id="message"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="text-center">
                    <Button
                      className="btn-square"
                      color="danger"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Contact
