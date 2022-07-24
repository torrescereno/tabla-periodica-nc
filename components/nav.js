import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/images/logo.svg'

export default function Nav () {
  return (
    <>
      <div className="text-white w-full bg-purple-900 mb-10 ">
        <nav className="flex justify-between items-center w-full p-2">
          <section className='p-2'>
            <Image alt="Como funciona" src={Logo} width={100} height={40} />
          </section>
          <section className='w-1/2 flex justify-end'>
            <span className='mr-4'>
              <Link href="/">Inicio</Link>
            </span>
            <span>
              <Link href="/">Estadisticas</Link>
            </span>
          </section>
        </nav>
        <header className="w-full h-48 flex-col justify-center items-center text-center text-2xl font-extrabold tracking-tigh md:text-4xl lg:text-6xl">
              <span className="block">Tabla periódica</span>
              <span className="block">de la nueva constitución</span>
        </header>
      </div>
    </>
  )
}
