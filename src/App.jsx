import React, { Component, Fragment } from 'react'
import Lists from './Lists';
import ItemControl from "./ItemControl";

const Person = [
  {
    id: "person_a",
    name: "候補A",
    institution: "無所属",
    remark: "密です",
  },
  {
    id: "person_b",
    name: "候補B",
    institution: "無所属",
    remark: "足りないのは愛と金だ",
  },
  {
    id: "person_c",
    name: "候補C",
    institution: "無所属",
    remark: "コロナはただの風邪",
  },
];

export default class App extends Component {
  constructor() {
    super()

    this.handleCheckedTr = this.handleCheckedTr.bind(this);
    this.handleChangedItem = this.handleChangedItem.bind(this);
    this.handleMoveItem = this.handleMoveItem.bind(this);
    this.noMoreGoUp = this.noMoreGoUp.bind(this);
    this.noMoreGoDown = this.noMoreGoDown.bind(this);

    this.state = {
      persons: Person,
      checkedId: null,
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

  noMoreGoUp(index, list) {
    return !(0 < index && index < list.length) ? true : false;
  }

  noMoreGoDown(index, list) {
    return !(0 <= index && index < list.length - 1) ? true : false;
  }

  handleMoveItem(e) {
    if (!this.state.checkedId) return;

    const type = e.currentTarget.dataset.type;
    const newList = this.state.persons.slice();

    const targetIndex = newList.findIndex(item =>  item.id === this.state.checkedId );

    switch (type) {
      case "up":
        if (this.noMoreGoUp(targetIndex, newList)) return;

        newList.splice(targetIndex - 1, 2, newList[targetIndex], newList[targetIndex - 1]);
        break;

      case "down":
        if (this.noMoreGoDown(targetIndex, newList)) return;

        newList.splice(targetIndex, 2, newList[targetIndex + 1], newList[targetIndex]);
        break;

      default:
        break;
    }

    this.setState({
      persons: newList
    });
  }

  render() {
    const contents = this.state;
    return (
      <Fragment>
        <Lists
          contents={contents}
          handleCheckedTr={this.handleCheckedTr}
          handleChangedItem={this.handleChangedItem}
        />
        <ItemControl
          moveItem={this.handleMoveItem}
        />
      </Fragment>
    )
  }
}
