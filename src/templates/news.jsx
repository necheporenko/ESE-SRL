import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import BlogSidebar from '../components/BlogSidebar';

import imageNews from '../assets/images/news/finergy2019.jpg';

const NewsPage = () => {
  return (
    <Layout title="News" isPageTitle>
      <div className="clearfix">
        <div className="sidebar ttm-bgcolor-white clearfix">
          <div className="container-xl">
            {/* row */}
            <div className="row">
              <div className="col-lg-9 content-area">
                {/* ttm-service-single-content-are */}
                {[1, 2, 3, 4].map((item, index) => (
                  <article className="post ttm-blog-classic clearfix" key={index}>
                    {/* post-featured-wrapper */}
                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                      <div className="ttm-post-featured">
                        <img className="img-fluid w-100" src={imageNews} alt="post-01" />
                      </div>
                    </div>
                    {/* post-featured-wrapper end */}
                    {/* ttm-blog-classic-content */}
                    <div className="ttm-blog-classic-content">
                      <div className="ttm-post-entry-header">
                        <div className="post-meta">
                          <span className="ttm-meta-line byline">
                            <i className="fa fa-user" />
                            By Admin
                          </span>
                          <span className="ttm-meta-line entry-date">
                            <i className="fa fa-calendar" />
                            <time
                              className="entry-date published"
                              dateTime="2018-07-28T00:39:29+00:00"
                            >
                              July 28, 2020
                            </time>
                          </span>
                        </div>
                      </div>
                      <div className="entry-content">
                        <header className="entry-header">
                          <h2 className="entry-title">
                            <Link to="/article/">
                              ESE presents stand at Finergy 2019; He received the "Molino
                              Chiquitano" award
                            </Link>
                          </h2>
                        </header>
                        <div className="ttm-box-desc-text">
                          <p>
                            For the third consecutive year, ESE participated in the International
                            Energy Fair (Finergy 2019). During this version, held on the third floor
                            of the Marriott hotel, the company received the "Chiquitano mill" award
                            as the best stand of the electricity sector, among some 31 participating
                            companies...
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
                              to="/article/"
                              className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right"
                            >
                              Read More <i className="ti ti-angle-double-right" />
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
                      <span className="page-numbers current">1</span>
                      <a className="page-numbers">2</a>
                      <a className="next page-numbers">
                        <i className="ti ti-arrow-right" />
                      </a>
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
