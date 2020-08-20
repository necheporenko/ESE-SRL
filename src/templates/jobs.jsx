import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { FormattedMessage, useIntl } from 'react-intl';

import Layout from '../components/Layout';
import Link from '../components/LocalizedLink';
import JobContacts from '../components/JobContacts';

const JobsPage = ({ data }) => {
  const prismicDataAllJobs = data.prismic.allJobs.edges;
  const intl = useIntl();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

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
      <section className="ttm-row contact-section clearfix">
        <div className="container-xl">
          <div className="row">
            {/* row */}
            <div className="col-lg-8 offset-lg-2">
              {/* section-title */}
              <div className="section-title with-desc text-center clearfix">
                <div className="title-header">
                  <h5>
                    <FormattedMessage id={'jobs.subtitle'} />
                  </h5>
                  <h2 className="title">
                    <FormattedMessage id={'jobs.title'} />
                  </h2>
                </div>
              </div>
              {/* section-title end */}
            </div>
          </div>
          {/* row end */}

          <div className="featured-roles">
            {/* row */}
            {prismicDataAllJobs.length > 0 ? (
              prismicDataAllJobs.map(({ node }, index) => (
                <div className="featured-role" key={index}>
                  <div>
                    <div className="featured-content">
                      <div className="featured-title">
                        {/* featured title */}
                        <h5>{RichText.asText(node.title)}</h5>
                      </div>
                      <div className="featured-desc">
                        {/* featured desc */}
                        {RichText.render(node.description)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      to={`/jobs/${node._meta.uid}`}
                      className="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor"
                    >
                      <FormattedMessage id={'buttons.applyNow'} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p className="text-center pb-4">
                  <FormattedMessage id={'job.noJobsText'} />
                </p>
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
              </div>
            )}
            {/* row end*/}
          </div>
        </div>
      </section>

      <JobContacts />
    </Layout>
  );
};

export const query = graphql`
  query($lang: String!) {
    prismic {
      allJobs(lang: $lang) {
        edges {
          node {
            title
            description
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;

export default JobsPage;
