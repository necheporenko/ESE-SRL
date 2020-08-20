import React from 'react';
import { Date, RichText } from 'prismic-reactjs';
import { FormattedMessage } from 'react-intl';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Link from '../components/LocalizedLink';
import BlogSidebar from '../components/BlogSidebar';

import usePagination from '../utils/usePagination';

const POSTS_PER_PAGE = 5;

const NewsPage = ({ pageContext }) => {
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    pageContext.allNews,
    POSTS_PER_PAGE
  );

  return (
    <Layout title={{ id: 'news.seoTitle' }} isPageTitle>
      <div className="clearfix">
        <div className="sidebar ttm-bgcolor-white clearfix">
          <div className="container-xl">
            {/* row */}
            <div className="row">
              <div className="col-lg-9 content-area">
                {/* ttm-service-single-content-are */}
                {currentData().map(({ node }, index) => (
                  <article className="post ttm-blog-classic clearfix" key={index}>
                    {/* post-featured-wrapper */}
                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                      <div className="ttm-post-featured">
                        <Img
                          fluid={node.imageSharp.childImageSharp.fluid}
                          alt={RichText.asText(node.title)}
                        />
                      </div>
                    </div>
                    {/* post-featured-wrapper end */}
                    {/* ttm-blog-classic-content */}
                    <div className="ttm-blog-classic-content">
                      <div className="ttm-post-entry-header">
                        <div className="post-meta">
                          <span className="ttm-meta-line byline">
                            <i className="fa fa-user" />
                            By {node.author}
                          </span>
                          {node.date && (
                            <span className="ttm-meta-line entry-date">
                              <i className="fa fa-calendar" />
                              <time className="entry-date published" dateTime={node.date}>
                                {Date(node.date).toLocaleDateString('en-GB', {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric',
                                  timeZone: 'UTC',
                                })}
                              </time>
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="entry-content">
                        <header className="entry-header">
                          <h2 className="entry-title">
                            <Link to={`/news/${node._meta.uid}`}>
                              {RichText.asText(node.title)}
                            </Link>
                          </h2>
                        </header>
                        <div className="ttm-box-desc-text">
                          <p>
                            {RichText.asText(node.content).length > 300
                              ? RichText.asText(node.content).slice(0, 300) + '...'
                              : RichText.asText(node.content)}
                          </p>
                        </div>
                        {/* separator */}
                        <div className="separator">
                          <div className="sep-line mt-25 mb-25" />
                        </div>
                        {/* separator */}
                        <div className="ttm-blogbox-desc-footer">
                          <div className="ttm-blogbox-footer-readmore d-inline-block">
                            <Link
                              to={`/news/${node._meta.uid}`}
                              className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right"
                            >
                              <FormattedMessage id={'buttons.readMore'} />{' '}
                              <i className="ti ti-angle-double-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ttm-blog-classic-content end */}
                  </article>
                ))}

                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="ttm-pagination">
                      <button className="next page-numbers" onClick={() => prev()}>
                        <i className="ti ti-arrow-left" />
                      </button>

                      {[...Array(maxPage).keys()].map((number) => (
                        <button
                          key={number}
                          className={
                            number + 1 === currentPage ? 'page-numbers current' : 'page-numbers'
                          }
                          onClick={() => jump(number + 1)}
                        >
                          {number + 1}
                        </button>
                      ))}

                      <button className="next page-numbers" onClick={() => next()}>
                        <i className="ti ti-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
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

export default NewsPage;
