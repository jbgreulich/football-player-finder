import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { fetchPlayers } from '../actions/playerActions';
import { getFilteredPlayers } from '../selectors/selector';

import PlayerList from './PlayerList';

const mapStateToPropsSelector = createSelector(
  getFilteredPlayers, (players) => {
    return {filteredPlayers: players}
  }
)

const mapDispatch = {fetchPlayers};

export default connect(mapStateToPropsSelector, mapDispatch)(PlayerList);