import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map(({ id, name, email }) => (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{email}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
