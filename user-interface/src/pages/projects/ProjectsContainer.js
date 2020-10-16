import { connect } from 'react-redux';

import Projects from './Projects';

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.account.isUserLoggedIn,
});

export default connect(mapStateToProps)(Projects);
