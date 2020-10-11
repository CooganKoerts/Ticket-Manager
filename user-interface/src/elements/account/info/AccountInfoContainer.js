import { connect } from 'react-redux';

import AccountInfo from './AccountInfo';

const mapStateToProps = (state) => ({
  user: state.account.user,
});

export default connect(mapStateToProps)(AccountInfo);
