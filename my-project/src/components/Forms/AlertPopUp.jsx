import { Alert} from 'antd';
function AlertPopUp() {
  return (
    <div>
       <Alert
      message=" Verification Completed "
      type="success"
      showIcon
      closable
    />
    </div>
  )
}

export default AlertPopUp
