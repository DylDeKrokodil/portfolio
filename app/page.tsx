import About from "./(sections)/About";
import Countries from "./(sections)/Countries";
import Hero from "./(sections)/Hero";
import Projects from "./(sections)/Projects";
import Skills from "./(sections)/Skills";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Countries/>
    </div> 
  );
}
