const pages = [
  {
    url: "/",
    title: "Bani | Seamless cardless payments at a low cost",
    description:
      "Easily and seamlessly collect cardless payments from customers. Whether that is mobile money payments across Sub-Saharan Africa or crypto payments globally we got you covered.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/usecase/fintech",
    title: "Bani | Usecase for Fintechs & Neobanks",
    description:
      "Fintechs & Neobanks can leverage Bani's customisable payment tools and robust collections and payout infrastructure to build the next generation of fintech products.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/usecase/e-commerce",
    title: "Bani | Tools designed to grow sales for e-commerce businesses",
    description:
      "Bani improves the checkout experience and helps merchants collect payments from their customers.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/usecase/digital-creators",
    title: "Bani | Fastest way for digital creators to get paid",
    description:
      "As creators, we know how difficult it can sometimes be to get paid from multiple regions. With Bani, getting paid just got easier.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/developers",
    title: "Bani | Engineers are welcome!",
    description:
      "Get started integrating Bani's collections and payout services on your platform. Install the free plugins or start building something yourself with our API resource.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/pricing",
    title: "Bani | Affordable pricing",
    description:
      "With the lowest transaction rates on the market, Bani puts the focus back on conversion, not charges.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/company",
    title: "Bani | Our Company",
    description:
      "Easily and seamlessly collect cardless payments from customers. Whether that is mobile money payments across Sub-Saharan Africa or crypto payments globally we got you covered.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/products/checkout",
    title: "Bani | Our Products",
    description: "Let Bani power your eCommerce business growth.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/products/invoicing",
    title: "Bani | Our Products",
    description: "Let Bani power your eCommerce business growth.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
  {
    url: "/products/sales-analytics",
    title: "Bani | Our Products",
    description: "Let Bani power your eCommerce business growth.",
    thumbnail:
      "https://bani-assets.s3.eu-west-2.amazonaws.com/static/image/meta/bani_twitter_card.jpg",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
