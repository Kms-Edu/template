const Switch = () => {
  return (
    <div className="mb-2">                
      <div className="form-switch inline-block align-middle">
        <input type="checkbox" name={1} id={1} className="form-switch-checkbox" />
        <label className="form-switch-label" htmlFor={1} />
      </div>
      <label className="text-xs text-grey-dark" htmlFor={1}>Default</label>
    </div>

  )
}

export default Switch
