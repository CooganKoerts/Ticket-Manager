import { connect } from 'react-redux';

import MyProjects from './MyProjects';

const mapStateToProps = (state) => ({    
  myProjects: state.account.myProjects,
});

export default connect(mapStateToProps)(MyProjects);
