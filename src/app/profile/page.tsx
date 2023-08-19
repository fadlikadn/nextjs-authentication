'use client'

/* eslint-disable @next/next/no-img-element */
import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import { cache, use } from "react"
import Header from "@/components/header.component"

type User = {
  id: number
  name: string
  email: string
}

const getUsers = cache(() => fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()))

const Profile = () => {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin")
    },
  })
  const user = session?.user

  if (status === "loading") {
    return <p>Loading...</p>
  }

  let users = use<User[]>(getUsers())

  return (
    <>
      <Header />
      <section className="bg-ct-blue-600  min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center text-ct-dark-600">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            
            {!user ? (
              <p>Loading...</p>
            ) : (
              <div className="flex items-center gap-8">
                <div>
                  <img
                    src={user.image ? user.image : "/images/default.png"}
                    className="max-h-36"
                    alt={`profile photo of ${user.name}`}
                  />
                </div>
                <div className="mt-8">
                  <p className="mb-3">Name: {user.name}</p>
                  <p className="mb-3">Email: {user.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {users.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      </main> */}
    </>
    
  )
}

export default Profile
