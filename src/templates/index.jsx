import React from 'react';
import { graphql } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Link from '../components/LocalizedLink';
import BussinessUnits from '../components/BusinessUnits';

import image from '../assets/images/bg-image/slider-mainbg-003.jpg';
import imageCustomer1 from '../assets/images/customers/cre-logo.png';
import imageCustomer2 from '../assets/images/customers/ende-andina-logo.png';
import imageCustomer3 from '../assets/images/customers/ende.png';
import imageCustomer4 from '../assets/images/customers/gobernacion-logo.png';
import imageCustomer5 from '../assets/images/customers/tde-logo.png';
import imageCustomer6 from '../assets/images/customers/valle-hermoso-logo.png';

var slick_slider = {
  dots: false,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 2000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
      },
    },
  ],
};

const IndexPage = ({ data }) => {
  const prismicAllProjectsData = data.prismic.allProjects.edges;
  const prismicAllArticlesData = data.prismic.allArticles.edges;

  return (
    <Layout title={{ id: 'home.seoTitle' }} isMainPage>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div id="Home_banner2" className="carousel carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="view">
                    <img className="d-block w-100" src={image} alt="Second slide" />
                  </div>

                  <div className="carousel-caption">
                    <div className="container-xl d-flex">
                      <div className="carousel-caption-inner">
                        <h5 className="ttm-textcolor-skincolor">
                          <FormattedMessage id={'home.fsH5'} />
                        </h5>

                        <h2 className="ttm-textcolor-darkgrey">
                          <FormattedMessage
                            id={'home.fsH2'}
                            values={{
                              colored: (chunks) => (
                                <strong className="ttm-textcolor-skincolor">{chunks}</strong>
                              ),
                            }}
                          />
                        </h2>

                        <p className="text">
                          <FormattedMessage id={'home.fsP'} />
                        </p>

                        <p>
                          <Link
                            to="/about-us/"
                            className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3"
                          >
                            <FormattedMessage id={'buttons.readMore'} />
                          </Link>
                          <Link
                            to="/contact-us/"
                            className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey"
                          >
                            <FormattedMessage id={'menu.contactUs'} />
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service-section */}
      <BussinessUnits />
      {/* service-section end*/}

      {/* our-partner-section */}
      <section className="ttm-row our-partner-section ttm-bgcolor-skincolor res-991-mt-0 res-991-p-0 clearfix">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 text-center">
              <Slider
                className="row slick_slider ttm-boxes-spacing-30px"
                {...slick_slider}
                slidesToShow={6}
                variableWidth
              >
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer1} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer2} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer3} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer4} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer5} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer6} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer1} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer2} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer3} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer4} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer5} alt="image" />
                    </div>
                  </div>
                </div>
                <div className="ttm-box-col-wrapper">
                  <div className="client-box ttm-box-view-boxed-logo">
                    <div className="client">
                      <img className="img-fluid" src={imageCustomer6} alt="image" />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* our-partner-section end */}

      {/* blog-section */}
      <section className="ttm-row blog-section clearfix">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              {/* section title */}
              <div className="section-title text-center with-desc clearfix">
                <div className="title-header">
                  <h5>
                    <FormattedMessage id={'home.4s.subtitle'} />
                  </h5>
                  <h2 className="title">
                    <FormattedMessage
                      id={'home.4s.title'}
                      values={{
                        colored: (chunks) => <span>{chunks}</span>,
                      }}
                    />
                  </h2>
                </div>
              </div>
              {/* section title end */}
            </div>
          </div>
          <Slider
            className="row slick_slider ttm-boxes-spacing-30px"
            {...slick_slider}
            slidesToShow={3}
          >
            {prismicAllArticlesData.map(({ node }, index) => (
              <div className="ttm-box-col-wrapper" key={index}>
                <div className="featured-imagebox featured-imagebox-blog">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <Img
                      fluid={node.imageSharp.childImageSharp.fluid}
                      alt={RichText.asText(node.title)}
                    />
                    <div className="ttm-blog-overlay-iconbox">
                      <Link to={`/news/${node._meta.uid}`}>
                        <i className="ti ti-plus" />
                      </Link>
                    </div>
                    <div className="ttm-box-view-overlay" />
                  </div>
                  <div className="featured-content">
                    {/* featured-content */}
                    {node.date && (
                      <div className="ttm-box-post-date">
                        {/* ttm-box-post-date */}
                        <span className="ttm-entry-date">
                          <time className="entry-date" dateTime={node.date}>
                            {Date(node.date).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              timeZone: 'UTC',
                            })}
                            <span className="entry-month entry-year">
                              {Date(node.date).toLocaleDateString('en-GB', {
                                month: 'short',
                                timeZone: 'UTC',
                              })}
                            </span>
                          </time>
                        </span>
                      </div>
                    )}
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <Link to={`/news/${node._meta.uid}`}>{RichText.asText(node.title)}</Link>
                      </h5>
                    </div>
                    <Link
                      to={`/news/${node._meta.uid}`}
                      className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                    >
                      <FormattedMessage id={'buttons.readMore'} />{' '}
                      <i className="ti ti-angle-double-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* blog-section end */}

      {/* portfolio-section */}
      <section className="ttm-row bottomzero-padding-section  ttm-bg ttm-bgimage-yes bg-img5 ttm-bgcolor-skincolor clearfix">
        <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
        <div className="container-xl pb-5 res-991-pb-0">
          <div className="row align-items-center ttm-textcolor-white">
            <div className="col-lg-5 res-991-text-center">
              <div className="section-title style3 mb-0 clearfix">
                <div className="title-header mb-0">
                  <h3 className="title">
                    <FormattedMessage id={'home.5s.title'} />
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-5 res-991-text-center"></div>
            <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
              <Link
                to="/projects/"
                className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white"
              >
                <FormattedMessage id={'buttons.readMore'} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="ttm-row mt-10 zero-padding-section clearfix c-mp-projects">
        <div className="container-fluid p-0">
          <Slider
            className="row slick_slider ttm-boxes-spacing-10px"
            {...slick_slider}
            slidesToShow={5}
          >
            {prismicAllProjectsData.map(({ node }, index) => (
              <div className="ttm-box-col-wrapper h-100" key={index}>
                {/* featured-imagebox-services */}
                <div className="featured-imagebox featured-imagebox-services style1">
                  <div className="featured-thumbnail">
                    {/* featured-thumbnail */}
                    <Img
                      fluid={node.imageSharp.childImageSharp.fluid}
                      alt={RichText.asText(node.title)}
                    />
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title">
                      {/* featured-title */}
                      <h5>
                        <Link to="/projects/">{RichText.asText(node.title)}</Link>
                      </h5>
                    </div>

                    <Link
                      className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2"
                      to="/projects/"
                    >
                      <FormattedMessage id={'buttons.readMore'} />{' '}
                      <i className="ti ti-angle-double-right" />
                    </Link>
                  </div>
                </div>
                {/* featured-imagebox-services */}
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* process-section end */}
    </Layout>
  );
};

export const query = graphql`
  query($lang: String!) {
    prismic {
      allArticles(first: 10, lang: $lang, sortBy: date_DESC) {
        edges {
          node {
            _meta {
              uid
            }
            title
            date
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 395, maxHeight: 282) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allProjects(first: 10, lang: $lang) {
        edges {
          node {
            title
            description
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 405, maxHeight: 270) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            _meta {
              id
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
