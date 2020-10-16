import { connect } from 'react-redux';

import Issues from './Issues';

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.account.isUserLoggedIn,
});

export default connect(mapStateToProps)(Issues);
