import React from 'react'
import { BsArrowsAngleExpand } from "react-icons/bs";  


const PlannedChangesTable = ({searchValue, PlannedChanges}) => {
    
    const table = {
        fontSize: '11px',
        width: '100%',
        borderSpacing: 0,
        margin: 0,
        padding: 0, 
        fontFamily: 'Public Sans'
        }
    const headerStyle = {
        backgroundColor: '#BDBCB4',
        border: 0,
        padding: '20px',
    };

    const headerCellStyle = {
        border: 'none',
        margin: 0,
        textAlign: 'left',
        padding: '10px',
    };

    const rowStyle = {
        borderBottom: '1px solid grey',
        padding: '5px'
    };
    const filteredPlannedChanges = PlannedChanges.filter((change) => {
        return (
            change['Change Number'].toLowerCase().includes(searchValue.toLowerCase()) ||
            change.CI.toLowerCase().includes(searchValue.toLowerCase()) ||
            change['Short Description'].toLowerCase().includes(searchValue.toLowerCase()) ||
            change['Fail Prediction Score'].toLowerCase().includes(searchValue.toLowerCase()) ||
            change['Planned Start Date(Est)'].toLowerCase().includes(searchValue.toLowerCase()) ||
            change['Planned End Date'].toLowerCase().includes(searchValue.toLowerCase())
        );
    });


    if (!PlannedChanges || PlannedChanges.length === 0) {
        return <div>No data</div>;
    }
    return (
        <table className='planned-changes-table' style={table}>
            <thead style={headerStyle}>
                <tr>
                    <th style={headerCellStyle}>Change Number</th>
                    <th style={headerCellStyle}>CI</th>
                    <th style={headerCellStyle}>Short Description</th>
                    <th style={headerCellStyle}>Fail Prediction Score</th>
                    <th style={headerCellStyle}>Planned Start Date <sub>(Est)</sub></th>
                    <th style={headerCellStyle}>Planned End Date<sub>(Est)</sub></th>
                </tr>
            </thead>
            <tbody>
                {filteredPlannedChanges.map((change, index) => (
                    <tr key={index} style={rowStyle}>
                        <td style={rowStyle}>{change['Change Number']}</td>
                        <td style={rowStyle}>{change.CI}</td>
                        <td style={rowStyle}>
                            {change['Short Description']} &nbsp;
                            {change['Short Description'].length !== 0 &&  <BsArrowsAngleExpand />}
                        </td>
                        <td style={rowStyle}>{change['Fail Prediction Score']}</td>
                        <td style={rowStyle}>{change['Planned Start Date(Est)']}</td>
                        <td style={rowStyle}>{change['Planned End Date']}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PlannedChangesTable







