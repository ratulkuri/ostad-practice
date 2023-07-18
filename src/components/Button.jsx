const Button = ({className = "", children, ...props}) => {
  return (
    <>
        <button className={`${className} block flex-shrink-0 px-3 py-1.5 disabled:opacity-50 rounded-md border`} {...props}>
            {children}
        </button>
    </>
  )
}

export default Button