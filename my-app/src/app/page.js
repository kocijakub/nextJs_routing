
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Go to dashboard of games</h1>
      <Link href="/games">Click here</Link>
    </div>
  )
}
