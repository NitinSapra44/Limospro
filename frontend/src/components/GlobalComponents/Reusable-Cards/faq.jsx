import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FaqCard({ FaqData }) {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-6 bg-transparent">
      {FaqData.map((data, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx + 1}`}
          className="rounded-lg border bg-[#F5F5F5] px-4 "
        >
          <AccordionTrigger
            className="text-lg hover:cursor-pointer"
            style={{ fontFamily: 'var(--font-varela)' }}
          >
            {data.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm" style={{ fontFamily: 'var(--font-varela)' }}>
            {data.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
