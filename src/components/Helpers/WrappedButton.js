import { Button } from 'react-bootstrap';

// Get rid of "navigate" prop to prevent errors on console:
const WrappedButton = ({ navigate, ...props }) => <Button {...props} />;

export default WrappedButton;
