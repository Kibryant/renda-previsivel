import Image from "next/image"
import Link from "next/link"
import { Check, CheckCircle, Clock, DollarSign, Lightbulb, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import BenefitCard from "@/components/benefit-card"
import TestimonialCard from "@/components/testimonial-card"
import FAQAccordion from "@/components/faq-accordion"
import CountdownTimer from "@/components/countdown-timer"
import CountUpStat from "@/components/count-up-stat"
import QualificationForm from "@/components/qualification-form"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Formulário de qualificação (aparece apenas na primeira visita) */}
      <QualificationForm />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-black to-zinc-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="Renda Previsível" width={50} height={50} className="h-12 w-auto" />
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Descubra como criar seu produto digital e faturar
                <span className="text-amber-400"> 50 mil reais</span> por mês pela internet.
              </h1>

              <p className="text-lg md:text-xl text-gray-300">
                Aplique o Método Renda Previsível para escalar seu faturamento e construir sua liberdade financeira,
                geográfica e de tempo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6">
                  QUERO VENDER ONLINE!
                </Button>
                <div className="flex items-center text-amber-400">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>Oferta por tempo limitado</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-zinc-800/80 backdrop-blur-sm rounded-xl border border-amber-400/20 p-6 shadow-2xl">
                <div className="space-y-8">
                  {/* Estatísticas animadas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-zinc-700/50 rounded-lg">
                      <CountUpStat value={200} suffix="+" />
                      <p className="text-amber-400 font-medium">Alunos</p>
                    </div>
                    <div className="text-center p-4 bg-zinc-700/50 rounded-lg">
                      <CountUpStat value={50} suffix="K+" />
                      <p className="text-amber-400 font-medium">Faturamento</p>
                    </div>
                    <div className="text-center p-4 bg-zinc-700/50 rounded-lg">
                      <CountUpStat value={7} suffix=" dias" />
                      <p className="text-amber-400 font-medium">Garantia</p>
                    </div>
                    <div className="text-center p-4 bg-zinc-700/50 rounded-lg">
                      <CountUpStat value={24} suffix="/7" />
                      <p className="text-amber-400 font-medium">Suporte</p>
                    </div>
                  </div>

                  {/* Contador regressivo */}
                  <div className="text-center">
                    <p className="text-sm mb-1">Oferta especial expira em:</p>
                    <div className="flex justify-center gap-2">
                      <div className="bg-amber-500 text-black px-3 py-2 rounded-md font-mono font-bold">23</div>
                      <div className="text-amber-500 flex items-center">:</div>
                      <div className="bg-amber-500 text-black px-3 py-2 rounded-md font-mono font-bold">59</div>
                      <div className="text-amber-500 flex items-center">:</div>
                      <div className="bg-amber-500 text-black px-3 py-2 rounded-md font-mono font-bold">59</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-zinc-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Para quem é o <span className="text-amber-600">Método Renda Previsível?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <BenefitCard
              icon={<Users className="h-10 w-10 text-amber-600" />}
              title="+ de 200 mentorados"
              description="De diversos segmentos profissionais que transformaram conhecimento em renda"
            />

            <BenefitCard
              icon={<Lightbulb className="h-10 w-10 text-amber-600" />}
              title="Para quem tem ou quer criar"
              description="Um produto digital e não sabe por onde começar"
            />

            <BenefitCard
              icon={<DollarSign className="h-10 w-10 text-amber-600" />}
              title="Para cursos, mentorias e serviços"
              description="Consultoria, serviços e produtos digitais de qualquer nicho"
            />

            <BenefitCard
              icon={<Clock className="h-10 w-10 text-amber-600" />}
              title="Sem precisar vender sua hora"
              description="Trabalhe de acordo com sua agenda e tenha liberdade de tempo"
            />

            <BenefitCard
              icon={<CheckCircle className="h-10 w-10 text-amber-600" />}
              title="Com direcionamento individual"
              description="Dos nossos especialistas para acelerar seus resultados"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full bg-zinc-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Você está cansado de...</h2>

            <ul className="space-y-4 text-left text-lg">
              <li className="flex items-start">
                <X className="size-8 text-red-500 mr-2" />
                <span>
                  Trabalhar muitas horas por dia e ainda assim não conseguir a liberdade financeira que deseja?
                </span>
              </li>
              <li className="flex items-start">
                <X className="size-8 text-red-500 mr-2" />
                <span>
                  Ver outras pessoas vendendo produtos digitais e faturando alto enquanto você não sabe por onde
                  começar?
                </span>
              </li>
              <li className="flex items-start">
                <X className="size-8 text-red-500 mr-2" />
                <span>Investir em cursos que prometem resultados mas não entregam um método prático e comprovado?</span>
              </li>
              <li className="flex items-start">
                <X className="size-8 text-red-500 mr-2" />
                <span>Não ter tempo para sua família e para fazer o que realmente gosta?</span>
              </li>
            </ul>

            <div className="pt-6">
              <h3 className="text-2xl font-bold text-amber-400">Existe uma solução comprovada para isso!</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Apresentando o <span className="text-amber-600">Método Renda Previsível</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/mockup.webp?height=400&width=500"
                  alt="Método Renda Previsível"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Um sistema completo para:</h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                   <Check className="size-8 text-green-500 mr-2" />
                    <span>Criar seu produto digital mesmo que você não tenha experiência técnica</span>
                  </li>
                  <li className="flex items-start">
                   <Check className="size-8 text-green-500 mr-2" />
                    <span>Estruturar uma estratégia de vendas que funciona em qualquer nicho</span>
                  </li>
                  <li className="flex items-start">
                   <Check className="size-8 text-green-500 mr-2" />
                    <span>Escalar seu faturamento de forma previsível e consistente</span>
                  </li>
                  <li className="flex items-start">
                   <Check className="size-8 text-green-500 mr-2" />
                    <span>Automatizar seus processos para ter mais liberdade de tempo</span>
                  </li>
                  <li className="flex items-start">
                   <Check className="size-8 text-green-500 mr-2" />
                    <span>Construir uma audiência engajada que compra seus produtos</span>
                  </li>
                </ul>

                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6">
                  QUERO CONHECER O MÉTODO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-zinc-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos alunos estão dizendo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Carlos Silva"
              profession="Coach de Produtividade"
              testimonial="Em apenas 3 meses aplicando o método, consegui lançar meu primeiro produto digital e faturei R$32.450,00. O suporte da equipe foi fundamental para o meu sucesso."
              imageUrl="/placeholder.svg?height=100&width=100"
              rating={5}
            />

            <TestimonialCard
              name="Mariana Costa"
              profession="Nutricionista"
              testimonial="Eu não entendia nada de marketing digital, mas o método é tão claro e prático que consegui criar meu curso online e já estou com mais de 200 alunos. Mudou minha vida!"
              imageUrl="/placeholder.svg?height=100&width=100"
              rating={5}
            />

            <TestimonialCard
              name="Roberto Almeida"
              profession="Consultor Financeiro"
              testimonial="Já tinha tentado vender meus serviços online sem sucesso. Com o Método Renda Previsível, entendi onde estava errando e agora tenho uma renda mensal de mais de R$40 mil."
              imageUrl="/placeholder.svg?height=100&width=100"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="w-full bg-zinc-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Oferta Especial por Tempo Limitado</h2>

            <div className="bg-zinc-800 rounded-lg p-8 border-2 border-amber-400">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Método Renda Previsível + Bônus Exclusivos</h3>

                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <p className="text-gray-400 line-through text-xl">De R$197,00</p>
                    <p className="text-3xl md:text-4xl font-bold text-amber-400">Por apenas R$29,99</p>
                    <p className="text-sm">ou 12x de R$2,99</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-lg">Esta oferta expira em:</p>
                  <CountdownTimer hours={23} minutes={59} seconds={59} />
                </div>

                <div className="mt-6 mb-4">
                  <div className="bg-amber-500/10 border-2 border-amber-500 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="pt-1">
                        <input
                          type="checkbox"
                          id="orderBump"
                          className="w-5 h-5 accent-green-600 cursor-pointer"
                          defaultChecked={true}
                        />
                      </div>
                      <div>
                        <label htmlFor="orderBump" className="flex flex-col cursor-pointer">
                          <span className="font-bold text-amber-400 text-lg">
                            SUPER OFERTA: Adicione por apenas R$7
                          </span>
                          <span className="text-white text-base mt-1">
                            Guia Completo: "Tráfego Pago para Produtos Digitais" - Aprenda como criar campanhas de
                            anúncios altamente lucrativas para vender seu produto digital
                          </span>
                          <div className="flex items-center mt-2 text-sm text-gray-300">
                            <span className="line-through mr-2">De R$97</span>
                            <span className="text-green-500 font-bold">Por apenas R$7</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6">
                  QUERO GARANTIR MINHA VAGA AGORA
                </Button>

                <p className="text-sm text-gray-400">
                  Pagamento 100% seguro. Garantia de 7 dias ou seu dinheiro de volta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

            <FAQAccordion />

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6">
                QUERO COMEÇAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-zinc-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Image src="/logo.png" alt="Renda Previsível" width={40} height={40} className="h-10 w-auto mx-auto" />

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Método Renda Previsível. Todos os direitos reservados.
            </p>

            <div className="flex justify-center space-x-4">
              <Link href="/termos" className="text-sm text-gray-400 hover:text-white">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-sm text-gray-400 hover:text-white">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
