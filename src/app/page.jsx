"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";

export default function Home() {

  const handleToast = (msg) => {
    toast(msg, {
      position: "top-center", 
      style: {
        minWidth: "250px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "16px",
        background: "#1f1f1f",
        color: "#fff",
        padding: "16px",
        borderRadius: "12px",
      },
    });
  }

  return (
    <div className="relative w-full overflow-x-hidden">

      <div className="fixed inset-0 -z-50 overflow-hidden">
        <Image src="/image.png" alt="Fundo do jogo" fill className="object-cover animate-zoom blur-[1px]" />
      </div>

      <header className="h-20 w-full px-10 md:px-20 flex justify-between items-center bg-white/5 text-white fixed top-0 left-0 z-50 backdrop-blur-sm">

        <div>
          <h1 className="text-3xl font-extrabold text-gray-300">REAPER DARK</h1>
        </div>

        <nav className="flex items-center gap-6">

          <ul className="flex gap-6">
            <li onClick={() => handleToast("Home está em desenvolvimento...")} className="hover:underline cursor-pointer font-semibold">Home</li>
            <li onClick={() => handleToast("Sobre nós está em desenvolvimento...")} className="hover:underline cursor-pointer font-semibold">Sobre nós</li>
            <li onClick={() => handleToast("Outros Jogos está em desenvolvimento...")} className="hover:underline cursor-pointer font-semibold">Outros Jogos</li>
          </ul>

          <div className="flex gap-4">
            <button onClick={() => handleToast("Cadastrar-se está em desenvolvimento...")} className="px-4 py-2 duration-200 cursor-pointer border border-gray-400 hover:bg-gray-400 rounded-lg text-white font-semibold hover:text-black/70">Cadastrar-se</button>
            <button onClick={() => handleToast("Jogar agora está em desenvolvimento...")} className="px-4 py-2 duration-200 cursor-pointer bg-black/70 hover:bg-gray-400 rounded-lg text-white font-semibold border border-gray-400 hover:text-black/70">Jogar agora</button>
          </div>

        </nav>

      </header>

      <main className="flex flex-col items-center justify-center min-h-screen text-center px-10 pt-28">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl text-gray-300">Enfrente seus maiores medos, lute contra eles</h1>
        <div className="mt-10 flex gap-6">
          <button onClick={() => handleToast("Download está em desenvolvimento...")} className="px-6 py-3 duration-150 font-extrabold rounded-lg cursor-pointer text-gray-200 hover:text-black border-gray-400 border-2 text-2xl hover:bg-gray-400">Download</button>
          <button onClick={() => handleToast("Saber mais está em desenvolvimento...")} className="px-6 py-3 duration-150 rounded-lg cursor-pointer text-gray-200 hover:text-black border-2 border-gray-400 font-semibold hover:bg-gray-400">Saber Mais</button>
        </div>
      </main>

      <section className="bg-gradient-to-br from-slate-950 to-gray-700 text-white px-10 md:px-20 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-gradient-to-b from-black/70 to-red-900/20 border border-red-600/10 rounded-2xl p-8 flex flex-col gap-6 shadow-lg shadow-red-900/30">
          <h2 className="text-3xl font-extrabold text-center text-gray-400">Exploração Sombria</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 font-bold">
            <li>Adentre um mundo subterrâneo repleto de segredos ocultos.</li>
            <li>Descubra ambientes misteriosos, cavernas abandonadas e ruínas antigas.</li>
            <li>Cada passo pode revelar uma nova área, mas também novos perigos escondidos na escuridão.</li>
          </ul>
         
        </div>

        <div className="bg-gradient-to-b from-black/70 to-red-900/20 border border-red-600/10 rounded-2xl p-8 flex flex-col gap-6 shadow-lg shadow-red-900/30">
          <h2 className="text-3xl font-extrabold text-center text-gray-400 drop-shadow-lg">Combate Desafiador</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 font-bold">
            <li>Enfrente criaturas sombrias em batalhas intensas.</li>
            <li>Domine armas e habilidades únicas para derrotar inimigos aterrorizantes.</li>
            <li>Combate, precisão e estratégia.</li>
          </ul>
          
        </div>

        <div className="bg-gradient-to-b from-black/70 to-red-900/20 border border-red-600/10 rounded-2xl p-8 flex flex-col gap-6 shadow-lg shadow-red-900/30">
          <h2 className="text-3xl font-extrabold text-center text-gray-400 drop-shadow-lg">Mistério e Sobrevivência</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 font-bold">
            <li>Descubra a verdade por trás da escuridão.</li>
            <li>Resolva enigmas, colete recursos e sobreviva a cada encontro onde cada decisão pode ser a última.</li>
          </ul>
        
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center w-full gap-10 px-10 py-20">
        <div className="bg-gradient-to-br from-black/95 to-red-900/30 border border-red-600/10 p-8 rounded-2xl w-full md:w-1/2 flex flex-col items-center shadow-lg">
          <h2 className="w-full mb-6 text-center text-2xl font-bold text-gray-200">Formulário de Contato</h2>

          <form className="w-full space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 font-semibold text-sm">Nome completo</label>
                <input type="text" className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-900/70 bg-gray-200 text-gray-900 rounded-xl border border-gray-300 shadow-sm mt-2" placeholder="John Doe" />
              </div>

              <div>
                <label className="text-gray-400 font-semibold text-sm">Email</label>
                <input type="text" className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-900/70 bg-gray-200 text-gray-900 rounded-xl border border-gray-300 shadow-sm mt-2" placeholder="JohnDoe@gmail.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 font-semibold text-sm">Telefone</label>
                <input type="text" className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-900/70 bg-gray-200 text-gray-900 rounded-xl border border-gray-300 shadow-sm mt-2" placeholder="(12)1234-5678" />
              </div>

              <div>
                <label className="text-gray-400 font-semibold text-sm">Assunto</label>
                <input type="text" className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-900/70 bg-gray-200 text-gray-900 rounded-xl border border-gray-300 shadow-sm mt-2" placeholder="Ex: Suporte, Parceria" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-400 font-semibold text-sm">Mensagem</label>
              <textarea className="w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-900/70 bg-gray-200 text-gray-900 rounded-xl border border-gray-300 shadow-sm mt-2" placeholder="Digite sua mensagem..." rows={3} />
            </div>
            <div className="flex justify-center">
              <button type="button" onClick={() => handleToast("Enviar está em desenvolvimento...")} className="hover:bg-gray-400 px-8 cursor-pointer py-2 rounded-lg bg-gray-200 text-black font-semibold duration-150">Enviar</button>
            </div>
          </form>
        </div>

        <div className="bg-gradient-to-br from-black/95 to-red-900/20 border border-red-600/10 p-8 rounded-2xl w-full md:w-1/3 flex flex-col items-center justify-center shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Apoie o Projeto</h2>
          <p className="text-gray-400 mb-6 text-sm">Ajude a manter o desenvolvimento do jogo. Sua contribuição faz toda a diferença!</p>
          <button onClick={() => handleToast("Apoiar agora está em desenvolvimento...")} className="px-8 py-3 bg-red-700 hover:bg-red-400/70 cursor-pointer text-white font-semibold rounded-lg shadow-lg duration-200">Apoiar Agora</button>
        </div>
      </section>

      <footer className="bg-black/85 border-t border-red-600/40 text-gray-400 py-10 text-center">
        <h2 className="text-xl font-bold text-red-700/80 drop-shadow-md">Reaper Dark</h2>
        <p className="mt-2 text-sm italic">"O medo desperta na escuridão da meia-noite."</p>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a onClick={() => handleToast("Home está em desenvolvimento...")} className="hover:text-red-500 duration-150 hover:underline cursor-pointer">Home</a>
          <a onClick={() => handleToast("Sobre está em desenvolvimento...")} className="hover:text-red-500 duration-150 hover:underline cursor-pointer">Sobre</a>
          <a onClick={() => handleToast("Contato está em desenvolvimento...")} className="hover:text-red-500 duration-150 hover:underline cursor-pointer">Contato</a>
        </div>
        <p className="mt-6 text-xs text-gray-600">© 2025 Reaper Dark. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
