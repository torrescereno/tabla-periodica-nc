
import Link from "next/link"

export default function Capitulo (props) {
    const {info} = props
    return (
      <div className="p-5 m-1 w-full lg:w-8/12">
        <div id={info.nombre} className="flex text-center items-center mt-5 mb-5">
          <span className={`w-6 h-6 inline-block flex-none shadow-3xl rounded-full ${info.color} mr-5`}></span>
          <h2 className="text-lg font-bold md:text-2xl">{info.nombre}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-9">
          {info.data.map((data) => {
            return (
                <Link key={data.id} href={`/articulo/${data.id}`}>
                    <div className={`flex mx-auto max-w-md rounded-x ${info.color} w-36 h-52 md:w-38 md:h-48 cursor-pointer rounded-xl p-2 shadow-2xl`}>
                      <div className="flex flex-col justify-around text-center w-full">
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
                        <div className="font-thin">
                          <p>{data.nombre_corto}</p>
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