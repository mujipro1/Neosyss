const frameworksData = [
  {
      category: "Web",
      frameworks: [
          {
              title: "MERN",
              description:
                  "A popular full stack solution for responsive web applications with fast server response times.",
              features: ["MongoDB", "Express", "React", "Node.js"],
          },
          {
              title: "PERN",
              description:
                  "Integrating PostgreSQL for enhanced data handling in applications requiring structured databases.",
              features: ["PostgreSQL", "Express", "React", "Node.js"],
          },
          {
              title: "MEAN",
              description:
                  "Ideal for developing secure and scalable web applications with real-time data capabilities.",
              features: ["MongoDB", "Express", "Angular", "Node.js"],
          },
          {
              title: "MENN",
              description:
                  "Combining MongoDB with NestJS and Node.js for modular, maintainable backend solutions.",
              features: ["MongoDB", "Express", "Nest.js", "Node.js"],
          },
          {
              title: "Django Full Stack",
              description:
                  "Django paired with React or Next.js for high-performance web applications with powerful backend capabilities.",
              features: ["Django", "React", "Next.js", "PostgreSQL", "MySQL"],
          },
      ],
  },
  {
      category: "Blockchain",
      frameworks: [
          {
              title: "Ethereum & Solidity",
              description:
                  "Smart contract development on Ethereum, leveraging Solidity for secure and efficient contract coding.",
              features: ["Solidity", "Remix IDE", "Ganache", "MetaMask"],
          },
          {
              title: "Hyperledger",
              description:
                  "Enterprise-grade blockchain frameworks for private and permissioned blockchain solutions, ideal for industries like finance, healthcare, and supply chain.",
              features: ["Hyperledger Fabric", "Chaincode", "Certificate Authority", "Raft Consensus"]
          },
          {
              title: "Polygon",
              description:
                  "Building scalable blockchain solutions with Polygon’s layer-2 solution, reducing transaction costs and increasing speed for Ethereum-compatible applications.",
              features: ["Polygon SDK", "Matic", "Plasma Framework", "Meta Transactions"],
          },
          {
              title: "InterPlanetary File System",
              description:
                  "A decentralized file system to securely store, access, and share data across blockchain applications.",
              features: ["IPFS Nodes", "CID", "libp2p", "IPFS Gateway"],
          },
      ],
  },
  {
    category: "Mobile",
    frameworks: [
        {
            title: "Flutter (Dart)",
            description:
                "A powerful, cross-platform development framework for building visually appealing, high-performance apps from a single codebase.",
            features: ["Hot Reload", "Dart Programming Language", "Cross-Platform Support"],
        },
        {
            title: "React Native",
            description:
                "A widely-used framework for creating smooth, native-feeling cross-platform apps with a rich set of pre-built UI components.",
            features: ["JavaScript", "Expo Integration", "Native Modules"],
        },
        {
            title: "Kotlin",
            description:
                "A modern, powerful language for Android development, ensuring fast, efficient, and native applications tailored to Android users.",
            features: ["Jetpack Compose", "Null Safety", "Coroutines"],
        },
    ],
}
,
];

export default frameworksData;
