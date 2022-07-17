import Link from "next/link"

export default function Nav() {


  return (
    <>
     <section className="text-white bg-purple-900">
       {/* <div className="flex justify-evenly text-center pt-2 lg:pt-8">
          <a className="mt-2 p-2 border-2 rounded-md w-40" href="/pdf/Texto-CPR-2022.pdf" target="_blank" rel="noopener noreferrer">
              Descarga PDF
          </a>
          <a href="https://www.chileconvencion.cl/" className="mt-2 p-2 border-2 rounded-md w-40" target="_blank" rel="noopener noreferrer">
              chileconvencion.cl
          </a>
        </div> */}

        <section className="flex justify-center items-center">
          <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between text-center">
            <div className="text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tigh">
              <span className="block">Tabla periódica</span>
              <span className="block">de la nueva constitución</span>
            </div>
          </div>
        </section>
      </section>

      <section className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </section>
    </>
  )
}
