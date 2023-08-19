import { LoginButton, LogoutButton, ProfileButton, ProfileServerButton, RegisterButton } from "@/components/buttons.component"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { User } from "@/components/user.component"
import Header from "@/components/header.component"

const Home = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20 text-ct-dark-600">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Learn NextAuth Homepage
          </p>
        </div>
      </section>
    </>
    // <main style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   height: "70vh",
    // }}>
    //   <div>
    //     <LoginButton />
    //     <RegisterButton />
    //     <LogoutButton />
    //     <ProfileButton />
    //     <ProfileServerButton />

    //     <h1>Server Session</h1>
    //     <pre>{JSON.stringify(session)}</pre>

    //     <User/>
    //   </div>
    // </main>
  )
}

export default Home
