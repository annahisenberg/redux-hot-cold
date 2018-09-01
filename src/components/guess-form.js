import React from 'react';
import './guess-form.css';

import { makeGuess } from '../actions';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedNum: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    // this.input.value = '';
    // this.input.focus();

    this.props.dispatch(makeGuess(this.state.guessedNum));
  }

  onChange(e) {
    this.setState({
      guessedNum: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          onChange={this.onChange}
          autoComplete="off"
          aria-labelledby="feedback"
          required
          value={this.state.guessedNum}
        />
        <button
          type="submit"
          name="submit"
          id="guessButton"
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

