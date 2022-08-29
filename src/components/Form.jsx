import React from "react"

const Form = () => {
  const formContents = [
    {
      title: "Full Name",
      placeHolder: "Your Name",
      type: "text",
    },
    {
      title: "Email address",
      placeHolder: "yourmail@mail.com",
      type: "email",
    },
    {
      title: "Date of Birth",
      placeHolder: "dd/mm/yy",
      type: "date",
    },
    {
      title: "Address",
      placeHolder: "Street Address",
      type: "text",
    },
    {
      title: "Phone Number",
      placeHolder: "e.g 813 2811 2993",
      type: "text",
    },
    {
      title: "Password",
      placeHolder: "**********",
      type: "password",
      note: "Minimum of 6 characters, with upper & lower case, a number and a symbol.",
    },
  ]
  return (
    <form className=" w-[768px]">
      {/* Form Header */}
      <div className="mb-6">
        <h1 className="text-lg font-medium mb-1">Personal information</h1>
        <p className="text-sm">This information will be displayed publicly so be careful what you share.</p>
      </div>

      {/* Form Fields */}
      <div className="[&>*:not(:last-child)]:mb-6">
        {formContents.map((formContent, index) => {
          const formWidth = formContent.title === "Date of Birth" ? "w-full" : "w-[504px]"
          return (
            <div key={index}>
              <h3 className="text-sm font-medium mb-1">{formContent.title}</h3>
              <input className={`text-sm border rounded-md h-[38px] border-[#D1D5DB] ${formWidth} px-[13px]`} type={formContent.type} placeholder={formContent.placeHolder} />
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
          <button className="text-base py-[9px] px-[17px] text-[#374151] bg-white border border-[#D1D5DB]">Cancel</button>
          <button className="text-base py-[9px] px-[17px] text-white bg-[#4F46E5]">Submit</button>
        </div>

        {/* Rigth Side Button */}
        <button className="text-base py-[9px] px-[17px] text-[#4338CA] bg-[#E0E7FF]">Auto Generate</button>
      </div>
    </form>
  )
}

export default Form
