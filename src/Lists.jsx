import React, { Fragment } from 'react'

const Lists = (props) => {
  const members = (persons) => {
    return persons.map((person) => {
      return (
        <tr key={`item-${person.id}`} onClick={props.handleCheckedTr}>
          <td>
            <input
              id={person.id}
              type="radio"
              checked={props.contents.checkedId === person.id ?? true}
              onChange={props.handleChangedItem}
            />
          </td>
          <td>{person.name}</td>
          <td>{person.institution}</td>
          <td>{person.remark}</td>
        </tr>
      );
    });
  };

  const member = props.contents.persons.length > 0 ? members(props.contents.persons) : null;
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <td>選択</td>
            <td>候補者</td>
            <td>所属</td>
            <td>備考</td>
          </tr>
        </thead>
        <tbody>{member}</tbody>
      </table>
    </Fragment>
  );
}

export default Lists;
