import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { SkillsSection } from "./components/SkillsSection/SkillsSection";

import style from "./App.module.css";
console.log(style);

function App() {
  return (
    <div className={style.page}>
      <Header />

      <main>
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
