import PropTypes from 'prop-types';
import React from 'react';

const CustomTabPanel = ({ id, value, children }) => (
  <>
    {value === id && <>{children}</>}
  </>
);

CustomTabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CustomTabPanel;
