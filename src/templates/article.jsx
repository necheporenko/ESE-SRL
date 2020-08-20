import React from 'react';
import { graphql } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';
import { FormattedMessage } from 'react-intl';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import Layout from '../components/Layout';
import BlogSidebar from '../components/BlogSidebar';

const NewsPage = ({ data, location: { href } }) => {
  const articleData = data.prismic.article;

  return (
    <Layout title={RichText.asText(articleData.title)} isPageTitle>
      <div className="clearfix">
        <div className="sidebar ttm-bgcolor-white clearfix">
          <div className="container-xl">
            {/* row */}
            <div className="row">
              <div className="col-lg-9 content-area">
                {/* ttm-service-single-content-are */}
                <article className="post ttm-blog-single clearfix">
                  {/* post-featured-wrapper */}
                  <div className="ttm-post-featured-wrapper">
                    <div className="ttm-post-featured">
                      <img
                        className="img-fluid w-100"
                        src={articleData.image.url}
                        alt={RichText.asText(articleData.title)}
                      />
                    </div>
                  </div>
                  {/* post-featured-wrapper end */}
                  {/* ttm-blog-classic-content */}
                  <div className="ttm-blog-single-content">
                    <div className="entry-content">
                      <div className="ttm-post-entry-header">
                        <div className="post-meta">
                          <span className="ttm-meta-line byline">
                            <i className="fa fa-user" />
                            By {articleData.author}
                          </span>
                          <span className="ttm-meta-line entry-date">
                            <i className="fa fa-calendar" />

                            <time className="entry-date published" dateTime={articleData.date}>
                              {Date(articleData.date).toLocaleDateString('en-GB', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                timeZone: 'UTC',
                              })}
                            </time>
                          </span>
                        </div>
                      </div>
                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line mt-3 mb-4" />
                      </div>
                      {/* separator */}
                      {RichText.render(articleData.content)}
                    </div>

                    {/* separator */}
                    <div className="separator">
                      <div className="sep-line mt-4 mb-4" />
                    </div>
                    {/* separator */}
                    <div className="clearfix">
                      <div className="social-icons square">
                        <ul className="list-inline mb-0 d-inline-block">
                          <FacebookShareButton title="Article" url={href}>
                            <li className="social-facebook">
                              <a>
                                <i className="fab fa-facebook-f" aria-hidden="true" />
                              </a>
                            </li>
                          </FacebookShareButton>

                          <TwitterShareButton title="Article" url={href}>
                            <li className="social-twitter">
                              <a>
                                <i className="fab fa-twitter" aria-hidden="true" />
                              </a>
                            </li>
                          </TwitterShareButton>

                          <LinkedinShareButton title="Article" url={href}>
                            <li className="social-linkedin">
                              <a>
                                <i className="fab fa-linkedin-in" aria-hidden="true" />
                              </a>
                            </li>
                          </LinkedinShareButton>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* ttm-blog-classic-content end */}
                </article>
                {/* ttm-service-single-content-are end */}
              </div>
              <div className="col-lg-3 widget-area">
                <BlogSidebar />
              </div>
            </div>
            {/* row end */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Article($uid: String!, $lang: String!) {
    prismic {
      article(lang: $lang, uid: $uid) {
        title
        date
        image
        author
        content
      }
    }
  }
`;

export default NewsPage;
