import React from 'react'

export default ({ label, placeholder, type, value, required = false, onChange = () => {} }) => {
  const handleChange = ({target}) => {
    const value = target.value
    onChange(value)
  }
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        required={required}
        className='form-control'
        placeholder={placeholder}
        onChange={handleChange}
        type={type}
        value={value} />
    </div>
  )
}
