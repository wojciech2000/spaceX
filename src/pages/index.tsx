import React from "react";
import Link from "next/link";

import Button from "src/components/button/Button.component";
import { routes } from "src/utils/routes/routes";

const Home = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center text-5xl text-white mb-12">PER ASPERA AD ASTRA</h1>

      <Link href="launches">
        <div>
          <Button>Check out launches</Button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
