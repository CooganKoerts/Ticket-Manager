import { connect } from 'react-redux';

import MyProjects from './MyProjects';

const mapStateToProps = (state) => {
  console.log(state.account);
  return {
    myProjects: state.account.myProjects,
  }
};

export default connect(mapStateToProps)(MyProjects);
