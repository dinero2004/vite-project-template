import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

type Props = {
  name: string
  date: string
  text: string
  rating?: number
  image?: string
}

const TestimonialCard = ({ name, date, text, rating = 5, image }: Props) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition">

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">

        <Avatar className="h-12 w-12">
          {image && <AvatarImage src={image} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>

      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4 text-yellow-500">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-muted-foreground leading-relaxed">
        {text}
      </p>

    </div>
  )
}

export default TestimonialCard