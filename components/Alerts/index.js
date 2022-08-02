import { Alert } from 'react-bootstrap'

export default function AlertMessage(props) {
  
  // variants: success, info, warning, danger
  return (
    <Alert variant={props.variant}>
      {props.message}
    </Alert>
  )
}