import { connect } from 'react-redux'

import Header from '../component/Header'

const mapStateToProps = (state) => ({
  title : state.header
})

export default connect(mapStateToProps, [])(Header)
