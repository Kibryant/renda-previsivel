"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "Quanto tempo leva para eu começar a ter resultados?",
      answer:
        "Os resultados variam de acordo com o seu comprometimento e nicho, mas temos alunos que começaram a faturar já nas primeiras semanas aplicando o método. O importante é seguir o passo a passo e implementar as estratégias ensinadas.",
    },
    {
      question: "Preciso ter experiência com marketing digital?",
      answer:
        "Não! O método foi desenvolvido para iniciantes e pessoas sem experiência técnica. Ensinamos tudo do zero, desde a criação do produto até as estratégias de vendas e automação.",
    },
    {
      question: "Funciona para qualquer nicho?",
      answer:
        "Sim! O Método Renda Previsível é baseado em princípios de marketing e vendas que funcionam em qualquer nicho. Temos alunos de diversas áreas como saúde, finanças, educação, desenvolvimento pessoal, entre outros.",
    },
    {
      question: "Quanto tempo de acesso eu tenho ao conteúdo?",
      answer:
        "Você terá acesso vitalício ao conteúdo do método, incluindo todas as atualizações futuras. Além disso, oferecemos 30 dias de suporte direto com nossa equipe para tirar todas as suas dúvidas.",
    },
    {
      question: "E se eu não gostar do método?",
      answer:
        "Oferecemos garantia de 7 dias. Se você não ficar satisfeito com o conteúdo, basta solicitar o reembolso dentro desse período e devolveremos 100% do seu investimento, sem perguntas.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={`${faq.answer}`} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
