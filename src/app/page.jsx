import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <Image src="/image.png"  alt="Fundo do jogo" fill className="object-cover -z-10 blur-[2px]"/>

      
      <header className="h-20 w-full px-20 flex justify-between bg-white/5 items-center text-white ">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-300">REAPER DARK</h1>
        </div>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li className="hover:underline cursor-pointer font-semibold">Home</li>
            <li className="hover:underline cursor-pointer font-semibold">Sobre nós</li>
            <li className="hover:underline cursor-pointer font-semibold">Outros Jogos</li>
          </ul>

          <div className="flex gap-4">

            <button className="px-4 py-2 duration-150 cursor-pointer border-1 border-gray-400 hover:bg-gray-400 rounded-lg text-white font-semibold hover:text-black/70">
              Cadastrar-se
            </button>

            <button className="px-4 py-2 duration-150 cursor-pointer bg-black/70 hover:bg-gray-400 rounded-lg text-white font-semibold border-gray-400 border-1 hover:text-black/70"> 
              Jogar agora
            </button>

          </div>

        </nav>
      </header>

      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center  px-10">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl  text-gray-300">Enfrente seus maiores medos, lute contra eles</h1>

        <div className="mt-10 flex gap-6">
          <button className="px-6 py-3 duration-150 font-extrabold rounded-lg cursor-pointer text-gray-200 hover:text-black  border-gray-400 border-2 text-2xl hover:bg-gray-400 ">
            Download
          </button>
          <button className="px-6 py-3 duration-150 rounded-lg cursor-pointer text-gray-200 hover:text-black  border-2 border-gray-400  font-semibold hover:bg-gray-400 ">
            Saber Mais
          </button>
        </div>
      </main>

      <div className="bg-gradient-to-br from-slate-950 to-gray-700">

     <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20 py-20 text-white">
            
        <div className="bg-gradient-to-b from-black/70 to-red-900/20 border border-red-600/10 rounded-2xl p-8 flex flex-col gap-6  shadow-lg shadow-red-900/30">
          <h1 className="text-3xl font-extrabold text-center text-gray-400">
            Exploração Sombria
          </h1>

          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 font-bold">
            <li>Adentre um mundo subterrâneo repleto de segredos ocultos.</li>
            <li>Descubra ambientes misteriosos, cavernas abandonadas e ruínas antigas.</li>
            <li>Cada passo pode revelar uma nova área, mas também novos perigos escondidos na escuridão.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-b from-black/70 to-red-900/20 border border-red-600/10 rounded-2xl p-8 flex flex-col gap-6  shadow-lg shadow-red-900/30">
          <h1 className="text-3xl font-extrabold text-center text-gray-400 drop-shadow-lg">Combate Desafiador</h1>

          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 font-bold">
            <li>Enfrente criaturas sombrias em batalhas intensas.</li>
            <li>Domine armas e habilidades únicas para derrotar inimigos aterrorizantes.</li>
            <li>Combate, precisão e estratégia.</li>
          </ul>

        </div>

        <div className="bg-gradient-to-b from-black/70 to-red-900/20 border border-red-600/10 rounded-2xl p-8 flex flex-col gap-6  shadow-lg shadow-red-900/30">
          <h1 className="text-3xl font-extrabold text-center text-gray-400 drop-shadow-lg">Mistério e Sobrevivência</h1>

          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 font-bold">
            <li>Descubra a verdade por trás da escuridão.</li>
            <li>Resolva enigmas, colete recursos e sobreviva a cada encontro onde cada decisão pode ser a última.</li>
          </ul>

        </div>
      </section>


      </div>

      <footer className="bg-black/90 border-t border-red-600/40 text-gray-400 py-10 text-center">
        <h2 className="text-xl font-bold text-red-700/80 drop-shadow-md">Reaper Dark</h2>

        <p className="mt-2 text-sm italic">"O medo desperta na escuridão da meia-noite."</p>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-red-500 duration-150 hover:underline">Home</a>
          <a href="#" className="hover:text-red-500 duration-150 hover:underline">Sobre</a>
          <a href="#" className="hover:text-red-500 duration-150 hover:underline">Contato</a>
        </div>

        <p className="mt-6 text-xs text-gray-600">© 2025 Reaper Dark. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
