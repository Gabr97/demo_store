const formasDePagamento = ['/formas_de_pagamento.png']

export default function Footer() {
    return (
        <footer className="flex text-white flex-col">
            <div className="lg:grid flex flex-col-reverse py-24 px-4 xl:px-0 container mx-auto gap-24 lg:grid-cols-3">
                <div className="flex lg:col-span-1 gap-4 flex-col">
                    <div>
                        <img src="/footer_logo.svg" />
                    </div>
                    <div className="text-sm text-white/60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </div>
                    <div className="flex items-center gap-4">
                        <a>
                            <img src="/twitter.svg" />
                        </a>
                        <a>
                            <img src="/instagram.svg" />
                        </a>
                        <a>
                            <img src="/facebook.svg" />
                        </a>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:col-span-2 gap-8 justify-between">
                    <div className="flex gap-8 flex-col">
                        <b className="uppercase main-yellow-text">contato</b>
                        <ul className="flex text-sm text-white/60 gap-4 font-[200] flex-col">
                            <li>seuemailparacontato@email.com</li>
                            <li>+55 19 00000-0000</li>
                        </ul>
                    </div>
                    <div className="flex gap-8 flex-col">
                        <b className="uppercase main-yellow-text">sobre nós</b>
                        <ul className="flextext-sm text-white/60 gap-4 font-[200] flex-col">
                            <li>Nossas unidades</li>
                            <li>Quem somos</li>
                        </ul>
                    </div>
                    <div className="flex gap-8 flex-col">
                        <b className="uppercase main-yellow-text">categorias</b>
                        <ul className="flex text-sm text-white/60 gap-4 font-[200] flex-col">
                            <li>PC</li>
                            <li>Playstation</li>
                            <li>Mobile</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="container p-4 text-zinc-900 text-sm lg:gap-8 gap-2 justify-center flex lg:flex-row flex-col items-center mx-auto">
                    <span>Formas de pagamento</span>
                    <div className="flex items-center">
                        {formasDePagamento.map((formaDePagamento, i)=>{
                            return <img src={formaDePagamento} key={i}/>
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}