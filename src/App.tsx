import React from 'react';
import './App.scss';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  // Fix addOne and add100 methods so they can work together
  addOne = () => {
    let { count } = this.state;

    count += 1;

    this.setState({ count });
  };

  add100 = () => {
    let { count } = this.state;

    count += 100;

    this.setState({ count });
  };

  // DON'T change the code below
  increase = () => {
    const { count } = this.state;

    this.addOne();

    if (count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Count: ${count}`}
        </h1>

        <button type="button" className="App__add-one" onClick={this.addOne}>
          Add 1
        </button>

        <button type="button" className="App__add-100" onClick={this.add100}>
          Add 100
        </button>

        <button type="button" className="App__increase" onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}
