import React from 'react';
import { BsArrowsAngleExpand } from "react-icons/bs"; // Importing the icon


const OutageBoardTable = ({searchValue, OutageBoard}) => {
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
        border: 'none' ,
        margin : 0,
        textAlign: 'left',
        padding: '10px',
    };

    const rowStyle = {
        borderBottom: '1px solid grey',
        padding: '5px'
    };

    const filteredOutageBoard = OutageBoard.filter((incident) => {
        return (
          incident['Incident ID'].toLowerCase().includes(searchValue.toLowerCase()) ||
          incident.CI.toLowerCase().includes(searchValue.toLowerCase()) ||
          incident.Description.toLowerCase().includes(searchValue.toLowerCase()) ||
          incident.Priority.toLowerCase().includes(searchValue.toLowerCase()) ||
          incident['Business Impact'].toLowerCase().includes(searchValue.toLowerCase()) ||
          incident['Latest Recovery Action'].toLowerCase().includes(searchValue.toLowerCase()) ||
          incident['Issue Reported Time'].toLowerCase().includes(searchValue.toLowerCase())
        );
      });

    // Check if OutageBoard is defined and has data
    if (!OutageBoard || OutageBoard.length === 0) {
        return <div> No data </div>;
    }
    return (
        <table className='outage-table' style={table}>
            <thead style={headerStyle}>
                <tr>
                    <th style={headerCellStyle}>Incident ID</th>
                    <th style={headerCellStyle}>CI</th>
                    <th style={headerCellStyle}>Description</th>
                    <th style={headerCellStyle}>Priority</th> &nbsp;
                    <th style={headerCellStyle}>Business Impact</th>
                    <th style={headerCellStyle}>Latest Recovery Action</th>
                    <th style={headerCellStyle}>Issue Reported Time<sub>(EST)</sub></th>
                </tr>
            </thead>
            <tbody>
                {filteredOutageBoard.map((incident, index) => (
                    <tr key={index} style={rowStyle}>
                        <td style={rowStyle}>{incident['Incident ID']}</td>
                        <td style={rowStyle}>{incident.CI}</td>
                        <td style={rowStyle}>{incident.Description}</td>
                        <td style={rowStyle}>{incident.Priority}</td> &nbsp;
                        <td style={rowStyle}>{incident['Business Impact']}</td>
                        <td style={rowStyle}>
                            {incident['Latest Recovery Action']}
                            {incident['Latest Recovery Action'].length !== 0 && <BsArrowsAngleExpand />}
                        </td>
                        <td style={rowStyle}>{incident['Issue Reported Time']}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OutageBoardTable;
