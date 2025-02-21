import React from 'react';
import {createRoot} from 'react-dom/client';
import OutageBoardTable from './OutageBoardTable';
import OutageBoard from './OutageBoard'


const OutageFrame1 = ({ searchValue }) => {

  return (
    <div>
      <OutageBoardTable searchValue={searchValue} OutageBoard={OutageBoard}   />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const searchValue = params.get('searchValue');
  const root1 = document.getElementById('outage-frame-root');
  if (root1) {
    createRoot(root1).render(<OutageFrame1 searchValue={searchValue} />);
  }
});


// document.addEventListener('DOMContentLoaded', () => {
//   const root1 = document.getElementById('outage-frame-root');
//   if (root1) {
//     createRoot(root1).render(<OutageFrame1 OutageBoard={OutageBoard} />);
//   }
// });

export default OutageFrame1;
