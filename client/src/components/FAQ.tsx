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
    <section className="py-16 bg-gradient-to-br from-muted/20 via-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our price comparison service
          </p>
        </div>

        <div className="bg-gradient-to-br from-card via-card to-muted/30 border border-card-border/50 rounded-lg p-2 shadow-lg">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-card to-muted/20 border border-card-border/50 rounded-lg px-6 py-2 data-[state=open]:bg-gradient-to-r data-[state=open]:from-primary/10 data-[state=open]:to-orange-500/10 hover:shadow-md transition-all duration-300"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-card-foreground font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
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