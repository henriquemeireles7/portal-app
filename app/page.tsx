"use client";

import { useState } from "react";
import { Menu, X, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/auth/login" className="-m-1.5 p-1.5">
              <span className="sr-only">Escola IA & Programação</span>
              <Image
                className="h-8 w-auto"
                src="/placeholder.svg"
                alt="Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="#recursos"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Recursos
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Depoimentos
            </Link>
            <Link
              href="#precos"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Preços
            </Link>
            <Link
              href="#faq"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              FAQ
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/auth/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Entrar <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <div className={`lg:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/auth/login" className="-m-1.5 p-1.5">
                <span className="sr-only">Escola IA & Programação</span>
                <Image
                  className="h-8 w-auto"
                  src="/placeholder.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="#recursos"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Recursos
                  </Link>
                  <Link
                    href="#depoimentos"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Depoimentos
                  </Link>
                  <Link
                    href="#precos"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Preços
                  </Link>
                  <Link
                    href="#faq"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    FAQ
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/auth/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Entrar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Domine IA e Programação Online
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transforme sua carreira com nossos cursos de ponta em
                Inteligência Artificial e Programação. Aprenda com especialistas
                e esteja pronto para o futuro do mercado de trabalho.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/auth/login"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Comece agora
                </Link>
                <Link
                  href="/auth/login"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Saiba mais <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div id="recursos" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Aprenda mais rápido
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tudo que você precisa para dominar IA e Programação
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nossos cursos são projetados para fornecer uma experiência de
                aprendizado completa e prática, preparando você para os desafios
                do mundo real.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {[
                  {
                    name: "Cursos atualizados",
                    description:
                      "Conteúdo sempre atualizado com as últimas tendências e tecnologias em IA e programação.",
                  },
                  {
                    name: "Projetos práticos",
                    description:
                      "Aplique seus conhecimentos em projetos do mundo real para construir um portfólio impressionante.",
                  },
                  {
                    name: "Suporte personalizado",
                    description:
                      "Acesso a mentores experientes para ajudar em sua jornada de aprendizado.",
                  },
                  {
                    name: "Comunidade ativa",
                    description:
                      "Conecte-se com outros alunos, compartilhe conhecimentos e cresça juntos.",
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <Check
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div id="depoimentos" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
                Depoimentos
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                O que nossos alunos dizem
              </p>
            </div>
            <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Maria Silva",
                    role: "Desenvolvedora Full Stack",
                    text: "Os cursos da Escola IA & Programação transformaram minha carreira. Agora trabalho em projetos incríveis usando as habilidades que aprendi aqui.",
                  },
                  {
                    name: "João Santos",
                    role: "Cientista de Dados",
                    text: "A qualidade do conteúdo e o suporte da comunidade são excepcionais. Recomendo a todos que querem se destacar na área de IA.",
                  },
                  {
                    name: "Ana Oliveira",
                    role: "Engenheira de Machine Learning",
                    text: "Graças aos projetos práticos, consegui construir um portfólio sólido que me ajudou a conseguir meu emprego dos sonhos.",
                  },
                ].map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="rounded-2xl bg-gray-50 p-8"
                  >
                    <blockquote className="text-gray-700">
                      <p>`${testimonial.text}`</p>
                    </blockquote>
                    <div className="mt-6 flex items-center">
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div id="precos" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Planos simples e acessíveis
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Escolha o plano que melhor se adapta às suas necessidades e
                comece sua jornada de aprendizado hoje mesmo.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Assinatura vitalícia
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Acesso ilimitado a todos os nossos cursos de IA e Programação,
                  incluindo atualizações futuras e suporte da comunidade.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                    O que está incluído
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {[
                    "Acesso vitalício a todos os cursos",
                    "Projetos práticos e estudos de caso",
                    "Certificados de conclusão",
                    "Acesso à comunidade de alunos",
                    "Suporte prioritário",
                    "Atualizações de conteúdo gratuitas",
                  ].map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Pague uma vez, use para sempre
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        R$1997
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        BRL
                      </span>
                    </p>
                    <Link
                      href="/auth/login"
                      className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Comece agora
                    </Link>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Faturas e recibos disponíveis para fácil reembolso da
                      empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div id="faq" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Perguntas Frequentes
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
              Tem alguma dúvida? Aqui estão algumas das perguntas mais comuns
              que recebemos.
            </p>
            <div className="mt-20">
              <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
                {[
                  {
                    question: "Preciso ter experiência prévia em programação?",
                    answer:
                      "Não, nossos cursos são projetados para atender desde iniciantes até profissionais experientes. Temos trilhas de aprendizado para todos os níveis.",
                  },
                  {
                    question: "Quanto tempo leva para completar um curso?",
                    answer:
                      "O tempo de conclusão varia dependendo do curso e do seu ritmo de aprendizado. Em média, nossos cursos podem ser concluídos em 8-12 semanas com dedicação parcial.",
                  },
                  {
                    question:
                      "Os certificados são reconhecidos pela indústria?",
                    answer:
                      "Sim, nossos certificados são reconhecidos e valorizados por empresas de tecnologia em todo o Brasil e internacionalmente.",
                  },
                  {
                    question: "Posso acessar o conteúdo offline?",
                    answer:
                      "Sim, a maioria do nosso conteúdo pode ser baixado para acesso offline através do nosso aplicativo móvel.",
                  },
                  {
                    question:
                      "Vocês oferecem suporte para colocação profissional?",
                    answer:
                      "Sim, oferecemos orientação de carreira e temos parcerias com empresas de tecnologia para oportunidades de estágio e emprego para nossos alunos.",
                  },
                  {
                    question:
                      "Posso cancelar minha assinatura a qualquer momento?",
                    answer:
                      "Nossa oferta atual é uma assinatura vitalícia, então não há necessidade de cancelamento. Você terá acesso ao conteúdo para sempre após a compra.",
                  },
                ].map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {[
              { name: "Facebook", href: "#" },
              { name: "Instagram", href: "#" },
              { name: "Twitter", href: "#" },
              { name: "GitHub", href: "#" },
              { name: "YouTube", href: "#" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2023 Escola IA & Programação. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
