import Bitcoin from "assets/images/Crypto/bitcoin.png";
import BitcoinCash from "assets/images/Crypto/btc-cash.png";
import Busd from "assets/images/Crypto/busd.png";
import DodgeCoin from "assets/images/Crypto/dodge.png";
import Ethereum from "assets/images/Crypto/ethereum.png";
import Litecoin from "assets/images/Crypto/litecoin.png";
import Ripple from "assets/images/Crypto/ripple.png";
import Tron from "assets/images/Crypto/tron.png";
import Usdc from "assets/images/Crypto/usdc.png";
import Usdt from "assets/images/Crypto/usdt.png";

import Image from "next/image";

const crypto = [
  {
    title: "Bitcoin",
    label: "1% Flat fee",
    icon: (
      <Image
        src={Bitcoin}
        className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]"
      />
    ),
  },
  {
    title: "Litecoin",
    label: "1% Flat fee",
    icon: (
      <Image
        src={Litecoin}
        className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]"
      />
    ),
  },
  {
    title: "Bitcoin Cash",
    label: "1% Flat fee",
    icon: (
      <Image
        src={BitcoinCash}
        className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]"
      />
    ),
  },
  {
    title: "USDC",
    label: "1% Flat fee",
    icon: (
      <Image src={Usdc} className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]" />
    ),
  },
  {
    title: "USDT",
    label: "1% Flat fee",
    icon: (
      <Image src={Usdt} className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]" />
    ),
  },
  {
    title: "Ripple",
    label: "1% Flat fee",
    icon: (
      <Image
        src={Ripple}
        className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]"
      />
    ),
  },
  {
    title: "Dodge Coin",
    label: "1% Flat fee",
    icon: (
      <Image
        src={DodgeCoin}
        className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]"
      />
    ),
  },
  {
    title: "Ethereum",
    label: "1% Flat fee",
    icon: (
      <Image
        src={Ethereum}
        className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]"
      />
    ),
  },
  {
    title: "Tron",
    label: "1% Flat fee",
    icon: (
      <Image src={Tron} className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]" />
    ),
  },
  {
    title: "Binance USD",
    label: "1% Flat fee",
    icon: (
      <Image src={Busd} className="w-[28px] md:w-[36px] h-[28px] md:h-[36px]" />
    ),
  },
];

export default crypto;
