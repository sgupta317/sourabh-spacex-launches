export default function FilterButton({
  name = '',
  value = '',
  className,
  clickHandler = () => {},
}) {
  return (
    <button
      type="button"
      name={name}
      value={value}
      onClick={clickHandler}
      className={`btn btn-success btn-sm ${className}`}
    >
      {value}
    </button>
  )
}
