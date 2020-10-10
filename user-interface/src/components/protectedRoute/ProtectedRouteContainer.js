import { connect } from 'react-redux';

import ProtectedRoute from './ProtectedRoute';

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.account.isUserLoggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
