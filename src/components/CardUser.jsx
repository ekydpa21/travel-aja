import React from "react"
import DividerAction from "../assets/divider-action.svg"
import userIcon from "../assets/userIcon.png"
import smsIcon from "../assets/smsIcon.svg"
import calendarIcon from "../assets/calendarIcon.svg"
import mapIcon from "../assets/mapIcon.svg"
import mobileIcon from "../assets/mobileIcon.svg"
import lockIcon from "../assets/lockIcon.svg"

const CardUser = ({ name, picture, initial }) => {
  const actionIcons = [userIcon, smsIcon, calendarIcon, mapIcon, mobileIcon, lockIcon]

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
          <p className="text-sm font-light mb-1 text-[#6B7280]">Hi, My name is</p>
          <p className="text-base font-medium">{name}</p>
        </div>
      </div>

      <div className="grid grid-cols-6">
        {actionIcons.map((_, index) => {
          return index === 0 && <img src={DividerAction} alt="divider-action" key={index} className="w-full" />
        })}
      </div>

      <div className="border-t-[1px] grid grid-cols-6">
        {actionIcons.map((icon, index) => {
          return (
            <div className="border-t-[1px] flex justify-center items-center h-[57px]" key={index}>
              <img src={icon} alt="action-icons" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardUser
