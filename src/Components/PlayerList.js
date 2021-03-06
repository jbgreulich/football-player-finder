import React, { Component } from 'react';

export default class PlayerList extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  renderPlayers() {
    const { filteredPlayers } = this.props;

    if (!filteredPlayers.length) {
      return null;
    }

    return filteredPlayers.map((player, index) => {
      return (
        <tr className='player-list' key={index}>
          <td>{player.name}</td>
          <td>{player.position}</td>
          <td>{player.nationality}</td>
          <td>{player.age}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className='players-table'>
        <tbody>
          <tr className='table-header players-table-header'>
            <th>Player</th>
            <th>Position</th>
            <th>Team</th>
            <th>Age</th>
          </tr>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  }
}