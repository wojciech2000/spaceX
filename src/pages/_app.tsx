import "src/styles/globals.css";
import "src/styles/tailwind.css";

import type { AppProps } from "next/app";
import Image from "next/image";
// import Header from "src/components/header/Header.component";
import Header from "src/components/header/Header.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="py-4 min-h-screen flex flex-col px-4 sm:px-8 lg:px-16">
      <div className="fixed left-0 top-0 object-top w-screen h-screen -z-10">
        <Image
          src="/astronaut-bg.png"
          layout="fill"
          alt="astronaut in space"
          objectFit="cover"
          objectPosition="top"
        />
      </div>

      <Header />

      <div className="mt-8 sm:mt-16 lg:mt-24 flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
