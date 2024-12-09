import { Toast } from 'react-bootstrap';

export default function Alerts({ show, message, onClose }) {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}
