import React, { Fragment } from 'react'

const List = (props) => {

  const rowColor = {
    selected: '#fff18c',
    normal: '#eaeaea'
  };

  const makeList = (memes) => {
    return memes.map((meme) => {
      const isChecked = props.selectedId === meme.id;
      const rowStyle = {
        backgroundColor: isChecked ? rowColor.selected : rowColor.normal,
        cursor: "default"
      };
      return (
        <tr
          key={`item-${meme.id}`}
          style={rowStyle}
          onClick={props.itemChecked}
        >
          <td>
            <input
              id={meme.id}
              type="radio"
              checked={isChecked}
              onChange={() => true}
            />
          </td>
          <td>{meme.name}</td>
          <td>{meme.category}</td>
        </tr>
      );
    });
  };

  const memes = props.memes.length > 0 ? makeList(props.memes) : null;

  const headStyle = {
    backgroundColor: rowColor.normal
  };
  return (
    <Fragment>
      <table>
        <thead style={headStyle}>
          <tr>
            <td style={{ width: "30px" }}></td>
            <td>流行り語</td>
            <td>種類</td>
          </tr>
        </thead>
        <tbody>{memes}</tbody>
      </table>
    </Fragment>
  );
}

export default List;
