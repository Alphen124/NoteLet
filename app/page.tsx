import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col items-center justify-center py-32 px-16 bg-white">
        <h1 className="text-3xl font-semibold mb-8">User's Device</h1>

        <p className="mb-6 text-zinc-600">ทำไว้กดไปหน้า Owner.</p>

        <Link href="/owner/1">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">Open Device</button>
        </Link>

        
      </main>
    </div>
  );
}
