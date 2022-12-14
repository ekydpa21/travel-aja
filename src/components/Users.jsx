import { useState, useEffect } from "react"
import searchIcon from "../assets/search-icon.svg"
import noContent from "../assets/no-content.svg"
import CardUser from "./CardUser"
import { useDispatch, useSelector } from "react-redux"
import { clearUsersAction } from "../store/actions/user"

const Users = () => {
  const dispatch = useDispatch()

  const { users } = useSelector((state) => state.user)
  const [filterValue, setFilterValue] = useState("")
  const [shownUsers, setShownUsers] = useState([])

  useEffect(() => {
    const filterUser = users.filter((user) => user?.fullname?.toLowerCase()?.includes(filterValue) || user?.name?.first?.toLowerCase()?.includes(filterValue) || user?.name?.last?.toLowerCase()?.includes(filterValue))
    setShownUsers(filterUser)
  }, [filterValue, users])

  const clearButtonColor = users.length ? "text-[#E54B41]" : "text-[#979797]"
  const clearButtonEvent = !users.length ? "pointer-events-none" : ""

  const handleChange = (e) => {
    const value = e.target.value
    setFilterValue(value)
  }
  const handleClear = () => {
    dispatch(clearUsersAction())
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
        <input className="text-sm border rounded-md h-[38px] border-[#D1D5DB] px-[45px]" placeholder="Search Anything" type="text" onChange={handleChange} />
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
            {shownUsers?.map((user, index) => {
              const initial = user?.fullname?.[0]?.toUpperCase()
              const picture = user?.picture?.medium
              const name = user.fullname ?? `${user.name.title}. ${user.name.first} ${user.name.last}`
              const email = user?.emailaddress ?? user?.email
              const dob = user?.dob?.date ?? user?.dob
              const address = user?.address ?? user?.location?.city
              const phone = user?.phonenumber ?? user?.phone
              const password = user?.password ?? user?.login?.password

              return <CardUser key={index} name={name} picture={picture} initial={initial} email={email} dob={dob} address={address} phone={phone} password={password} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
