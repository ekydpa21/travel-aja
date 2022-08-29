import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitAction, autoGenerateUserAction } from "../store/actions/user"
import formContents from "../data/formContents"
import emptyForm from "../data/emptyForm.json"

const Form = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(emptyForm)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }
  const handleCancel = () => {
    setUser(emptyForm)
  }
  const handleSubmit = () => {
    dispatch(submitAction(user))
    setUser(emptyForm)
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

          return (
            <div key={index}>
              <h3 className="text-sm font-medium mb-1">{formContent.title}</h3>
              <div className="flex">
                {withPrefix && <div className="w-[52px] rounded-md rounded-r-none flex items-center justify-center text-sm text-[#D1D5DB] bg-[#F9FAFB]">+62</div>}
                <input
                  className={`text-sm border ${borderRadius} h-[38px] border-[#D1D5DB] ${formWidth} px-[13px]`}
                  name={inputName}
                  value={user[inputName] ?? ""}
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
