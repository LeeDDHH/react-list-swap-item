import React,{ Fragment } from 'react'

const ItemControl = (props) => {
  return (
    <Fragment>
      <input type="button" value="上へ" data-type="up" onClick={props.moveItem} />
      <input type="button" value="下へ" data-type="down" onClick={props.moveItem} />
      <input type="button" value="選択解除" data-type="neutral" onClick={props.neutralSelect} />
    </Fragment>
  );
}

export default ItemControl;
