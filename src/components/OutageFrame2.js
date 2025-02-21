import React from 'react';
import {createRoot} from 'react-dom/client'
import PlannedChangesTable from './PlannedChangesTable';
import PlannedChanges from './PlannedChanges'


const OutageFrame2 = ({ searchValue }) => {
  console.log('Search value in OutageFrame2:', searchValue); // Debugging line

  return (
    <div>
      <PlannedChangesTable searchValue={searchValue} PlannedChanges={PlannedChanges}  />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const searchValue = params.get('searchValue');
  const root2 = document.getElementById('outage-frame-root-2');
  if (root2) {
    createRoot(root2).render(<OutageFrame2 searchValue={searchValue} />);
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   const root2 = document.getElementById('outage-frame-root-2');
//   if (root2) {
//     createRoot(root2).render(<OutageFrame2 PlannedChanges={PlannedChanges}/>);
//   }
// });

export default OutageFrame2;