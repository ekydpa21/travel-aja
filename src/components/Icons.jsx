import UserIcon from "../assets/UserIcon.jsx"
import SmsIcon from "../assets/SmsIcon.jsx"
import CalendarIcon from "../assets/CalendarIcon.jsx"
import MapIcon from "../assets/MapIcon.jsx"
import MobileIcon from "../assets/MobileIcon.jsx"
import LockIcon from "../assets/LockIcon.jsx"

const Icons = ({ icon = "user", color }) => {
  const iconsType = {
    user: <UserIcon color={color} />,
    sms: <SmsIcon color={color} />,
    calendar: <CalendarIcon color={color} />,
    map: <MapIcon color={color} />,
    mobile: <MobileIcon color={color} />,
    lock: <LockIcon color={color} />,
  }

  return iconsType[icon]
}

export default Icons
