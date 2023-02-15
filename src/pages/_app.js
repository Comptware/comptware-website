import "styles/globals.css";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";

register();
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
