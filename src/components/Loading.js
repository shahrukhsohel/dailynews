import React from 'react'
import loadingGif from '../logo/loadingBar.gif';
export default function Loading() {
//  extends Component {
  // render() {
    return (
      <div className='text-center'>
          <img src={loadingGif} alt="Loading..." />
      </div>
    )
  // }
}
