import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findFirst();
  return (
    <div>
      this is the next app
      <br />
      {users?.username}
      <br />
      {users?.password}
    </div>
  )
}
