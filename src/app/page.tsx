import { getAllRecords } from "@/api"

export default async function Home() {
  const records = await getAllRecords()

  console.log(records);

  return (
    <main className="w-full flex min-h-screen flex-col items-center p-24">
      <section className="container">
        <Card />
      </section>
    </main>
  )
}
