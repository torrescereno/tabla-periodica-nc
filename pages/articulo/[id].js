import { useRouter } from "next/router"
import Link from "next/link"
import data from "../../data/articulos.json"

export default function Articulo() {

    const router = useRouter()
    const {id} = router.query

    return (
      <section className="flex-col mt-2 lg:-mt-8 w-full md:w-10/12 lg:w-1/2 lg:text-xl">
        <div className="tracking-wide">
          {
            data.map(articulo => {
              if (articulo.id == id)
                return (
                    <div className="w-full flex-col" key={articulo.id}>
                        <div className="text-xl lg:text-3xl font-bold text-center">
                          {articulo.nombre_corto}
                        </div>
                        <div className="p-4 m-4 lg:p-10 shadow-xl rounded-md">
                          <ul className="list-decimal list-inside">
                            {
                              articulo.contenido.map(c => {
                                return(
                                  <li className="mt-2" key={articulo.id}>
                                    {c}
                                  </li>
                                )
                            })
                          }
                          </ul>
                        </div>
                    </div>
                )
            })
          }
        </div>
        <div className="px-5 font-semibold text-purple-800 lg:mt-8">
          <Link href="/">
            Volver a la tabla periódica
          </Link>
        </div>
      </section>
    )
  }
