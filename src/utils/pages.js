const pages = [
  {
    url: "/",
    title: "Bani | Collect and reconcile payments easily",
    description:
      "Easily and seamlessly collect cardless payments from customers. Whether that is mobile money payments across Sub-Saharan Africa or crypto payments globally we got you covered.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/usecase/fintechs-and-neobanks",
    title: "BANI FOR FINTECHS/NEOBANKS",
    description:
      "Inspire customer adoption rates.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/usecase/e-commerce",
    title: "BANI FOR E-COMMERCE PLATFORMS",
    description:
      "Helping you make customers shop with ease",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/usecase/digital-creators",
    title: "BANI FOR DIGITAL CREATORS",
    description:
      "Speedy collection of payments from clients ",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },

  {
    url: "/usecase/retail-stores",
    title: "BANI FOR RETAIL STORES",
    description:
      "We optimise transactions for you and your customers",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },

  {
    url: "/usecase/fast-food-and-restaurants",
    title: "BANI FOR FAST FOOD AND RESTAURANTS",
    description:
      "The best payment experience for your customers",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },

  {
    url: "/usecase/travel-agencies-and-airlines",
    title: "BANI FOR TRAVEL AGENCIES AND AIRLINES",
    description:
      "We assist you in letting your customers get somewhere, anywhere, fast.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },

  {
    url: "/usecase/crypto-and-digital-asset-platforms",
    title: "BANI FOR CRYPTO AND DIGITAL ASSETS PLATFORMS",
    description:
      "Providing you with seamless crypto transactions for customers' satisfaction",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },


  {
    url: "/developers",
    title: "Bani | Engineers are welcome!",
    description:
      "Welcome, Engineer! Get started integrating Bani's collections and payout services on your platform. Install the free plugins or start building something yourself with our API resource.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/pricing",
    title: "Bani | Affordable pricing",
    description:
      "With the lowest transaction rates on the market, Bani puts the focus back on conversion, not charges.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/company",
    title: "Bani | Our Company",
    description:
      "Building a global payment infrastructure alternative",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },

  {
    url: "/company/all-openings",
    title: "Bani | All Openings",
    description:
      "Job openings at Bani",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },

  {
    url: "/payments/virtual-accounts",
    title: "Bani | Virtual Accounts",
    description: "Experience greater payment efficiency, control, and flexibility with our virtual accounts.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/payments/ewallets",
    title: "Bani | E-Wallets",
    description: "Experience the convenience of managing your money on the go with our e-wallets.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/payments/mobile-money",
    title: "Bani | Mobile Money",
    description: "Experience payment convenience and accessibility across Africa with our mobile money service.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
  {
    url: "/payments/crypto",
    title: "Bani | Crypto Payments",
    description: "Enjoy fast and secure local and cross-border transactions with our crypto payment service.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani-meta.png",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
