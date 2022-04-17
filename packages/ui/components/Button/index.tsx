import StyledButton from "./styled"

const Button: React.FC = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

export { Button }
