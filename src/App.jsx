import React, { Component, Fragment } from 'react'
import Lists from './Lists';

const FRIENDS = [
  {
    id: "serval",
    nameJa: "サーバル",
    nameEn: "Serval Cat",
    family: "ネコ目ネコ科ネコ属",
  },
  {
    id: "raccoon",
    nameJa: "アライグマ",
    nameEn: "Common raccoon",
    family: "ネコ目アライグマ科アライグマ属",
  },
  {
    id: "fennec",
    nameJa: "フェネック",
    nameEn: "Fennec",
    family: "ネコ目イヌ科キツネ属",
  },
];

export default class App extends Component {
  constructor() {
    super()

    this.handleCheckedTr = this.handleCheckedTr.bind(this);
    this.handleChangedItem = this.handleChangedItem.bind(this);

    this.state = {
      friends: FRIENDS,
      checkedId: null
    };
  }

  handleCheckedTr(e) {
    const selectedItem = e.currentTarget.children[0].children[0].id;
    this.setState({
      checkedId: selectedItem
    });
  }

  handleChangedItem(e) {
    const clickedItem = e.currentTarget.id;
    this.setState({
      checkedId: clickedItem
    });
  }

  render() {
    const contents = this.state;
    console.log("rendered componentDidMount: ",contents);
    return (
      <Fragment>
        <Lists
          contents={contents}
          handleCheckedTr={this.handleCheckedTr}
          handleChangedItem={this.handleChangedItem}
        />
      </Fragment>
    )
  }
}
