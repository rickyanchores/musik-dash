import Image from 'next/image'
import Hero from './Hero/page'
import GridMusicApp from './GridMusicApp/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero />
     <GridMusicApp />
    </main>
  )
}
