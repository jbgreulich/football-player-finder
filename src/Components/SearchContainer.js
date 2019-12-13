import { connect } from 'react-redux';

import { setName, setPosition, setAge } from '../actions/filterActions';

import Search from './Search';

const mapState = (state) => {
  return {
    filters: state.filters,
  };
}

const mapDispatch = {setName, setPosition, setAge};

export default connect(mapState, mapDispatch)(Search);