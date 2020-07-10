import React,{ Fragment } from 'react'

const ItemControl = (props) => {
  return (
    <Fragment>
      <input type="button" value="上へ" data-type="up" onClick={props.moveItem} />
      <input type="button" value="下へ" data-type="down" onClick={props.moveItem} />
    </Fragment>
  );
}

export default ItemControl;
