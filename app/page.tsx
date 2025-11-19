import About from "./(sections)/About";
import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
    </div> 
  );
}
