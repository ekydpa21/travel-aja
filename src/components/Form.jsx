import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitAction, autoGenerateUserAction } from "../store/actions/user"
import formContents from "../data/formContents"
import emptyForm from "../data/emptyForm.json"

const ValidateEmail = (inputText) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (inputText.match(mailformat)) {
    return true
  } else {
    return false
  }
}
const ValidatePassword = (inputText) => {
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})")
  if (inputText.match(strongRegex)) {
    return true
  } else {
    return false
  }
}
const ValidateName = (inputText) => {
  let letters = /^[A-Za-z ]+$/
  if (inputText.match(letters)) {
    return true
  } else {
    return false
  }
}

const Form = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(emptyForm)
  const [error, setError] = useState(emptyForm)

  const handleChange = (e) => {
    const name = e.target.name
    const value = name === "dob" ? new Date(e.target.value).toISOString() : e.target.value

    if (name === "fullname") {
      const isValidated = ValidateName(value)
      const isPassedValidate = isValidated ? "" : "wrong name format"
      const isLengthMoreThan50 = value.length > 50 ? "max length is 50" : isPassedValidate
      const isEmpty = value.length === 0 ? "Full Name Cannot Be Empty" : isLengthMoreThan50
      setError({ ...error, [name]: isEmpty })
    }
    if (name === "emailaddress") {
      const isValidated = ValidateEmail(value)
      setError({ ...error, [name]: isValidated ? "" : "wrong email format" })
    }
    if (name === "password") {
      const isValidated = ValidatePassword(value)
      setError({ ...error, [name]: isValidated ? "" : "wrong password format" })
    }

    setUser({ ...user, [name]: value })
  }
  const handleCancel = () => {
    setUser(emptyForm)
  }
  const handleSubmit = () => {
    const { fullname, emailaddress, dob, address, phonenumber, password } = user
    if ([fullname, emailaddress, dob, address, phonenumber, password].includes("")) {
      alert("Please fill all of the forms")
    } else if (error.fullname !== "" || error.emailaddress !== "" || error.dob !== "" || error.address !== "" || error.phonenumber !== "" || error.password !== "") {
      alert("Please fill all of the required format")
    } else {
      dispatch(submitAction(user))
      setUser(emptyForm)
      setError(emptyForm)
    }
  }
  const handleAutoGenerate = () => {
    dispatch(autoGenerateUserAction())
  }

  return (
    <div className=" w-[768px]">
      {/* Form Header */}
      <div className="mb-6">
        <h1 className="text-lg font-medium mb-1">Personal information</h1>
        <p className="text-sm">This information will be displayed publicly so be careful what you share.</p>
      </div>

      {/* Form Fields */}
      <div className="[&>*:not(:last-child)]:mb-6">
        {formContents.map((formContent, index) => {
          const formWidth = formContent.title === "Date of Birth" ? "w-full" : "w-[504px]"
          const formattedInputName = formContent.title.replaceAll(" ", "").toLocaleLowerCase()
          const inputName = formattedInputName === "dateofbirth" ? "dob" : formattedInputName
          const withPrefix = formattedInputName === "phonenumber"
          const borderRadius = withPrefix ? "rounded-l-none rounded-md" : "rounded-md"

          const day = new Date(user["dob"]).getDate()
          const month = new Date(user["dob"]).getMonth() + 1
          const year = new Date(user["dob"]).getFullYear()
          const date = `${year}-${month < 10 && "0"}${month}-${day}`
          const inputValue = inputName === "dob" ? date : user[inputName]

          return (
            <div key={index}>
              <div className="flex justify-between">
                <h3 className="text-sm font-medium mb-1">{formContent.title}</h3>
                {error[inputName].length > 0 && <p className="text-sm font-light mt-1 text-red-600">{error[inputName]}</p>}
              </div>
              <div className="flex">
                {withPrefix && <div className="w-[52px] rounded-md rounded-r-none flex items-center justify-center text-sm text-[#D1D5DB] bg-[#F9FAFB]">+62</div>}
                <input
                  className={`text-sm border ${borderRadius} h-[38px] border-[#D1D5DB] ${formWidth} px-[13px]`}
                  name={inputName}
                  value={inputValue ?? ""}
                  type={formContent.type}
                  placeholder={formContent.placeHolder}
                  onChange={handleChange}
                />
              </div>
              {formContent.note && <p className="text-sm font-light mt-1 text-[#6B7280]">{formContent.note}</p>}
            </div>
          )
        })}
      </div>

      <hr className="mt-8 mb-5" />

      {/* Buttons */}
      <div className="flex justify-between">
        {/* Left Side Button */}
        <div className="grid grid-cols-2 gap-3">
          <button className="text-base py-[9px] px-[17px] text-[#374151] bg-white border border-[#D1D5DB]" onClick={handleCancel}>
            Cancel
          </button>
          <button className="text-base py-[9px] px-[17px] text-white bg-[#4F46E5]" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {/* Rigth Side Button */}
        <button className="text-base py-[9px] px-[17px] text-[#4338CA] bg-[#E0E7FF]" onClick={handleAutoGenerate}>
          Auto Generate
        </button>
      </div>
    </div>
  )
}

export default Form
