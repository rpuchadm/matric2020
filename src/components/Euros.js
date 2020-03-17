import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Euros = ({valor}) => {
  if( valor != null ) {
    let opts = {style:'decimal',maximumFractionDigits:2,minimumFractionDigits:2};
    if ( valor % 1 === 0) { opts.minimumFractionDigits=0; }
    return (
    <Fragment>{valor.toLocaleString("es-ES",opts)}&euro;</Fragment>
    );
  }
  return undefined;
}
Euros.propTypes = {
  valor: PropTypes.number.isRequired,
};
export default Euros;
