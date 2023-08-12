import Nav from "@/components/Nav";
import Link from "next/link";

const Home = () => {
  return (
    <section className="w-full flex flex-col justify-center">
      <Nav />
      <h1 className="text-center">Welome to the landing page</h1>
      <Link href="/signup">Get Started</Link>
    </section> 
  );
};

export default Home;