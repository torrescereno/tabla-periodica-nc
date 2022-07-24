
import Link from 'next/link'

export default function Capitulo (props) {
  const { info } = props
  return (
      <div className="w-full flex-col justify-center items-center p-5 m-1 lg:w-8/12">
        <div id={info.nombre} className="flex text-center mt-5 mb-5">
          <span className={`w-6 h-6 inline-block flex-none shadow-3xl rounded-full ${info.color} mr-5`}></span>
          <h2 className="text-lg font-bold md:text-2xl">{info.nombre}</h2>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 justify-center items-center md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6">
          {info.data.map((data) => {
            return (
                <Link key={data.nombre_corto} href={`/articulo/${data.id}`}>
                  <div className={`flex max-w-md rounded-x ${info.color} w-42 h-60 md:w-40 md:h-52 cursor-pointer rounded-xl p-2 shadow-2xl overflow-hidden`}>                      <div className="flex flex-col justify-around text-center w-full">
                        <div className="flex justify-around font-extralight tracking-widest">
                          <div className="flex justify-center">
                            <p className="text-2xl">{data.num_articulo}</p>
                            <p className="self-end">({data.num_inciso})</p>
                          </div>
                          <p className="text-xl">p.{data.pag}</p>
                        </div>
                        <div className="font-medium text-7xl">
                          <p>{data.simbolo}</p>
                        </div>
                        <div className="font-thin h-12">
                          <p className="flex items-center justify-center w-full h-full text-sm">{data.nombre_corto}</p>
                        </div>
                      </div>
                  </div>
                </Link>
            )
          })
          }
        </div>
      </div>
  )
}
