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
      title: "Education",
      slug: "education",
      description: "Investment in schools.",
      bullets: [
        "Wrap around service for prenatal, early education, through pre-k until Kindergarten transition.",
        "Family services, parent development.",
        "Early literacy services with Anoka county library system.",
        "Students’ rights for intellectual freedom.",
      ],
    }),

    new Priority({
      title: "Safe Communities",
      slug: "safety",
      description: "Dek for safe communities.",
      bullets: [
        "Support law enforcement and public safety initiatives.",
        "Invest in after-school and before-school programs for youth.",
        "More city-led job shadowing, learn on the go.",
        "City partner with Anoka-Ramsey Community College for job placement; youth programming.",
      ],
    }),

    new Priority({
      title: "Health and Human Services",
      slug: "health",
      description: "Taking care of our vulnerable communities",
      bullets: [
        "Strengthen the integrity of programs and services our neighbors rely on.",
        "Ensure our elders and people with intellectual and physical disabilities living in group homes are having their needs met.",
        [
          "Programs have the tools and funding they need to serve their clients.",
          "Families have transitional care support or guidance.",
          "Closer partnership and relationship with city.",
          "More senior/elder events/gatherings.",
        ],
      ],
    }),

    new Priority({
      title: "Housing Affordability",
      slug: "housing",
      description: "Fiscally responsible policy that puts residents central to decision-making.",
      bullets: [
        "Lower property taxes.",
        "Support renter protections.",
        "New housing investments.",
        "Equitable zoning.",
      ],
    }),

    new Priority({
      title: "Economic Opportunities",
      slug: "opportunities",
      description: "Dek for economic opportunities",
      bullets: [
        "Economic development.",
        "Make sure we remain ‘competitive’ with Anoka and Blaine.",
        "Business friendly environment for small businesses and entrepreneurs.",
        "Establish a social/entertainment district on Main Street.",
        "Downtown Commercial (C-D) Zoning District Establishment.",
        "Grow local economy.",
        "Support small local business.",
        [
          "Provide more spaces for farmers markets.",
        ],
      ],
    }),

    new Priority({
      title: "Art and Cultural Legacy",
      slug: "arts",
      description: "Dek for art",
      bullets: [
        "Invest in cultural celebrations that bring our diverse communities together.",
        "Enhance Coon Rapids Arts Commission programming.",
        "Cultivate a New Era of Arts, Music, and Vitality in Coon Rapids.",
      ]
    }),

  ];
}
