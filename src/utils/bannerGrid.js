// Vector PNG images for service cards (served from /public)
const app_dev_vector = "/app_dev_vector.png";
const product_design_vector = "/product_design_vector.png";
const cloud_vector = "/cloud_vector.png";
const cyber_sec_vector = "/cyber_sec_vector.png";

// Other images
import diversity from "../assets/icons/diversity.svg";
import flexibility from "../assets/icons/flexibility.svg";
import motivation from "../assets/icons/motivation.svg";
import target from "../assets/icons/target.svg";

export const the_grid = [
  {
    bg_color: "bg-[#4A90E2]",
    Image: app_dev_vector,
    title: "Full-Stack Development",
    text: "Build scalable web, mobile, and cloud systems with unified full-stack and cloud expertise for reliable performance.",
    color: "bg-[#ffffff]",
    text_color: "text-[#4A90E2]",
    body_color: "text-[#ffffff]",
    header_color: "text-[#E8F4FF]",
    backgrounds: "gridBg",
  },
  {
    bg_color: "bg-[#F1E5FF]",
    Image: product_design_vector,
    title: "Product Design",
    text: "Design intuitive, user-centered digital products that solve real problems and deliver seamless, engaging experiences.",
    color: "bg-[#7400FF]",
    text_color: "text-[#ffffff]",
    body_color: "text-[#A6A4A8]",
    header_color: "text-[#71588D]",
    backgrounds: "gridBg",
    patternBg: "/design_pattern_bg.png",
  },
  {
    bg_color: "bg-[#032343]",
    Image: app_dev_vector,
    title: "AI & Intelligent Automation",
    text: "Build intelligent products with AI-driven automation, generative solutions, and predictive insights designed to enhance operations and accelerate innovation.",
    color: "bg-[#ffffff]",
    text_color: "text-[#032343]",
    body_color: "text-[#ffffff]",
    header_color: "text-[#F5F5F5]",
  },
  {
    bg_color: "bg-[#E5F7FF]",
    Image: cloud_vector,
    title: "Engineering Talent Partner",
    text: "We match startups and enterprises with vetted software engineers to build teams aligned to your roadmap and delivery pace.",
    color: "bg-[#00B3FF]",
    text_color: "text-[#ffffff]",
    body_color: "text-[#A6A4A8]",
    header_color: "text-[#587D8D]",
    backgrounds: "gridBg3",
    patternBg: "/cloud_expert_pattern_bg.png",
  },
  {
    bg_color:
      "bg-[linear-gradient(180.01deg,#E9542A_-13.99%,#AB332B_156.28%,#481E21_215.76%)]",
    Image: cyber_sec_vector,
    title: "Cyber Security Services",
    text: "Secure your systems with end-to-end cybersecurity services, including testing, compliance, audits, and continuous threat monitoring.",
    color: "bg-[#E74C3C]",
    text_color: "text-[#ffffff]",
    body_color: "text-[#ffffff]",
    header_color: "text-[#ECF0F1]",
    backgrounds: "Frame",
    patternBg: "/cyber_sec_pattern_bg.png",
  },
];

export const product = [
  {
    Image: diversity,
    title: "Faster Time to Market",
    body: "Launch faster with a unified design and engineering team across platforms.",
    header_color: "text-[#161717]",
    body_color: "text-[#2D2F2F]",
    bg_color: "bg-[#F7F7F7]",
  },
  {
    Image: target,
    title: "Enterprise-Grade Architecture",
    body: "Scalable systems and patterns that stay reliable as your product grows.",
    header_color: "text-[#ffffff]",
    body_color: "text-[#F5F5F5]",
    bg_color: "bg-[#032343]",
  },
  {
    Image: motivation,
    title: "Cross-Platform Harmony",
    body: "One stack, one team, consistent experiences with lower maintenance.",
    header_color: "text-[#ffffff]",
    body_color: "text-[#F5F5F5]",
    bg_color: "bg-[#032343]",
  },
  {
    Image: flexibility,
    title: "Complete Product Lifecycle",
    body: "End-to-end support from concept to launch and ongoing optimization.",
    header_color: "text-[#161717]",
    body_color: "text-[#2D2F2F]",
    bg_color: "bg-[#F7F7F7]",
  },
];
