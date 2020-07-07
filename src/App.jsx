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
    this.state = {};
  }

  componentWillMount() {
    FRIENDS.forEach(friend => {
      this.setState({
        ...this.state,
        [friend.id]: 0
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Lists></Lists>
      </Fragment>
    )
  }
}