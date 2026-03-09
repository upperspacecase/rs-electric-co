const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "R & S Electric Co",
  tagline: "Licensed Electrician Serving Huntsville Since 2010",
  phone: "(256) 837-8210",
  phoneHref: "tel:+12568378210",
  smsHref: "sms:+12568378210",
  email: "info@rs-electric-co.com",
  address: "2830 Jordan Ln NW, Huntsville, AL 35816",
  licenseNumber: "Fully Licensed",
  yearEstablished: 2010,
  hoursOfOperation: "Mon-Fri: 7am - 6pm | Sat: 8am - 2pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    credential: "Licensed Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Keep your Huntsville home safe and powered with complete wiring, rewiring, and electrical upgrades tailored to your family's needs.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Reliable electrical installations, fit-outs, and maintenance for Huntsville offices, retail spaces, and commercial properties.",
      icon: "Building2",
    },
    {
      title: "Emergency 24/7 Service",
      description:
        "Power outages, sparking outlets, or tripped breakers — we respond fast across Huntsville, day or night, to keep you safe.",
      icon: "Siren",
    },
    {
      title: "Switchboard & Panel Upgrades",
      description:
        "Replace outdated panels with modern, code-compliant breaker boxes to handle your Huntsville home's growing electrical demands.",
      icon: "PlugZap",
    },
    {
      title: "Lighting Installation",
      description:
        "Transform your Huntsville property with LED upgrades, recessed lighting, outdoor lighting, and smart lighting systems.",
      icon: "Lightbulb",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified installation of home and commercial electric vehicle charging stations for Huntsville drivers going electric.",
      icon: "BatteryCharging",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "Since 2010, R & S Electric Co has been delivering dependable electrical services across Huntsville and North Alabama. Every job is completed by a licensed, insured electrician who treats your property with care. From residential repairs to commercial installations, we're the team Huntsville trusts for honest work and fair pricing.",
    image: "/images/team.jpg",
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    rating: 3.9,
    totalReviews: 7,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=ChIJaQdtrM5rYogRzwyK-nuS7yw",
    items: [
      {
        author: "Stacy P",
        rating: 5,
        date: "6 months ago",
        text: "Excellent electrical service, very professional and dependable. Highly recommend R & S Electric for any electrical work in Huntsville.",
        avatar: null,
      },
      {
        author: "Justin Campbell",
        rating: 5,
        date: "4 years ago",
        text: "Awesome Customer Service!",
        avatar: null,
      },
      {
        author: "Gina Wakefield",
        rating: 5,
        date: "5 years ago",
        text: "They have been great to deal with!",
        avatar: null,
      },
      {
        author: "James Dunning",
        rating: 5,
        date: "5 years ago",
        text: "Awesome owners",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103689.47812289498!2d-86.65917695!3d34.7303882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b67e9a5a1c1%3A0x40089e9867bfab0!2sHuntsville%2C%20AL!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Huntsville",
      "Madison",
      "Harvest",
      "Meridianville",
      "Hazel Green",
      "New Market",
      "Owens Cross Roads",
      "Hampton Cove",
      "Research Park",
      "Jones Valley",
      "Five Points",
      "Twickenham",
      "Monte Sano",
      "Big Cove",
      "Southeast Huntsville",
      "Northwest Huntsville",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency Call-Out",
      "Switchboard & Panel Upgrades",
      "Lighting Installation",
      "EV Charger Installation",
      "Other",
    ],
    // recipientEmail derived from siteConfig.email
  },
};

export default siteConfig;
