import React, {Fragment} from 'react';
//import PropTypes from 'prop-types';

import loadingimg from './loading.gif';

const LoadingImage = () => {
  return(
    <Fragment>&nbsp;<img src={loadingimg} alt="Loading" height='25' width='25' />&nbsp;</Fragment>
  );
}
LoadingImage.propTypes = {
};
export default LoadingImage;
