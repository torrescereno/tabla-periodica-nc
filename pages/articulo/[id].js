import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../data/articulos.json'

export default function Articulo () {
  const router = useRouter()
  const { id } = router.query

  return (
      <section className="flex-col w-full md:w-10/12 lg:w-1/2 lg:text-xl">
        <div className="tracking-wide">
          {
            data.map(articulo => {
              if (articulo.id === parseInt(id)) {
                return (
                    <div className="w-full flex-col" key={articulo.id}>
                        <div className="text-xl lg:text-3xl font-bold text-center">
                          {articulo.nombre_corto}
                        </div>
                        <div className="p-4 m-4 lg:p-10 shadow-xl rounded-md">
                            {
                              articulo.contenido.map(c => {
                                return (
                                  <p className="mt-2" key={articulo.id}>
                                    {c}
                                  </p>
                                )
                              })
                          }
                        </div>
                    </div>
                )
              }
              return null
            })
          }
        </div>
        <div className="px-5 font-semibold text-purple-800 lg:mt-8">
          <Link href="/">
            <p className="hover:underline cursor-pointer">Volver a la tabla periódica</p>
          </Link>
        </div>
      </section>
  )
}
