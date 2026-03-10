export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ferrari-488-pista",
    title: "Ferrari 488 Pista: Track Engineering at Its Finest",
    excerpt: "A closer look at one of Ferrari’s most celebrated track-focused supercars and the engineering behind its performance.",
    content: `
# Ferrari 488 Pista

The Ferrari 488 Pista represents the pinnacle of Ferrari's V8 engineering. Designed with direct influence from Ferrari’s motorsport programs, the Pista delivers extreme performance while maintaining the elegance and craftsmanship expected from the brand.

## Performance and Engineering

At the heart of the 488 Pista is a 3.9-liter twin-turbocharged V8 producing **710 horsepower**. This engine allows the car to accelerate from **0–100 km/h in under 2.9 seconds**, making it one of the fastest road-legal Ferraris ever built.

### Key Highlights
- Lightweight carbon fiber construction
- Advanced aerodynamic solutions
- Track-focused chassis tuning
- Ferrari Side Slip Control system

## Design Philosophy

Ferrari designed the 488 Pista with one clear goal: maximum performance. Every element—from the aggressive front air intakes to the rear diffuser—was developed to increase downforce and improve stability at high speeds.

## Driving Experience

The result is a supercar that delivers both raw performance and remarkable driver feedback. Whether on the road or the track, the 488 Pista provides an unforgettable driving experience.

`,
    author: "Lazar Minkov",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "FERRARI",
    image: "/src/assets/manufacturers/Ferrari/models/488 Pista/2019-ferrari-488-pista-103-1528476282.jpg"
  },

  {
    id: "lamborghini-aventador-svj",
    title: "Lamborghini Aventador SVJ: The Ultimate V12 Supercar",
    excerpt: "Exploring the engineering and performance of Lamborghini’s most extreme naturally aspirated supercar.",
    content: `
# Lamborghini Aventador SVJ

The Lamborghini Aventador SVJ stands as one of the most dramatic and powerful supercars ever produced by Lamborghini. Built around a naturally aspirated V12 engine, the SVJ represents the brand’s dedication to raw performance and bold design.

## Performance

The SVJ produces **759 horsepower** from its 6.5-liter V12 engine, allowing it to reach **100 km/h in just 2.8 seconds**.

### Key Features
- Active Aerodynamics (ALA system)
- Carbon fiber monocoque chassis
- Advanced all-wheel drive system
- Track-focused suspension

## Design

The design of the Aventador SVJ is unmistakably Lamborghini. Sharp lines, aggressive vents, and aerodynamic components create a vehicle that looks as fast as it drives.

## Driving Character

With its naturally aspirated V12 and race-inspired engineering, the Aventador SVJ delivers one of the most visceral driving experiences available in the supercar world.

`,
    author: "Lazar Minkov",
    date: "2024-03-10",
    readTime: "5 min read",
    category: "LAMBORGHINI",
    image: "/src/assets/manufacturers/Lamborghini/models/Aventador SVJ/2020-lamborghini-aventador-svj-roadster-drive-111-1576871370.jpg"
  },

  {
    id: "mclaren-720s",
    title: "McLaren 720S: Precision and Lightweight Engineering",
    excerpt: "How McLaren combines lightweight design and advanced aerodynamics to create one of the most capable supercars.",
    content: `
# McLaren 720S

The McLaren 720S is a supercar built around a philosophy of lightweight performance and precision engineering. Using a carbon fiber monocoque structure, McLaren created a machine that offers exceptional speed and control.

## Engine and Performance

The 720S is powered by a **4.0-liter twin-turbo V8** producing **710 horsepower**. Combined with its lightweight chassis, the car delivers remarkable acceleration and handling.

### Key Characteristics
- Carbon fiber Monocage II structure
- Advanced aerodynamic airflow management
- Adaptive suspension system
- Lightweight performance design

## Design Approach

McLaren’s design philosophy focuses heavily on function. Every air intake, panel, and surface is designed to improve aerodynamic performance and cooling efficiency.

## Driving Experience

The 720S offers a unique balance of comfort and performance, making it equally impressive on the road and on the track.

`,
    author: "Lazar Minkov",
    date: "2024-03-05",
    readTime: "5 min read",
    category: "MCLAREN",
    image: "/src/assets/manufacturers/McLaren/models/720S/2019-mclaren-720s-spider-122-hdr-1565493353.jpg"
  }
];