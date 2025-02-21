import React, { useState } from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import '../styles/BoardDetails.css'
import { FaSearch } from "react-icons/fa";

const BoardDetails = () => {

  const [searchValue, setSearchValue] = useState('')
  const [searchValue2, setSearchValue2] = useState('')

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleInputChange2 = (event) => {
    setSearchValue2(event.target.value)
  }


  return (
    <div className='container'>

      <div className='dashboard_container'>
        <div className='container-1'>
          <div className='dashboard_db_1'>
            <h4>Outage Board &nbsp; <i className="fa fa-arrow-up-right-from-square"><FaArrowUpRightFromSquare /></i></h4>
            <div className='search-container'>
              <input type='text' className='search-input' placeholder='Search for Incidents...' value={searchValue} onChange={handleInputChange}></input>
              {searchValue.length === 0 && <FaSearch className='search-icon' />}
            </div>
          </div>
          <iframe
            src={`/Frame1.html?searchValue=${searchValue}`}
            className='frame-1'
            title='database-1'
          ></iframe>
        </div><br />

        <div className='container-2'>
          <div className='dashboard_db_2'>
            <h4>Ongoing/Planned Changes <sub>(2024-05-14 11:05PM EST - 2024-05-16 11.05AM EST) &nbsp; <i className="fa fa-arrow-up-right-from-square"><FaArrowUpRightFromSquare /></i></sub></h4>
            <div className='search-container'>
              <input type='text' className='search-input' placeholder='Search for Changes...' value={searchValue2} onChange={handleInputChange2}></input>
              {searchValue2.length === 0 && <FaSearch className='search-icon' />}
            </div>

          </div>
          <iframe
            src={`/Frame2.html?searchValue=${searchValue2}`}
            className='frame-2'
            title='database-2'
          ></iframe>
        </div>
      </div>

      <div className='dashboard_container1'>
        <div className='container-3'>
          <div className='dashboard_db_3'>
            <h4>Application Insights &nbsp; <i className="fa fa-arrow-up-right-from-square"><FaArrowUpRightFromSquare /></i></h4>
            <div className='btn-grp'>
              <button type='submit' className='btn btn-success'>ALIANT</button>
              <button type='submit' className='btn btn-success'>BBM/BILLING</button>
              <button type='submit' className='btn btn-success'>BEV</button>
              <button type='submit' className='btn btn-success'>BM/BDI</button>
              <button type='submit' className='btn btn-success'>CUST/OPS</button>
              <button type='submit' className='btn btn-success'>EDW/BI</button>
              <button type='submit' className='btn btn-danger'>FIELD</button>
              <button type='submit' className='btn btn-success'>SP/SA</button>
              <button type='submit' className='btn btn-success'>SERVICE ASSURANCE</button>
              <button type='submit' className='btn btn-success'>MIS</button>
              <button type='submit' className='btn btn-success'>ORDERING</button>
              <button type='submit' className='btn btn-success'>SAP</button>
              <button type='submit' className='btn btn-success'>IAM</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardDetails
