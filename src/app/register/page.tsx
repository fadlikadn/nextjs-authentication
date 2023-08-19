import RegisterForm from "./form"

const RegisterPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
