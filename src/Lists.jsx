import React, { Fragment } from 'react'

const Lists = (props) => {
  const members = (friends) => {
    console.log("friends: ",friends);
    return friends.map((friend) => {
      console.log(friend);
      return (
        <tr key={`item-${friend.id}`} onClick={props.handleCheckedTr}>
          <td>
            <input id={friend.id} type="radio" checked={props.contents.checkedId === friend.id ?? true} onChange={props.handleChangedItem}/>
          </td>
          <td>{friend.nameJa}</td>
          <td>{friend.nameEn}</td>
          <td>{friend.family}</td>
        </tr>
      );
    });
  };

  console.log("props: ", props.contents);
  console.log("length: ", props.contents.friends.length);
  const member = props.contents.friends.length > 0 ? members(props.contents.friends) : null;
  console.log("member: ", member);
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <td>選択</td>
            <td>日本語名</td>
            <td>アメリカ語名</td>
            <td>学術名</td>
          </tr>
        </thead>
        <tbody>{member}</tbody>
      </table>
    </Fragment>
  );
}

export default Lists;
