import React, { Component, Fragment } from 'react'
import List from './parts/List';
import ItemControl from "./parts/ItemControl";

import { Memes } from "./Memes";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      memes: Memes,
      selectedId: null,
    };
  }

  _noMoreGoUp = (index, list) => {
    return !(0 < index && index < list.length) ? true : false;
  }

  _noMoreGoDown = (index, list) => {
    return !(0 <= index && index < list.length - 1) ? true : false;
  }

  handleCheckedItem = (e) => {
    this.setState({
      selectedId: Number(e.currentTarget.children[0].children[0].id)
    });
  }

  handleMoveItem = (e) => {
    if (!this.state.selectedId) return;

    const type = e.currentTarget.dataset.type;
    const newList = this.state.memes.slice();

    const targetIndex = newList.findIndex(item => item.id === this.state.selectedId);

    switch (type) {
      case "up":
        if (this._noMoreGoUp(targetIndex, newList)) return;
        newList.splice(targetIndex - 1, 2, newList[targetIndex], newList[targetIndex - 1]);
        break;

      case "down":
        if (this._noMoreGoDown(targetIndex, newList)) return;
        newList.splice(targetIndex, 2, newList[targetIndex + 1], newList[targetIndex]);
        break;

      default:
        break;
    }

    this.setState({
      memes: newList
    });
  }

  handleNeutralSelect = () => {
    this.setState({
      selectedId: null
    })
  }

  render() {
    const { memes, selectedId } = this.state;
    return (
      <Fragment>
        2020年上半期キーワード
        <List
          memes={memes}
          selectedId={selectedId}
          itemChecked={this.handleCheckedItem}
        />
        <ItemControl
          moveItem={this.handleMoveItem}
          neutralSelect={this.handleNeutralSelect}
        />
      </Fragment>
    )
  }
}
