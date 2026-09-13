/**
 * English copy. This file also defines the shape every other language must
 * match — see `Dictionary` at the bottom.
 */
const en = {
  meta: {
    title: "PinLee — Software Engineer, Ho Chi Minh City",
    description:
      "Freelance software engineer building Spring Boot services, microservice back ends, and the React and Android apps that talk to them.",
    ogTitle: "PinLee — Software Engineer",
    ogDescription:
      "Spring Boot services, microservice back ends, and the React and Android apps that talk to them.",
  },

  nav: {
    work: "Work",
    stack: "Stack",
    path: "Path",
    contact: "Contact",
  },

  ui: {
    sections: "Sections",
    openIndex: "Index",
    closeIndex: "Close",
    openToWork: "Open to work",
    language: "Language",
  },

  hero: {
    role: "Software Engineer",
    cityShort: "Ho Chi Minh City",
    city: "Ho Chi Minh City, Vietnam",
    lede: "I build the services behind the screen — Spring Boot APIs, microservice back ends, and the React and Android apps that talk to them.",
    dossier: [
      { label: "Based", value: "Ho Chi Minh City, VN · UTC+7" },
      { label: "Freelance since", value: "2024" },
      { label: "School", value: "Software Engineering, HITU" },
      { label: "Works in", value: "Java · Spring Boot · React · Android" },
    ],
    statusLabel: "Status",
    status: "Taking freelance work",
    primaryAction: "See the work",
    secondaryAction: "Start a project",
    traceTitle: "Order checkout",
    traceNote: "How one checkout moves through the services.",
  },

  work: {
    label: "Work",
    title: "Four systems, carried from first sketch to production.",
    metaUnit: "selected",
    metaYears: "2025—2026",
    projects: [
      {
        title: "Nexus Social — social platform on microservices",
        year: "06 / 2026",
        kind: "Full-stack · mobile",
        team: "Graduation project · team of 4" as string | undefined,
        summary:
          "A social network built like a product rather than a demo: nine Spring Boot services behind one gateway, Kafka between them, and MySQL, MongoDB and Neo4j each holding what suits them. Web, admin console and an Expo app share one API contract. I worked across the stack, mostly on mobile — realtime chat, WebRTC voice and video calls, and livestream.",
        stack: [
          "Java 21",
          "Spring Boot",
          "Kafka",
          "MongoDB",
          "Neo4j",
          "React Native",
          "WebRTC",
          "Docker",
        ],
        href: undefined as string | undefined,
      },
      {
        title: "Commerce platform with an ordering chatbot",
        year: "12 / 2025",
        kind: "Full-stack",
        team: undefined,
        summary:
          "A storefront, an admin back office and one Spring Boot REST API behind both. Products carry variants and stock, orders walk a state machine from cart to paid to shipped, and the back office watches revenue, inventory and every order in one place. The chatbot works against that same API — it reads the catalogue, answers questions, builds the cart, takes payment and files the order, so the buyer never leaves the conversation.",
        stack: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "JPA / Hibernate",
          "React",
          "MySQL",
          "REST",
        ],
        href: undefined as string | undefined,
      },
      {
        title: "Booking app for Android",
        year: "08 / 2025",
        kind: "Mobile",
        team: undefined,
        summary:
          "Native Android in Java on a Firebase back end. Availability updates live and a slot is claimed inside a transaction, so two people cannot take the same time — the app says the slot is gone before anyone pays. Push notifications confirm each booking, payment happens in the app, and every booking and receipt stays on the history screen.",
        stack: [
          "Android",
          "Java",
          "Firebase Auth",
          "Firestore",
          "Cloud Messaging",
          "In-app payment",
        ],
        href: undefined as string | undefined,
      },
      {
        title: "Motorcycle dealership manager",
        year: "03 / 2025",
        kind: "Desktop",
        team: undefined,
        summary:
          "Counter software for a shop floor: a .NET desktop client over SQL Server. Staff sign in with face recognition instead of a password, stock arrives as spreadsheet imports of a few thousand rows that are checked line by line before they land, and invoices print at the till. Sales, stock and customers sit in one database, so the owner can read a day's takings without exporting anything.",
        stack: [
          "C#",
          ".NET",
          "SQL Server",
          "Face recognition",
          "Excel import",
          "Invoice printing",
        ],
        href: undefined as string | undefined,
      },
    ],
  },

  stack: {
    label: "Stack",
    title: "What I build with, grouped by where it sits.",
    metaUnit: "tools",
    groups: [
      {
        name: "Front end",
        note: "What people touch",
        items: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "NativeWind",
          "Bootstrap",
        ],
      },
      {
        name: "Back end",
        note: "Where the work happens",
        items: [
          "Java",
          "Spring Boot",
          "Spring Cloud",
          "C#",
          ".NET",
          "Laravel",
          "REST APIs",
        ],
      },
      {
        name: "Mobile",
        note: "Shipped to store",
        items: ["Android", "React Native", "Expo", "Firebase"],
      },
      {
        name: "Realtime",
        note: "Messages that cannot wait",
        items: ["Kafka", "Socket.IO", "WebRTC", "Server-Sent Events"],
      },
      {
        name: "Data",
        note: "Each store for what suits it",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Neo4j", "Redis"],
      },
      {
        name: "Delivery",
        note: "Getting it running and keeping it there",
        items: ["Docker", "Kubernetes", "Nginx", "AWS EC2", "GitHub Actions", "Git"],
      },
    ],
  },

  path: {
    label: "Path",
    title: "Freelance since 2024, in the order it happened.",
    meta: "2024 — now",
    roles: [
      {
        period: "2026 — now",
        title: "Microservices engineer",
        org: "Remote contracts",
        summary:
          "Splitting monoliths into Spring Cloud services, containerising them with Docker, and running them on Kubernetes. React Native on the client side.",
      },
      {
        period: "2025 — now",
        title: "Full-stack web developer",
        org: "Self-employed",
        summary:
          "Small teams and solo contracts: React front ends on Spring Boot and Node services, carried from design through to deployment.",
      },
      {
        period: "2024 — now",
        title: "Android developer",
        org: "Freelance",
        summary:
          "Native apps in Java against REST and Firebase back ends, from first screen to a listing on Google Play.",
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "Have something that needs building?",
    meta: "Replies within a day",
    intro:
      "Tell me what the system has to do and who it is for. I will come back with an approach, a timeline and a price.",
    rows: {
      email: "Email",
      phone: "Phone",
      github: "GitHub",
      based: "Based",
    },
    form: {
      name: "Your name",
      namePlaceholder: "Nguyen Van A",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "What are you building?",
      messagePlaceholder: "A booking system for a clinic, launching in March…",
      send: "Send message",
      sendMail: "Open in mail app",
      sending: "Sending…",
      sent: "Sent. I will reply to that address.",
      failed: "That did not send. Email me directly at",
      mailSubject: "Project enquiry from",
    },
  },

  footer: {
    built: "Built with Next.js · Ho Chi Minh City",
    top: "Back to top ↑",
  },
};

export type Dictionary = typeof en;

export default en;
