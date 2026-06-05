class Priority {
  title
  description
  slug
  bullets = []

  constructor({title, description, slug, bullets = []}) {
    this.title = title
    this.description = description
    this.slug = slug
    this.bullets = bullets
  }

  get anchor() {
    return `priority__${this.slug}`;
  }
}

export default function () {
  return [

    new Priority({
      title: "Economic Opportunity",
      slug: "opportunities",
      description: "Let’s Build Something Here",
      bullets: [
        "Bring new investment and good jobs to Coon Rapids.",
        "Keep our city competitive so residents and businesses choose to stay and grow here.",
        "Make Coon Rapids a place where small businesses and entrepreneurs can actually thrive.",
        "Establish a social and entertainment district on Main Street that gives people a reason to gather downtown.",
        "Create a Downtown Commercial Zoning District that supports vibrant, mixed-use development.",
        "Keep dollars circulating locally by actively supporting our small businesses.",
        "Expand space for farmers markets and community commerce that bring neighbors together.",
      ],
    }),

    new Priority({
      title: "Education",
      slug: "education",
      description: "Every Child Deserves a Strong Start",
      bullets: [
        "Connect families to wraparound support from prenatal care through kindergarten, because learning starts long before the first day of school.",
        "Strengthen family services and parent development so caregivers have what they need to show up for their kids.",
        "Expand early literacy programs in partnership with the Anoka County Library System.",
        "Protect every student's right to read, learn, and think freely.",
      ],
    }),

    new Priority({
      title: "Safe Communities",
      slug: "safety",
      description: "Safety That Works for Every Neighbor",
      bullets: [
        "Support our law enforcement and first responders.",
        "Invest in before- and after-school programs that give young people somewhere to go and something to work toward.",
        "Create hands-on job shadowing opportunities so youth can explore careers right here in Coon Rapids.",
        "Partner with Anoka-Ramsey Community College on job placement and youth programs that open real doors.",
      ],
    }),

    new Priority({
      title: "Health and Human Services",
      slug: "health",
      description: "Nobody Gets Left Behind",
      bullets: [
        "Protect the programs our neighbors count on every day.",
        "Make sure our elders and residents with disabilities living in group homes are safe, well cared for, and treated with dignity.",
        "Give service providers the resources they actually need to do their jobs well.",
        "Help families navigate transitions in care so no one has to figure it out alone.",
        "Build a real, ongoing relationship between care providers and the City.",
        "Create more opportunities for our seniors to gather, connect, and feel celebrated in this community.",
      ],
    }),

    new Priority({
      title: "Housing Affordability",
      slug: "housing",
      description: "Your Home, Your City",
      bullets: [
        "Work to lower the property tax burden on Coon Rapids families.",
        "Stand up for working families who rent with protections that keep them stable and in their homes.",
        "Push for new housing options that work for people at every income level.",
        "Pursue zoning that is fair, forward-thinking, and reflects who we actually are.",
      ],
    }),

    new Priority({
      title: "Arts and Cultural Legacy",
      slug: "arts",
      description: "This Is Who We Are",
      bullets: [
        "Invest in the cultural celebrations that make Coon Rapids feel like home for everyone.",
        "Grow the Coon Rapids Arts Commission and give it the support it needs to do more.",
        "Build a real arts and music scene here, one our community is proud of.",
      ]
    }),

  ];
}
