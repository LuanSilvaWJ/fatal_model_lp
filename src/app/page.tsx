"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CasinoLanding() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [counter, setCounter] = useState(5);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const code = "FestaJuninaWJ"; 

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (showPopup) {
      setCounter(5);
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showPopup]);

  function handleButtonClick() {
    setShowPopup(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      window.location.href = "https://wjcasino.bet.br/br/web/?PPPush04#/register";
    }, 5000);
  }

  function toggleFaq() {
    setIsFaqOpen(!isFaqOpen);
  }

  const carouselImages = ["/01.jpg", "/02.jpg", "/03.jpg"];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselPrev = () =>
    setCarouselIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  const carouselNext = () =>
    setCarouselIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1c25]">
      {}
      <header className="flex justify-center py-6 bg-[#1a1c25]">
        <Image
          src="/logo.webp"
          alt="WJCasino"
          width={300}
          height={67}
          className="h-auto w-55"
        />
      </header>

      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 pt-2 pb-8">
        {}
        <div className="relative w-full max-w-[1600px] mx-auto overflow-hidden rounded-xl mb-12 bg-black">
          <div className="absolute inset-0 opacity-80 mix-blend-screen"></div>
          <div
            className={`relative z-10 w-full ${
              isMobile ? "h-[650px]" : "h-[350px] md:h-[650px]"
            } flex items-center justify-center`}
          >
            <Image
              src={isMobile ? "/fortune-gems-mobile.jpg" : "/fortune-gems.jpg"}
              alt="Fortune Gems"
              fill
              className="object-cover"
            />
            <div
              className={`absolute left-1/2 -translate-x-1/2 z-20 ${
                isMobile
                  ? "bottom-8"
                  : "md:left-[6.5%] md:translate-x-0 md:bottom-[15%]"
              }`}
            >
              <button
                className="pulse-scale bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-6 md:py-5 md:px-21 rounded-lg w-68 md:w-105 text-center transition-all duration-200 shadow-[0_0_16px_0_rgba(255,230,28,0.4)] hover:shadow-[0_0_32px_4px_rgba(255,230,28,0.6)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFE61C] focus:ring-offset-2 whitespace-nowrap flex items-center justify-center text-xl md:text-2xl"
                onClick={handleButtonClick}
                data-gtm="resgatar-codigo-btn"
              >
                RESGATAR CÓDIGO
              </button>
            </div>
          </div>
        </div>

        {}
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {}
          <div className="bg-[#23242c] rounded-2xl p-8 flex-1 max-w-xl w-full flex flex-col justify-center mb-8 md:mb-0">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
              Veja como aplicar o código
              <br />
              dentro do jogo
            </h2>
            <ol className="space-y-4 mb-4">
              <li className="flex items-center gap-4 bg-[#181920] rounded-full px-6 py-3 text-lg text-white font-medium">
                <span className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl border-4 border-[#181920]">
                  1
                </span>
                Clique no ícone de engrenagem
              </li>
              <li className="flex items-center gap-4 bg-[#181920] rounded-full px-6 py-3 text-lg text-white font-medium">
                <span className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl border-4 border-[#181920]">
                  2
                </span>
                Clique no ícone de presente
              </li>
              <li className="flex items-center gap-4 bg-[#181920] rounded-full px-6 py-3 text-lg text-white font-medium">
                <span className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl border-4 border-[#181920]">
                  3
                </span>
                Cole o código e confirme
              </li>
            </ol>
            <p className="text-white text-lg font-medium mt-2">
              E pronto! suas rodadas já estão disponíveis para jogar.
            </p>
          </div>
          {}
          <div className="flex-1 max-w-xl w-full flex flex-col items-center">
            {}
            <div className="relative w-full aspect-[17.3/9] rounded-2xl overflow-hidden bg-[#23242c]">
              <Image
                src={carouselImages[carouselIndex]}
                alt={`Passo ${carouselIndex + 1}`}
                fill
                className="object-contain rounded-2xl transition-all duration-300 bg-black"
                priority
              />
              {}
              <button
                onClick={carouselPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10 hidden md:block"
                aria-label="Anterior"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={carouselNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10 hidden md:block"
                aria-label="Próximo"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
            {}
            <div className="flex justify-center gap-2 mt-4">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    carouselIndex === idx ? "bg-yellow-400" : "bg-gray-500"
                  } transition-all`}
                  onClick={() => setCarouselIndex(idx)}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {}
        <div>
          {}
          {isMobile ? (
            <div className="flex overflow-x-auto gap-6 mb-12 snap-x snap-mandatory scrollbar-hide">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="min-w-[90vw] max-w-xs bg-[#1e2130] rounded-xl overflow-hidden snap-center flex-shrink-0"
                >
                  {}
                  {i === 1 && (
                    <>
                      <Link
                        href="https://wjcasino.bet.br/?aptwjcasino"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="h-52 overflow-hidden cursor-pointer">
                          <Image
                            src="/card-bg-1.jpeg"
                            alt="Saques Rápidos"
                            width={375}
                            height={210}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <div className="p-5 text-center">
                        <Link
                          href="https://wjcasino.bet.br/?aptwjcasino"
                          passHref
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                        >
                          SAQUES RÁPIDOS
                        </Link>
                        <p className="text-white text-base">
                          Tenha acesso a seus ganhos
                          <br />
                          em minutos.
                        </p>
                      </div>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <Link
                        href="https://wjcasino.bet.br/?aptwjcasino"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="h-52 overflow-hidden cursor-pointer">
                          <Image
                            src="/card-bg-2.png"
                            alt="Super Spin"
                            width={375}
                            height={210}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <div className="p-5 text-center">
                        <Link
                          href="https://wjcasino.bet.br/?aptwjcasino"
                          passHref
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                        >
                          CASHBACK SEMANAL
                        </Link>
                        <p className="text-white text-base">
                          Receba 26% de volta em todas
                          <br />
                          as suas apostas semanalmente.
                        </p>
                      </div>
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <Link
                        href="https://wjcasino.bet.br/?aptwjcasino"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="h-52 overflow-hidden cursor-pointer">
                          <Image
                            src="/card-bg-3.jpeg"
                            alt="Odds Up"
                            width={375}
                            height={210}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <div className="p-5 text-center">
                        <Link
                          href="https://wjcasino.bet.br/?aptwjcasino"
                          passHref
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                        >
                          AS MELHORES ODDS
                        </Link>
                        <p className="text-white text-base">
                          Aumente seus ganhos com
                          <br />
                          as melhores Odds em vários esportes.
                        </p>
                      </div>
                    </>
                  )}
                  {i === 4 && (
                    <>
                      <Link
                        href="https://wjcasino.bet.br/?aptwjcasino"
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="h-52 overflow-hidden cursor-pointer">
                          <Image
                            src="/card-bg-4.jpeg"
                            alt="Odds Up"
                            width={375}
                            height={210}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>
                      <div className="p-5 text-center">
                        <Link
                          href="https://wjcasino.bet.br/?aptwjcasino"
                          passHref
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                        >
                          GRUPO NO TELEGRAM
                        </Link>
                        <p className="text-white text-base">
                          Tenha acesso VIP ao grupo exclusivo e<br />
                          fique por dentro das novidades.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-[1600px] mx-auto">
              {/* Card 1 */}
              <div className="bg-[#1e2130] rounded-xl overflow-hidden">
                <Link
                  href="https://wjcasino.bet.br/?aptwjcasino"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-52 overflow-hidden cursor-pointer">
                    <Image
                      src="/card-bg-1.jpeg"
                      alt="Saques Rápidos"
                      width={375}
                      height={210}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-5 text-center">
                  <Link
                    href="https://wjcasino.bet.br/?aptwjcasino"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                  >
                    SAQUES RÁPIDOS
                  </Link>
                  <p className="text-white text-base">
                    Tenha acesso a seus ganhos
                    <br />
                    em minutos.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-[#1e2130] rounded-xl overflow-hidden">
                <Link
                  href="https://wjcasino.bet.br/?aptwjcasino"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-52 overflow-hidden cursor-pointer">
                    <Image
                      src="/card-bg-2.png"
                      alt="Super Spin"
                      width={375}
                      height={210}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-5 text-center">
                  <Link
                    href="https://wjcasino.bet.br/?aptwjcasino"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                  >
                    CASHBACK SEMANAL
                  </Link>
                  <p className="text-white text-base">
                    Receba até 26% de volta em todas
                    <br />
                    as suas apostas semanalmente.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-[#1e2130] rounded-xl overflow-hidden">
                <Link
                  href="https://wjcasino.bet.br/?aptwjcasino"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-52 overflow-hidden cursor-pointer">
                    <Image
                      src="/card-bg-3.jpeg"
                      alt="Odds Up"
                      width={375}
                      height={210}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-5 text-center">
                  <Link
                    href="https://wjcasino.bet.br/?aptwjcasino"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                  >
                    AS MELHORES ODDS
                  </Link>
                  <p className="text-white text-base">
                    Aumente seus ganhos com
                    <br />
                    as melhores Odds em vários esportes.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-[#1e2130] rounded-xl overflow-hidden">
                <Link
                  href="https://wjcasino.bet.br/?aptwjcasino"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-52 overflow-hidden cursor-pointer">
                    <Image
                      src="/card-bg-4.jpeg"
                      alt="Grupo Telegram"
                      width={375}
                      height={210}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-5 text-center">
                  <Link
                    href="https://wjcasino.bet.br/?aptwjcasino"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFE61C] hover:bg-[#e6cf19] text-black font-bold py-3 px-5 rounded-lg w-full mb-4 text-base block"
                  >
                    GRUPO NO TELEGRAM
                  </Link>
                  <p className="text-white text-base">
                    Tenha acesso VIP ao grupo exclusivo e<br />
                    fique por dentro das novidades.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {}
        <div className="bg-[#1e2130] rounded-xl p-8 mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-[#FFE61C] text-black px-8 py-3 rounded-lg flex items-center gap-3 font-medium text-lg">
              <a>Atenção </a>
              <span className="inline-block w-6 h-6 bg-black text-[#FFE61C] rounded-full text-center font-bold leading-tight">
                !
              </span>
            </div>
          </div>
          <p className="text-white text-center text-base leading-relaxed">
            O acesso de menores de 18 anos é estritamente proibido! É da
            responsabilidade de cada jogador agir de acordo com as regras
            válidas tal como em nossos termos e condições. Apostar envolve
            riscos financeiros, jogue com cuidado. Apostar pode ser viciante.
            <br />
            Jogue com responsabilidade!
          </p>
        </div>

        {}
        <div className="flex flex-col items-center mb-12 space-y-4">
          <button
            className="text-white flex items-center gap-3 text-lg bg-transparent hover:bg-[#e6cf19]/20 px-6 py-3 rounded-lg transition-all duration-200"
            onClick={toggleFaq}
          >
            Consulte nosso FAQ
            {isFaqOpen ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </button>
          {}
          {isFaqOpen && (
            <div className="mt-2 p-6 bg-[#1e2130] rounded-lg text-white text-left max-w-2xl w-full animate-fade-in">
              <p className="mb-4">
                <strong>1. Qual o período da campanha?</strong>
                <br />A campanha é válida de{" "}
                <strong>01/07/2025 a 31/07/2025.</strong>
              </p>
              <p className="mb-4">
                <strong>2. O código é único para cada usuário?</strong>
                <br />
                <strong>Sim.</strong> Cada código é{" "}
                <strong>individual e exclusivo</strong> sendo <strong>intransferível</strong> para outros usuários.
              </p>
              <p className="mb-4">
                <strong>3. Quantos jogadores podem resgatar o código?</strong>
                <br />O código é válido apenas para os{" "}
                <strong>primeiros mil jogadores.</strong>
              </p>
              <p className="mb-4">
                <strong>
                  4. O código pode ser usado mais de uma vez?
                </strong>
                <br />
                <strong>Não.</strong> Cada jogador tem direito a{" "}
                <strong>uma única utilização</strong>
              </p>
              <p>
                <strong>5. Como sacar os meus ganhos?</strong>
                <br />
                Após aplicar o código dentro da plataforma e receber cinco spins, <strong>você precisa jogar mais 25 vezes no mesmo jogo</strong> para sacar os seus ganhos.
                <br />
                <br />
              </p>
              <p>
                <strong>6. A campanha pode ser alterada?</strong>
                <br />
                <strong>Sim.</strong> A <strong>WJ Casino</strong> pode alterar os Termos e Condições da campanha a qualquer momento.
              </p>             
              

            </div>
          )}
          <div className="text-center">
          <p className="font-bold text-lg">Regras:</p>
          <p>
            Após aplicar o código dentro da plataforma e receber cinco spins, você precisa jogar mais 25 vezes no mesmo jogo para sacar os seus ganhos.
          </p>
        </div>
        </div>

        {}
        <div className="text-center text-white text-sm mb-12 max-w-[1600px] mx-auto">
          <p className="mb-6">
            A WJCASINO.BET.BR é operada pela UPBET Brasil LTDA, empresa
            registrada sob o CNPJ 56.236.761/0001-00, devidamente licenciada
            pela Secretaria de Prêmio e Apostas do Ministério da Fazenda(SPA/MF)
            para a exploração de apostas de cota fixa em âmbito nacional,
            conforme autorização N° 2104-36, emitida em 30 de Dezembro de 2024 e
            publicada no Diário Oficial da União em 31 de Dezembro de 2024
          </p>
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-transparent border-2 border-[#f5c747] flex items-center justify-center text-[#f5c747] font-bold text-lg">
                <span className="mr-[1px]">+18</span>
              </div>
              <div className="text-left text-xs">
                <p>JOGUE COM RESPONSABILIDADE</p>
                <p>SPA / MF N° 2104-36</p>
              </div>
            </div>
            {}
            <Link
              href="https://wjcasino.bet.br/br/web/terms"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f5c747] text-xs underline transition-colors duration-200"
            >
              Termos e condições
            </Link>
          </div>
        </div>
      </main>

      {}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          {" "}
          {}
          <div className="bg-[#23263a] rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border-4 border-[#EDB436] relative animate-fade-in">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#EDB436] rounded-full p-3 shadow-lg">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23263a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" fill="#EDB436" />
                <path d="M9 12l2 2 4-4" stroke="#23263a" strokeWidth="2.5" />
              </svg>
            </div>
            <h2 className="text-[#EDB436] text-2xl font-extrabold mb-2 mt-6 drop-shadow">
              Código copiado!
            </h2>
            {}
            <div className="flex justify-center mb-4">
              <div className="bg-[#1a1c25] text-[#EDB436] font-mono text-2xl rounded-lg py-3 px-6 border-2 border-[#EDB436] tracking-widest shadow-inner inline-block">
                {" "}
                {}
                {code}
              </div>
            </div>
            <p className="text-white mb-3 text-base font-medium">
              Você será redirecionado para o{" "}
              <span className="text-[#EDB436] font-bold">WJCasino</span> em{" "}
              <span className="text-[#EDB436] font-bold">{counter}</span>{" "}
              segundo{counter === 1 ? "" : "s"}...
            </p>
            <p className="text-xs text-[#EDB436]">
              Se não for redirecionado,{" "}
              <a
                href="https://wjcasino.bet.br/?aptwjcasino"
                className="underline"
              >
                clique aqui
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
