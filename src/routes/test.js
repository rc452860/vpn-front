import React from 'react'
// eslint-disable-next-line
import {connect} from 'dva'

class Test extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super()
  }

  render() {
    console.log(this)
    return(
      <p>aaaa</p>
    )
  }
}
export default connect((m) => {
  console.log(m);
  return m;
})(Test);
