import React, { Fragment } from 'react';

import Alert from 'react-bootstrap/Alert';

const Error = ({url}) => {
  return(
    <Alert variant="danger">
        <Alert.Heading>ERROR</Alert.Heading>
        { url ? <Fragment>{url}<br/></Fragment> : null }
    </Alert>
  );
}

export default Error;
