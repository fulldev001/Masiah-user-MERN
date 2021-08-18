import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filepath } from 'config';

function SectionBlog(props) {
  const { storePosts } = props;
  return (
    <>
      <div className="section">
        <Container>
          <h2 className="title text-center">Blog</h2>
          <Row>
            {storePosts.length > 0 ? storePosts.map((post, i) => {
              if(post.status === 1) {
                return (
                  <Col md={4} key={i}>
                    <Card>
                      <CardImg
                        top
                        src={filepath + post.image}
                        alt="post"
                        className="p-1 border"
                      />
                      <CardBody>
                        <CardSubtitle>{post.parent.name} | {post.createdAt.split("T")[0]}</CardSubtitle>
                        <CardTitle className="h5 mb-3">{ post.title }</CardTitle>
                        <CardText>{post.summary}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                );
              } else {
                return ""
              }
            }) : ""}
          </Row>
          <h2 className="text-center"><Link className="rounded-0 btn btn-dark" to="/blog">View More</Link></h2>
        </Container>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  storePosts: state.blog.posts
});
export default connect(mapStateToProps, {
  
})(SectionBlog);
