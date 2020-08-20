import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FadeIn from 'react-fade-in';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CountUp from 'react-countup';
import { useIntl, FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import Link from '../components/LocalizedLink';

import imageNosotros1 from '../assets/images/pages/about-us/nosotros1.jpg';
import imageArturoVera from '../assets/images/pages/about-us/arturo-vera.jpg';
import imageAlumbrado from '../assets/images/pages/about-us/alumbrado.jpg';
import imageFachada from '../assets/images/pages/about-us/fachada.jpg';
import imagePlanta from '../assets/images/pages/about-us/planta-generacion-warnes.jpg';
import imageArg from '../assets/images/pages/about-us/arg.jpg';
import imageSam from '../assets/images/pages/about-us/sam.jpg';
import imageOrganigrama from '../assets/images/pages/about-us/organigrama.jpg';

const AboutUsPage = () => {
  const intl = useIntl();
  return (
    <Layout title={{ id: 'about.seoTitle' }} isPageTitle>
      {/* tab section */}
      <section className="ttm-row tab-section clearfix">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              {/* section title */}
              <div className="section-title text-center with-desc clearfix">
                <div className="title-header">
                  <h5>
                    <FormattedMessage id={'about.1s.subtitle'} />
                  </h5>
                  <h2 className="title">
                    <FormattedMessage
                      id={'about.1s.title'}
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
          {/* row end */}
          {/* row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="ttm-tabs text-center ttm-tab-style-classic style1">
                <Tabs defaultIndex={0}>
                  {/* tabs */}
                  <TabList className="tabs">
                    <Tab className="tab" title="Our History">
                      <span>
                        <i className="ttm-icon ti-user"></i>
                        <FormattedMessage id={'about.tab1'} />
                      </span>
                    </Tab>
                    <Tab className="tab" title="Philosophy of Life">
                      <span>
                        <i className="ttm-icon ti-cup"></i>
                        <FormattedMessage id={'about.tab2'} />
                      </span>
                    </Tab>
                    <Tab className="tab" title="Quality Policies">
                      <span>
                        <i className="ttm-icon ti-check-box"></i>{' '}
                        <FormattedMessage id={'about.tab3'} />
                      </span>
                    </Tab>
                    <Tab className="tab" title="Health, Safety and Evironmental Policies">
                      <span>
                        <i className="ttm-icon ti-shield"></i>
                        <FormattedMessage id={'about.tab4'} />
                      </span>
                    </Tab>
                    <Tab className="tab" title="Main Figures">
                      <span>
                        <i className="ttm-icon ti-target"></i>
                        <FormattedMessage id={'about.tab5'} />
                      </span>
                    </Tab>
                    <Tab className="tab" title="Organigrama">
                      <span>
                        <i className="ttm-icon ti-settings"></i>{' '}
                        <FormattedMessage id={'about.tab6'} />
                      </span>
                    </Tab>
                  </TabList>
                  <div className="box-shadow content-tab">
                    <FadeIn>
                      {/* Our History */}
                      <TabPanel>
                        <div className="content-inner">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="text-left">
                                <h3 className="title fs-30">
                                  <FormattedMessage id={'about.tab1.title'} />
                                </h3>
                                <FormattedMessage
                                  id={'about.tab1.content1'}
                                  values={{
                                    p: (chunks) => <p>{chunks}</p>,
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="grey-border res-991-mt-30 text-left">
                                {/* ttm_single_image-wrapper */}
                                <div className="ttm_single_image-wrapper with-border15">
                                  <img
                                    className="img-fluid grey-boder"
                                    src={imageNosotros1}
                                    title="single-img-three"
                                    alt="single-img-three"
                                  />
                                </div>
                                {/* ttm_single_image-wrapper end */}
                              </div>
                            </div>
                            <div className="col-12 text-left">
                              <FormattedMessage
                                id={'about.tab1.content2'}
                                values={{
                                  p: (chunks) => <p>{chunks}</p>,
                                }}
                              />
                              <div className="c-timeline">
                                <VerticalTimeline>
                                  <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#de6b00', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                    date="1980"
                                    dateClassName="c-timeline__date"
                                    iconStyle={{ background: '#de6b00', color: '#fff' }}
                                    icon={<i className="ttm-icon ti-star"></i>}
                                  >
                                    <img
                                      className="img-fluid grey-boder"
                                      src={imageArturoVera}
                                      title="single-img-three"
                                      alt="single-img-three"
                                    />
                                    <p>
                                      <FormattedMessage id={'about.tab1.timeline1'} />
                                    </p>
                                  </VerticalTimelineElement>
                                  <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#de6b00', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                    date="1980-1994"
                                    iconStyle={{ background: '#de6b00', color: '#fff' }}
                                    icon={<i className="ttm-icon ti-star"></i>}
                                  >
                                    <img
                                      className="img-fluid grey-boder"
                                      src={imageAlumbrado}
                                      title="single-img-three"
                                      alt="single-img-three"
                                    />
                                    <p>
                                      <FormattedMessage id={'about.tab1.timeline2'} />
                                    </p>
                                  </VerticalTimelineElement>
                                  <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#de6b00', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                    date="1994"
                                    iconStyle={{ background: '#de6b00', color: '#fff' }}
                                    icon={<i className="ttm-icon ti-star"></i>}
                                  >
                                    <img
                                      className="img-fluid grey-boder"
                                      src={imageFachada}
                                      title="single-img-three"
                                      alt="single-img-three"
                                    />
                                    <p>
                                      <FormattedMessage id={'about.tab1.timeline3'} />
                                    </p>
                                  </VerticalTimelineElement>
                                  <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#de6b00', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                    date="1994-2016"
                                    iconStyle={{ background: '#de6b00', color: '#fff' }}
                                    icon={<i className="ttm-icon ti-star"></i>}
                                  >
                                    <img
                                      className="img-fluid grey-boder"
                                      src={imagePlanta}
                                      title="single-img-three"
                                      alt="single-img-three"
                                    />
                                    <p>
                                      <FormattedMessage id={'about.tab1.timeline4'} />
                                    </p>
                                  </VerticalTimelineElement>
                                  <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#de6b00', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                    date="2016"
                                    iconStyle={{ background: '#de6b00', color: '#fff' }}
                                    icon={<i className="ttm-icon ti-star"></i>}
                                  >
                                    <img
                                      className="img-fluid grey-boder"
                                      src={imageArg}
                                      title="single-img-three"
                                      alt="single-img-three"
                                    />
                                    <p>
                                      <FormattedMessage id={'about.tab1.timeline5'} />
                                    </p>
                                  </VerticalTimelineElement>
                                  <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#de6b00', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                    date={`2016 - ${intl.formatMessage({
                                      id: 'about.tab1.timeline6.present',
                                    })}`}
                                    iconStyle={{ background: '#de6b00', color: '#fff' }}
                                    icon={<i className="ttm-icon ti-star"></i>}
                                  >
                                    <img
                                      className="img-fluid grey-boder"
                                      src={imageSam}
                                      title="single-img-three"
                                      alt="single-img-three"
                                    />
                                    <p>
                                      <FormattedMessage id={'about.tab1.timeline6'} />
                                    </p>
                                  </VerticalTimelineElement>
                                </VerticalTimeline>
                              </div>
                            </div>
                          </div>
                          {/* row end */}
                        </div>
                        {/* content-inner */}
                        {/* row end*/}
                      </TabPanel>
                      <TabPanel>
                        <div className="content-inner">
                          {/* row */}
                          <div className="row mt-15">
                            <div className="col-12">
                              {/* featured-icon-box */}
                              <div className="featured-icon-box style3 left-icon icon-align-top">
                                <div className="featured-icon">
                                  {/* featured-icon */}
                                  <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-global" />
                                  </div>
                                </div>
                                <div className="featured-content text-left">
                                  <div className="featured-title">
                                    {/* featured title */}
                                    <h5>
                                      <FormattedMessage id={'about.tab2.block1.title'} />
                                    </h5>
                                  </div>
                                  <div className="featured-desc">
                                    {/* featured desc */}
                                    <p>
                                      <FormattedMessage id={'about.tab2.block1.desc'} />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* separator */}
                          <div className="separator">
                            <div className="sep-line mt-4 mb-3" />
                          </div>
                          {/* separator */}
                          <div className="row">
                            <div className="col-12">
                              {/* featured-icon-box */}
                              <div className="featured-icon-box style3 left-icon icon-align-top">
                                <div className="featured-icon">
                                  {/* featured-icon */}
                                  <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-report" />
                                  </div>
                                </div>
                                <div className="featured-content text-left">
                                  <div className="featured-title">
                                    {/* featured title */}
                                    <h5>
                                      <FormattedMessage id={'about.tab2.block2.title'} />
                                    </h5>
                                  </div>
                                  <div className="featured-desc">
                                    {/* featured desc */}
                                    <p>
                                      <FormattedMessage id={'about.tab2.block2.desc'} />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* separator */}
                          <div className="separator">
                            <div className="sep-line mt-4 mb-3" />
                          </div>
                          {/* separator */}
                          <div className="row">
                            <div className="col-12">
                              {/* featured-icon-box */}
                              <div className="featured-icon-box style3 left-icon icon-align-top">
                                <div className="featured-icon">
                                  {/* featured-icon */}
                                  <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                    <i className="flaticon flaticon-work" />
                                  </div>
                                </div>
                                <div className="featured-content text-left">
                                  <div className="featured-title">
                                    {/* featured title */}
                                    <h5>
                                      <FormattedMessage id={'about.tab2.block3.title'} />
                                    </h5>
                                  </div>
                                  <div className="featured-desc">
                                    {/* featured desc */}
                                    <p>
                                      <FormattedMessage id={'about.tab2.block3.desc'} />
                                    </p>
                                    <p>
                                      <ul className="ttm-list ttm-list-style-icon">
                                        <li>
                                          <i className="ti-check-box ttm-textcolor-skincolor" />
                                          <span className="ttm-list-li-content">
                                            <span className="fw-500">
                                              <FormattedMessage
                                                id={'about.tab2.block3.list1.title'}
                                              />
                                            </span>{' '}
                                            <br />
                                            <FormattedMessage id={'about.tab2.block3.list1.desc'} />
                                          </span>
                                        </li>
                                        <li>
                                          <i className="ti-check-box ttm-textcolor-skincolor" />
                                          <span className="ttm-list-li-content">
                                            <span className="fw-500">
                                              <FormattedMessage
                                                id={'about.tab2.block3.list2.title'}
                                              />
                                            </span>{' '}
                                            <br />
                                            <FormattedMessage id={'about.tab2.block3.list2.desc'} />
                                          </span>
                                        </li>
                                        <li>
                                          <i className="ti-check-box ttm-textcolor-skincolor" />
                                          <span className="ttm-list-li-content">
                                            <span className="fw-500">
                                              <FormattedMessage
                                                id={'about.tab2.block3.list3.title'}
                                              />
                                            </span>{' '}
                                            <br />
                                            <FormattedMessage id={'about.tab2.block3.list3.desc'} />
                                          </span>
                                        </li>
                                        <li>
                                          <i className="ti-check-box ttm-textcolor-skincolor" />
                                          <span className="ttm-list-li-content">
                                            <span className="fw-500">
                                              <FormattedMessage
                                                id={'about.tab2.block3.list4.title'}
                                              />
                                            </span>{' '}
                                            <br />
                                            <FormattedMessage id={'about.tab2.block3.list4.desc'} />
                                          </span>
                                        </li>
                                      </ul>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* content-inner */}
                        {/* row end*/}
                      </TabPanel>
                      <TabPanel>
                        <div className="content-inner active">
                          <div className="row">
                            <div className="col-12 text-left">
                              <p>
                                <FormattedMessage id={'about.tab3.text'} />
                              </p>
                              <ul className="ttm-list ttm-list-style-icon">
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage
                                      id={'about.tab3.list1.text'}
                                      values={{
                                        b: (chunks) => <span className="fw-500">{chunks}</span>,
                                      }}
                                    />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage
                                      id={'about.tab3.list2.text'}
                                      values={{
                                        b: (chunks) => <span className="fw-500">{chunks}</span>,
                                      }}
                                    />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage
                                      id={'about.tab3.list3.text'}
                                      values={{
                                        b: (chunks) => <span className="fw-500">{chunks}</span>,
                                      }}
                                    />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage
                                      id={'about.tab3.list4.text'}
                                      values={{
                                        b: (chunks) => <span className="fw-500">{chunks}</span>,
                                      }}
                                    />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage
                                      id={'about.tab3.list5.text'}
                                      values={{
                                        b: (chunks) => <span className="fw-500">{chunks}</span>,
                                      }}
                                    />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage
                                      id={'about.tab3.list6.text'}
                                      values={{
                                        b: (chunks) => <span className="fw-500">{chunks}</span>,
                                      }}
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* row end */}
                        </div>
                        {/* content-inner */}
                        {/* row end*/}
                      </TabPanel>
                      <TabPanel>
                        <div className="content-inner">
                          <div className="row">
                            <div className="col-12 text-left">
                              <p>
                                <FormattedMessage id={'about.tab4.text'} />
                              </p>
                              <ul className="ttm-list ttm-list-style-icon">
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage id={'about.tab4.list1.text'} />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage id={'about.tab4.list2.text'} />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage id={'about.tab4.list3.text'} />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage id={'about.tab4.list4.text'} />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage id={'about.tab4.list5.text'} />
                                  </span>
                                </li>
                                <li>
                                  <i className="ti-check-box ttm-textcolor-skincolor" />
                                  <span className="ttm-list-li-content">
                                    <FormattedMessage id={'about.tab4.list6.text'} />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* row end */}
                        </div>
                        {/* content-inner */}
                        {/* row end*/}
                      </TabPanel>
                      <TabPanel>
                        <div className="content-inner">
                          <div className="row">
                            <div className="col-md-6 col-lg-4">
                              <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                  <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <h4>
                                      <CountUp start={0} end={1000} duration={10} />
                                    </h4>
                                  </div>
                                </div>
                                <div className="ttm-fid-contents">
                                  {/*  ttm-fid-contents */}
                                  <h3 className="ttm-fid-title">
                                    <FormattedMessage id={'about.tab5.item1.title'} />
                                  </h3>
                                  <p>
                                    <FormattedMessage id={'about.tab5.item1.desc'} />
                                  </p>
                                  {/*  ttm-fid-title */}
                                </div>
                                {/* ttm-fid-contents end */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                  <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <h4>
                                      <CountUp start={0} end={23} duration={10} />
                                    </h4>
                                  </div>
                                </div>
                                <div className="ttm-fid-contents">
                                  {/*  ttm-fid-contents */}
                                  <h3 className="ttm-fid-title">
                                    <FormattedMessage id={'about.tab5.item2.title'} />
                                  </h3>
                                  <p>
                                    <FormattedMessage id={'about.tab5.item2.desc'} />
                                  </p>
                                  {/*  ttm-fid-title */}
                                </div>
                                {/* ttm-fid-contents end */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                  <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <h4>
                                      <CountUp start={0} end={498} duration={10} />
                                    </h4>
                                  </div>
                                </div>
                                <div className="ttm-fid-contents">
                                  {/*  ttm-fid-contents */}
                                  <h3 className="ttm-fid-title">
                                    <FormattedMessage id={'about.tab5.item3.title'} />
                                  </h3>
                                  <p>
                                    <FormattedMessage id={'about.tab5.item3.desc'} />
                                  </p>
                                  {/*  ttm-fid-title */}
                                </div>
                                {/* ttm-fid-contents end */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                  <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <h4>
                                      <CountUp start={0} end={742} duration={10} />
                                    </h4>
                                  </div>
                                </div>
                                <div className="ttm-fid-contents">
                                  {/*  ttm-fid-contents */}
                                  <h3 className="ttm-fid-title">
                                    <FormattedMessage id={'about.tab5.item4.title'} />
                                  </h3>
                                  <p>
                                    <FormattedMessage id={'about.tab5.item4.desc'} />
                                  </p>
                                  {/*  ttm-fid-title */}
                                </div>
                                {/* ttm-fid-contents end */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                  <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <h4>
                                      <CountUp start={0} end={900} duration={10} />
                                    </h4>
                                  </div>
                                </div>
                                <div className="ttm-fid-contents">
                                  {/*  ttm-fid-contents */}
                                  <h3 className="ttm-fid-title">
                                    <FormattedMessage id={'about.tab5.item5.title'} />
                                  </h3>
                                  <p>
                                    <FormattedMessage id={'about.tab5.item5.desc'} />
                                  </p>
                                  {/*  ttm-fid-title */}
                                </div>
                                {/* ttm-fid-contents end */}
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                              <div className="ttm-fid inside ttm-fid-view-topicon">
                                <div className="ttm-fid-icon-wrapper">
                                  <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                    <h4>
                                      <CountUp start={0} end={7} duration={10} />
                                    </h4>
                                  </div>
                                </div>
                                <div className="ttm-fid-contents">
                                  {/*  ttm-fid-contents */}
                                  <h3 className="ttm-fid-title">
                                    <FormattedMessage id={'about.tab5.item6.title'} />
                                  </h3>
                                  <p>
                                    <FormattedMessage id={'about.tab5.item6.desc'} />
                                  </p>
                                  {/*  ttm-fid-title */}
                                </div>
                                {/* ttm-fid-contents end */}
                              </div>
                            </div>
                          </div>
                          {/* row end */}
                        </div>
                        {/* content-inner */}
                        {/* row end*/}
                      </TabPanel>
                      <TabPanel>
                        <div className="content-inner active">
                          <div className="row">
                            <div className="col-12 text-left">
                              <img
                                className="img-fluid grey-boder"
                                src={imageOrganigrama}
                                title="Organigrama"
                                alt="Organigrama"
                                style={{ width: '100vw' }}
                              />
                            </div>
                          </div>
                          {/* row end */}
                        </div>
                        {/* content-inner */}
                        {/* row end*/}
                      </TabPanel>
                    </FadeIn>
                  </div>
                </Tabs>
                {/* tabs end*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tab section end */}
    </Layout>
  );
};

export default AboutUsPage;
