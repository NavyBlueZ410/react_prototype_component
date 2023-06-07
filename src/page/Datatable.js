import React from 'react'
import provinces from '../dataJson/province.json'
import DataTable from 'react-data-table-component'
import Input from '../components/Input'
import { BiSearch } from "react-icons/bi";
import { useState } from 'react';
import styles from './css/Datatable.module.css'

function Datatable() {

  const th = [
    {
      name: "ID",
      selector: row=>row.id_province,
      sortable:true
    },
    {
      name: "Province_Eng",
      selector: row=>row.n_province_eng,
      sortable:true
    },
    {
      name:"Province_TH",
      selector: row=>row.n_province_th,
      sortable:true
    }
  ]

  const [search,setSearch] = useState("")
  const [records,setRecords] = useState(provinces)
  
  const handleFilter = (e) => {
    e.preventDefault()
    const { name,value } = e.target
    setSearch(value)
    
    const isValid = Object.values({
      [name]: value
    }).every((val) => val.trim() !== "");
    
    const newProvinces = isValid ? records.filter((row) => {
      return (
      row.n_province_eng.toLowerCase().includes(search.toLowerCase()) ||
      row.n_province_th.toLowerCase().includes(search.toLowerCase())
      )
    }) : provinces

    setRecords(newProvinces)

  }

  return (
    <div className={styles.contentDatatable}>
      <h1>Datatable</h1>
      <div className={styles.contentSearch}>
        <Input
          style={{marginBottom:"2rem",width:"35%"}}
          icon={<BiSearch/>}
          value={search}
          name={"search"}
          onChange={handleFilter}
          placeholder={"search"}
        />
      </div>
      <DataTable
        columns={th}
        data={records}
        noDataComponent={"No data searching......"}
        pagination
      ></DataTable>
    </div>
  )
}

export default Datatable