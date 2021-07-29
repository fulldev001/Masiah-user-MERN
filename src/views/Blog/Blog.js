import React, { useEffect } from 'react'
import PageHeader from 'components/Headers/PageHeader.js'
import BlogListing from './BlogListing'
import { connect } from 'react-redux';
import { getAllPostsAct } from "actions/blogActs";

function Blog(props) {
  const { storePosts, getAllPostsAct } = props
  useEffect(() => {
    getAllPostsAct()
  }, []);

  return (
    <>
      <PageHeader title="Blog" />
      <BlogListing props={props} />
    </>
  )
}

const mapStateToProps = state => ({
  storePosts: state.blog.posts
})
export default connect(mapStateToProps, {
  getAllPostsAct
})(Blog);
