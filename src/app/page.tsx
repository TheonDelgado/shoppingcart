import { Button } from "@/Components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="m-4">Welcome to The Good Shop, enter here</h1>
      <div className="flex w-screen h-48 mt-24">
        <Link href={"/Shop"} className="mx-80">
          <Button type="button">Go to Shop</Button>
        </Link>
      </div>
    </div>
  );
}
