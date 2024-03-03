

const Button = ({ children, className, onClick, ...allyProps }) => (
  <button className={className} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

export default Button;
