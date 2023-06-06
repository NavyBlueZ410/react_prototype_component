import React from 'react'
import styles from './css/Select.module.css'

function Select(props) {
    const {list,value,name,onChange,defalut,style} = props

  return (
    <div className={styles.contentSelect} style={style}>
        <select className={ value? styles.validate : styles.invalidate} 
                value={value} 
                name={name}
                onChange={onChange}>
            <option value={defalut['value']} >{defalut['label']}</option>
            {
                list?.map((item) => {
                    return <option key={item['id']} value={item['gender']}>{item['gender']}</option>
                    
                })
            }
        </select>
    </div>
  )
}

export default Select