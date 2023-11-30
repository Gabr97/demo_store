export default function Newsletter() {
    return (
        <div data-aos='fade-left' className="bg-[url(/newsletter.png)] relative bg-right xl:bg-center newsletter mt-16">
            <div className="absolute w-full h-full bg-zinc-900/50"></div>
            <div className="container px-4 xl:px-0 relative h-full mx-auto">
                <div className="absolute lg:block hidden h-[100px] w-[1px] left-2/4 top-2/4 -translate-y-2/4 bg-zinc-50/30 -translate-x-2/4"></div>
                <div className="lg:grid flex flex-col justify-center gap-4 xl:items-center text-white h-full lg:grid-cols-2">
                    <div>
                        <div className="text-2xl xl:text-4xl">
                            Acompanhe de perto as <b>nossas ofertas</b>
                        </div>
                        <span className="pt-8 block text-white/80">Cadastre-se e saiba das <b className="main-yellow-text">novidades</b> sempre com antecedência</span>
                    </div>
                    <div className="lg:px-16">
                        <div className="flex gap-4">
                            <input className="lg:w-full w-fit text-zinc-400 outline-none lg:focus:px-12 transition-all p-4 xl:p-6" placeholder="Digite seu e-mail" />
                            <button className="lg:px-16 px-2 uppercase lg:text-md text-sm font-[900]">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}