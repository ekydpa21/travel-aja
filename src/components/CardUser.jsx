import React from "react"
import ActionIcons from "../assets/Actions.png"
import DividerAction from "../assets/divider-action.svg"

const CardUser = ({ name, picture, initial }) => {
  return (
    <div className="h-[322px] rounded-lg shadow-user_card">
      {/* User Info */}
      <div className="flex flex-col items-center [&>*:not(:last-child)]:mb-6 py-8">
        {picture ? (
          <img src={picture} alt="picture-user" className="w-32 h-32 rounded-full" />
        ) : (
          // <div className={`bg-[url(${picture})] w-32 h-32 rounded-full flex items-center justify-center`}></div>
          <div className={`bg-avatar w-32 h-32 rounded-full flex items-center justify-center`}>
            <p className="text-6xl text-white">{initial}</p>
          </div>
        )}

        <div className="flex flex-col items-center">
          <p className="text-sm font-light mb-1 text-[#6B7280]">Hi, My name is</p>
          <p className="text-base font-medium">{name}</p>
        </div>
      </div>

      <img src={DividerAction} alt="divider-action" />
      <img src={ActionIcons} alt="action-icons" className="border-t-[1px]" />
    </div>
  )
}

export default CardUser
