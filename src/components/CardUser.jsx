import { useState } from "react"
import DividerAction from "../assets/divider-action.svg"
import Icons from "./Icons"

const CardUser = ({ name, picture, initial, email, dob, address, phone, password }) => {
  const actionIcons = ["user", "sms", "calendar", "map", "mobile", "lock"]
  const [activeAction, setActiveAction] = useState(0)

  const handleActiveAction = (tab) => {
    setActiveAction(tab)
  }

  const day = new Date(dob).getDate()
  const month = new Date(dob).getMonth() + 1
  const year = new Date(dob).getFullYear()
  const date = `${day}/${month}/${year}`

  const info = {
    0: {
      label: "Hi, My name is",
      value: name,
    },
    1: {
      label: "My email address is",
      value: email,
    },
    2: {
      label: "My birhtday is",
      value: date,
    },
    3: {
      label: "My address is",
      value: address,
    },
    4: {
      label: "My phone number is",
      value: `(+62) ${phone}`,
    },
    5: {
      label: "My password is",
      value: password,
    },
  }

  return (
    <div className="h-[322px] rounded-lg shadow-user_card">
      {/* User Info */}
      <div className="flex flex-col items-center [&>*:not(:last-child)]:mb-6 py-8">
        {picture ? (
          <img src={picture} alt="picture-user" className="w-32 h-32 rounded-full" />
        ) : (
          <div className={`bg-avatar w-32 h-32 rounded-full flex items-center justify-center`}>
            <p className="text-6xl text-white">{initial}</p>
          </div>
        )}

        <div className="flex flex-col items-center">
          <p className="text-sm font-light mb-1 text-[#6B7280]">{info[activeAction].label}</p>
          <p className="text-base font-medium">{info[activeAction].value}</p>
        </div>
      </div>

      <div className="grid grid-cols-6">
        {actionIcons.map((_, index) => {
          return index === activeAction ? <img src={DividerAction} alt="divider-action" key={index} className="w-full" /> : <div className="border-b-[1px]" key={index} />
        })}
      </div>

      <div className="border-t-[1px] grid grid-cols-6">
        {actionIcons.map((icon, index) => {
          const iconColor = index === activeAction ? "#E54B41" : "#4B5563"

          return (
            <div className={`flex justify-center items-center h-[57px]`} key={index} onClick={() => handleActiveAction(index)}>
              <div className="cursor-pointer">
                <Icons icon={icon} color={iconColor} className="cursor-pointer" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardUser
