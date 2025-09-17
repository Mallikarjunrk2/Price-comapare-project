import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the prices shown?",
    answer: "Our prices are updated in real-time from official retailer APIs and verified multiple times per day. We guarantee 99.9% accuracy, and if you find a discrepancy, we'll update it immediately."
  },
  {
    question: "Do you earn commission when I make a purchase?",
    answer: "Yes, we may earn a small commission from some retailers when you make a purchase through our links. This doesn't affect the price you pay and helps us keep the service free for everyone."
  },
  {
    question: "How do price alerts work?",
    answer: "Set your target price and we'll monitor it 24/7. You'll get an instant email notification when any store drops to your desired price or below. You can set multiple alerts for different price points."
  },
  {
    question: "Which stores do you compare prices from?",
    answer: "We compare prices from 50+ major retailers including Amazon, Flipkart, Croma, Reliance Digital, Vijay Sales, and many more. Our network covers 95% of online electronics retailers in India."
  },
  {
    question: "Is it safe to click on the store links?",
    answer: "Absolutely! All our links redirect to official retailer websites. We never store your payment information and all purchases are made directly with the retailer's secure checkout system."
  },
  {
    question: "Can I compare prices for any product?",
    answer: "Currently, we specialize in electronics, appliances, and gadgets. We're expanding to include more categories like fashion, books, and home goods based on user demand."
  }
];

export default function FAQ() {
  return (
    <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C2A]/5 via-transparent to-purple-500/5"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-[#FF8C2A] to-white bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="text-white/90">Questions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our price comparison service
          </p>
        </div>

        <div className="space-y-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] px-8 py-4 data-[state=open]:bg-white/[0.15] hover:bg-white/[0.12] transition-all duration-500 shadow-2xl"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-white font-display font-bold text-xl hover:no-underline py-6 hover:text-[#FF8C2A] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}