export const metadata = {
  title: 'Portifolio - César Etã',
  description: 'Portifolio de um projeto em NextJS',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* Remoção da Newsletter <Newsletter /> */}
    </>
  )
}
