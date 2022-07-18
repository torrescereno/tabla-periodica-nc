import Logo from '../public/images/como-funciona.png'
import Link from 'next/link'
import Image from 'next/image'

const indice = [
  {
    titulo: 'Principios y disposiciones generales',
    color: 'bg-blue-300'
  },
  {
    titulo: 'Sobre los derechos',
    color: 'bg-pink-500'
  },
  {
    titulo: 'Derechos fundamentales',
    color: 'bg-pink-400'
  },
  {
    titulo: 'Nacionalidad y ciudadanía',
    color: 'bg-pink-300'
  },
  {
    titulo: 'Acciones constitucionales',
    color: 'bg-purple-300'
  },
  {
    titulo: 'Defensoría del prueblo y de la Niñez',
    color: 'bg-pink-200'
  },
  {
    titulo: 'Derechos de la naturaleza',
    color: 'bg-green-200'
  },
  {
    titulo: 'Bienes comunes naturales',
    color: 'bg-green-500'
  },
  {
    titulo: 'Estatuto de las aguas',
    color: 'bg-gray-300'
  },
  {
    titulo: 'Estatuto de los minerales',
    color: 'bg-green-300'
  },
  {
    titulo: 'Defensoría de la Naturaleza',
    color: 'bg-green-800'
  },
  {
    titulo: 'Tipos de demoracia',
    color: 'bg-yellow-200'
  },
  {
    titulo: 'Participación y representación',
    color: 'bg-yellow-400'
  },
  {
    titulo: 'Sufragio y sistema electoral',
    color: 'bg-yellow-600'
  },
  {
    titulo: 'Buen gobierno y función pública',
    color: 'bg-yellow-800'
  },
  {
    titulo: 'Organización territorial',
    color: 'bg-green-100'
  },
  {
    titulo: 'Comuna autónoma',
    color: 'bg-green-600'
  },
  {
    titulo: 'Provincia',
    color: 'bg-gray-600'
  },
  {
    titulo: 'Región autónoma',
    color: 'bg-red-400'
  },
  {
    titulo: 'Autonomías territoriales indígenas',
    color: 'bg-red-500'
  },
  {
    titulo: 'Territorios especiales',
    color: 'bg-gray-500'
  },
  {
    titulo: 'Ruralidad',
    color: 'bg-indigo-300'
  },
  {
    titulo: 'Autonomía fiscal',
    color: 'bg-indigo-500'
  },
  {
    titulo: 'Poder legislativo',
    color: 'bg-blue-500'
  },
  {
    titulo: 'Proceso de creación de leyes',
    color: 'bg-blue-900'
  },
  {
    titulo: 'Poder ejecutivo',
    color: 'bg-purple-700'
  },
  {
    titulo: 'Sistema de justicia',
    color: 'bg-yellow-700'
  },
  {
    titulo: 'Consejo de la justicia',
    color: 'bg-yellow-300'
  },
  {
    titulo: 'Órganos autónomos constitucionales',
    color: 'bg-red-800'
  },
  {
    titulo: 'Contraloría General de la República',
    color: 'bg-red-300'
  },
  {
    titulo: 'Banco Central',
    color: 'bg-blue-800'
  },
  {
    titulo: 'Ministerio Público',
    color: 'bg-green-400'
  },
  {
    titulo: 'Defensoría Penal Pública',
    color: 'bg-purple-200'
  },
  {
    titulo: 'Agencia Nacional de Protección de Datos',
    color: 'bg-purple-500'
  },
  {
    titulo: 'Corte Constitucional',
    color: 'bg-purple-300'
  },
  {
    titulo: 'Reforma constitucional',
    color: 'bg-red-100'
  },
  {
    titulo: 'Cambio de Constitución',
    color: 'bg-red-400'
  }
]

export default function Description () {
  return (
        <>
            <div className="flex-column p-5 m-5 lg:flex lg:justify-center lg:items-center">
                <div className="lg:flex-col lg:justify-center lg:items-center">
                  <div className="text-xl mb-3 pl-1 md:ml-12">
                    <h1>Indice</h1>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-1 md:ml-12">
                    {
                        indice.map((i) => {
                          return (
                                <div key={i.titulo} className="flex mt-1">
                                  <span className={`w-6 h-6 inline-block flex-none shadow-3xl rounded-full ${i.color} mr-5`}></span>
                                  <Link key={i.titulo} href={`#${i.titulo}`} as={`#${i.titulo}`}>{i.titulo}</Link>
                                </div>
                          )
                        })
                    }
                  </div>
                </div>
                <div className="mt-5 -mb-16 lg:mt-0 lg:-mb-0 items-center justify-center lg:w-1/3 relative">
                  <Image alt="Como funciona" objectFit="cover" src={Logo} />
                </div>
            </div>
        </>
  )
}
