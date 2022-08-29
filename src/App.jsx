import Form from "./components/Form"
import Users from "./components/Users"

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center py-12 px-8 overflow-x-hidden">
      {/* Form */}
      <Form />

      {/* Users */}
      <Users />
    </div>
  )
}

export default App
