import { getAllRecords } from "@/api";import Slider from "@/ui/Slider";

export default async function Home() {
  const records = await getAllRecords();

  return (
    <main className="w-full flex min-h-screen flex-col items-center px-4 py-24">
      <section className="container flex py-2 h-fit gap-4">
        <Slider records={records} />
      </section>
    </main>
  );
}
