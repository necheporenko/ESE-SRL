import React from 'react';
import { FormattedMessage } from 'react-intl';

import GoogleMap from './GoogleMap';

const JobContacts = () => {
  return (
    <>
      {/* contact-box-section */}
      <div className="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4 res-991-mb-60 res-991-mt-30">
              {/* featured-icon-box */}
              <div className="featured-icon-box style8 text-center box-shadow h-100">
                <div className="featured-icon">
                  {/* featured-icon*/}
                  <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                    <i className="far fa-envelope" />
                  </div>
                </div>
                {/* featured-icon */}
                <div className="featured-content">
                  {/* featured-content */}
                  <div className="featured-title">
                    <h5>Email</h5>
                    {/* featured-title */}
                  </div>
                  <div className="featured-desc">
                    {/* featured-description */}
                    <p>
                      <a href="mailto:info@ese-srl.com">info@ese-srl.com</a>
                    </p>
                  </div>
                </div>
                {/* featured-content END*/}
              </div>
              {/* featured-icon-box */}
            </div>
            <div className="col-lg-4 res-991-mb-60">
              {/* featured-icon-box */}
              <div className="featured-icon-box style8 text-center box-shadow h-100">
                <div className="featured-icon">
                  {/* featured-icon*/}
                  <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                    <i className="fa fa-phone" />
                  </div>
                </div>
                {/* featured-icon */}
                <div className="featured-content">
                  {/* featured-content */}
                  <div className="featured-title">
                    <h5>
                      <FormattedMessage id={'common.phone'} />
                    </h5>
                    {/* featured-title */}
                  </div>
                  <div className="featured-desc">
                    {/* featured-description */}
                    <p>+ (591) (3) 3460561</p>
                  </div>
                </div>
                {/* featured-content END*/}
              </div>
              {/* featured-icon-box */}
            </div>
            <div className="col-lg-4">
              {/* featured-icon-box */}
              <div className="featured-icon-box style8 text-center box-shadow h-100">
                <div className="featured-icon">
                  {/* featured-icon*/}
                  <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                    <i className="ti ti-target" />
                  </div>
                </div>
                {/* featured-icon */}
                <div className="featured-content">
                  {/* featured-content */}
                  <div className="featured-title">
                    <h5>
                      <FormattedMessage id={'common.address'} />
                    </h5>
                    {/* featured-title */}
                  </div>
                  <div className="featured-desc">
                    {/* featured-description */}
                    <p>
                      <FormattedMessage id={'common.fullAddress'} />
                    </p>
                  </div>
                </div>
                {/* featured-content END*/}
              </div>
              {/* featured-icon-box */}
            </div>
          </div>
        </div>
      </div>
      {/* contact-box-section end */}
      {/* map-section */}
      <GoogleMap />
      {/* map-section end */}
    </>
  );
};

export default JobContacts;
