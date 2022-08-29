import React from "react"
import searchIcon from "../assets/search-icon.svg"
import noContent from "../assets/no-content.svg"
import CardUser from "./CardUser"

const Users = () => {
  const users = [1]
  const clearButtonColor = users.length ? "text-[#E54B41]" : "text-[#979797]"
  const clearButtonEvent = !users.length ? "pointer-events-none" : ""

  const handleClear = () => {
    console.log("clicked")
  }

  return (
    <div className="w-full flex flex-col items-center mt-12">
      {/* Header */}
      <div className="grid grid-cols-clear items-center gap-3 w-full">
        <hr />
        <p className={`${clearButtonColor} cursor-pointer ${clearButtonEvent} select-none`} onClick={handleClear}>
          Clear All List User
        </p>
        <hr />
      </div>

      {/* Filter */}
      <div className="w-full py-12 relative">
        <img src={searchIcon} alt="search-icon" className="absolute mt-[7px] ml-[13px]" />
        <input className="text-sm border rounded-md h-[38px] border-[#D1D5DB] px-[45px]" placeholder="Search Anything" type="text" />
      </div>

      {/* List Users */}
      <div className="w-full">
        {!users.length ? (
          <div className="flex flex-col items-center">
            <img src={noContent} alt="no-content" />
            <h4>No List User</h4>
          </div>
        ) : (
          <div className="w-full grid grid-cols-4 gap-6">
            <CardUser />
            <CardUser />
            <CardUser />
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
