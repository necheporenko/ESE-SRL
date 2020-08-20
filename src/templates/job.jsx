import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { useIntl, FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import JobContacts from '../components/JobContacts';

const JobsPage = ({ data }) => {
  const jobData = data.prismic.job;
  const intl = useIntl();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      jobTitle: RichText.asText(jobData.title),
      jobDescription: RichText.asText(jobData.description),
    };

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1];
    }

    fetch('/.netlify/functions/job-form', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    event.target.reset();
  };

  return (
    <Layout title={{ id: 'jobs.seoTitle' }} isPageTitle>
      <section className="ttm-row zero-padding-section clearfix">
        <div className="container-xl">
          <div className="row no-gutters">
            {/* row */}

            <div className="col-lg-7 col-xl-7">
              <div className="spacing-5">
                {/* section title */}
                <div className="section-title with-desc clearfix">
                  <div className="title-header">
                    <h5>
                      <FormattedMessage id={'menu.contactUs'} />
                    </h5>
                    <h2 className="title">
                      <FormattedMessage id={'job.subtitle'} />
                    </h2>
                  </div>
                </div>
                {/* section title end */}
                {/* form */}
                <form
                  id="ttm-quote-form"
                  className="row ttm-quote-form clearfix"
                  onSubmit={handleSubmit}
                >
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="firstName"
                        type="text"
                        className="form-control bg-white border"
                        placeholder={`${intl.formatMessage({ id: 'inputs.firstName' })}*`}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="lastName"
                        type="text"
                        className="form-control bg-white border"
                        placeholder={`${intl.formatMessage({ id: 'inputs.lastName' })}*`}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        placeholder={`${intl.formatMessage({ id: 'inputs.emailAddress' })}*`}
                        className="form-control bg-white border"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder={intl.formatMessage({ id: 'inputs.phoneNumber' })}
                        className="form-control bg-white border"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={intl.formatMessage({ id: 'inputs.writeMessage' })}
                        className="form-control bg-white border"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-12">
                    <div className="form-group">
                      <label htmlFor="resume">
                        <FormattedMessage id={'inputs.resume'} />*
                      </label>
                      <input
                        name="resume"
                        type="file"
                        placeholder="Resume"
                        className="form-control bg-white border"
                        accept="image/*,.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-center">
                      <button
                        type="submit"
                        id="submit"
                        className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mt-5 res-991-mt-20"
                        value
                      >
                        <FormattedMessage id={'buttons.submitTheApplication'} />
                      </button>
                    </div>
                  </div>
                </form>
                {/* form */}
              </div>
            </div>
            <div className="col-lg-5 col-xl-5">
              <div className="spacing-5">
                <div className="ttm-pf-single-detail-box mb-35">
                  <div className="ttm-pf-single-title">
                    <h5>{RichText.asText(jobData.title)}</h5>
                  </div>
                  {RichText.render(jobData.description)}
                </div>
              </div>
            </div>
            {/* row */}
          </div>
        </div>
      </section>
      <JobContacts />
    </Layout>
  );
};

export const pageQuery = graphql`
  query Job($uid: String!, $lang: String!) {
    prismic {
      job(lang: $lang, uid: $uid) {
        title
        description
      }
    }
  }
`;

export default JobsPage;
