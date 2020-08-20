import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import GoogleMap from '../components/GoogleMap';

const ContactUsPage = () => {
  const intl = useIntl();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
    }

    fetch('/.netlify/functions/contact-form', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    event.target.reset();
  };

  return (
    <Layout title={{ id: 'contactUs.seoTitle' }} isPageTitle>
      <section className="ttm-row zero-padding-section clearfix">
        <div className="container-xl">
          <div className="row no-gutters">
            {/* row */}
            <div className="col-lg-5">
              <div className="spacing-9">
                {/* section title */}
                <div className="section-title with-desc clearfix">
                  <div className="title-header">
                    <h5>
                      <FormattedMessage id={'contactUs.leftBlock.subtitle'} />
                    </h5>
                    <h2 className="title">
                      <FormattedMessage id={'contactUs.leftBlock.title'} />
                    </h2>
                  </div>
                </div>
                {/* section title end */}
                <div className="row">
                  <div className="col-12">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style2 left-icon icon-align-top">
                      <div className="featured-icon">
                        {/* featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <i className="ti-location-pin" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          {/* featured title */}
                          <h5>
                            <FormattedMessage id={'contactUs.leftBlock.officeAddress'} />
                          </h5>
                        </div>
                        <div className="featured-desc">
                          {/* featured desc */}
                          <p>
                            <FormattedMessage id={'common.fullAddress'} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div className="row">
                  <div className="col-12">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style2 left-icon icon-align-top">
                      <div className="featured-icon">
                        {/* featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <i className="fa fa-phone" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          {/* featured title */}
                          <h5>
                            <FormattedMessage id={'contactUs.leftBlock.ourPhone'} />
                          </h5>
                        </div>
                        <div className="featured-desc">
                          {/* featured desc */}
                          <p>+ (591) (3) 3460561</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div className="row">
                  <div className="col-12">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style2 left-icon icon-align-top">
                      <div className="featured-icon">
                        {/* featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <i className="fa fa-phone" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          {/* featured title */}
                          <h5>
                            <FormattedMessage id={'contactUs.leftBlock.ourFax'} />
                          </h5>
                        </div>
                        <div className="featured-desc">
                          {/* featured desc */}
                          <p>+ (591) (3) 3462564</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div className="row">
                  <div className="col-12">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style2 left-icon icon-align-top">
                      <div className="featured-icon">
                        {/* featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <i className="ti-location-pin" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          {/* featured title */}
                          <h5>
                            <FormattedMessage id={'contactUs.leftBlock.box'} />
                          </h5>
                        </div>
                        <div className="featured-desc">
                          {/* featured desc */}
                          <p>4144</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div className="row">
                  <div className="col-12">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style2 left-icon icon-align-top">
                      <div className="featured-icon">
                        {/* featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <i className="ti ti-email" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          {/* featured title */}
                          <h5>
                            <FormattedMessage id={'contactUs.leftBlock.ourEmail'} />
                          </h5>
                        </div>
                        <div className="featured-desc">
                          {/* featured desc */}
                          <p>info@ese-srl.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* separator */}
                <div className="separator">
                  <div className="sep-line mt-4 mb-4" />
                </div>
                {/* separator */}
                <div className="row">
                  <div className="col-12">
                    {/* featured-icon-box */}
                    <div className="featured-icon-box style2 left-icon icon-align-top">
                      <div className="featured-icon">
                        {/* featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <i className="ti ti-email" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          {/* featured title */}
                          <h5>
                            <FormattedMessage id={'contactUs.leftBlock.contacts'} />
                          </h5>
                        </div>
                        <div className="featured-desc">
                          {/* featured desc */}
                          <p>comercial@ese-srl.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="spacing-10 ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-right-span h-100">
                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                  <div className="ttm-bg-layer-inner" />
                </div>
                {/* section title */}
                <div className="section-title with-desc clearfix">
                  <div className="title-header">
                    <h5>
                      <FormattedMessage id={'contactUs.rightBlock.subtitle'} />
                    </h5>
                    <h2 className="title">
                      <FormattedMessage id={'contactUs.rightBlock.title'} />
                    </h2>
                  </div>
                </div>
                {/* section title end */}
                <form
                  id="ttm-quote-form"
                  className="row ttm-quote-form clearfix"
                  onSubmit={handleSubmit}
                >
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="fullName"
                        type="text"
                        className="form-control bg-white"
                        placeholder={`${intl.formatMessage({ id: 'inputs.fullName' })}*`}
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder={`${intl.formatMessage({ id: 'inputs.phoneNumber' })}*`}
                        required="required"
                        className="form-control bg-white"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        type="text"
                        placeholder={`${intl.formatMessage({ id: 'inputs.emailAddress' })}*`}
                        required="required"
                        className="form-control bg-white"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="subject"
                        type="text"
                        placeholder={intl.formatMessage({ id: 'inputs.subject' })}
                        className="form-control bg-white"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={intl.formatMessage({ id: 'inputs.writeMessage' })}
                        className="form-control bg-white"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-left">
                      <button
                        type="submit"
                        id="submit"
                        className="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor"
                        value
                      >
                        <FormattedMessage id={'buttons.submitQuote'} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* row end */}
        </div>
      </section>
      <GoogleMap />
    </Layout>
  );
};

export default ContactUsPage;
