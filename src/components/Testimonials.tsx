import TestimonialCard from "@/components/ui/testimonial-card"

const testimonials = [
  {
    name: "Mira",
    date: "17 December 2025",
    text: "Excellent legal support and highly professional service. The team handled our case with great attention and expertise."
  },
  {
    name: "Mirko",
    date: "8 October 2025",
    text: "Very reliable and competent lawyers. They helped us resolve a complex contract dispute quickly and efficiently."
  },
  {
    name: "Gabriel",
    date: "1 October 2025",
    text: "Professional, responsive and trustworthy. I highly recommend their legal services."
  },
  {
    name: "Thiago",
    date: "5 September 2025",
    text: "Outstanding cooperation and deep legal knowledge. Our company received excellent guidance."
  },
  {
    name: "Familie",
    date: "19 July 2025",
    text: "Very supportive and attentive lawyers. They took time to understand our situation and helped us reach the best solution."
  }
]

const Testimonials = () => {
  return (
    <section className="py-32 bg-muted">

      <div className="container mx-auto px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-light text-architectural mb-16">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Testimonials