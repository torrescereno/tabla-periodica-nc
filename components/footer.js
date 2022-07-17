export default function Footer (){
    return (
        <>
            <footer className="relative w-full overflow-hidden bg-gradient-to-r bg-purple-900 text-white">
                <div className="block px-6 py-10 mx-auto max-w-7xl">
                    <p className="font-semibold text-center text-slate-600">
                        <a className="hover:underline" href="/pdf/tabla.pdf" target="_blank" rel="noopener noreferrer">
                            Descarga PDF de la tabla periódica
                        </a>
                    </p>
                    <p className="mb-4 font-semibold text-center text-slate-900">
                        Idea original de <a className="hover:underline" target="_blank" rel="noopener noreferrer" href="https://twitter.com/diegotherium" >@diegotherium</a>
                    </p>
                </div>
            </footer>
        </>
    )
}