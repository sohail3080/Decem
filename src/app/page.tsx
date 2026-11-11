import Image from "next/image";
import BirthdayTimer from "@/components/BirthdayTimer";
import Reveal from "@/components/Reveal";

const vibes = [
  {
    label: "Current fuel",
    value: "Chai 🍵",
  },
  {
    label: "Peak hours",
    value: "Early mornings",
  },
  {
    label: "Main quest",
    value: "Nature time",
  },
  {
    label: "Soft skill",
    value: "Guitar & songs",
  },
];

const lessons = [
  {
    title: "Nature Feels Right",
    year: "Always",
    body: "Cafe and pub culture just aren’t my thing. I prefer nature and whatever feels natural: open air, quiet trails, simple days. No judgment on anyone else’s vibe. It’s only my preference.",
  },
  {
    title: "Solo Trips Hit Different",
    year: "Favorite",
    body: "I love traveling solo and doing things myself: the freedom, the detours, the little wins. Independence is fun and adventurous, not a statement against company. Friends are great; going my own way is just another kind of joy.",
  },
  {
    title: "Songs for My Niece",
    year: "Dearest",
    body: "I can play guitar, and I love to play and sing for my niece. She’s dear to me, and those little music moments are some of my favorite ones.",
  },
  {
    title: "Health Comes First",
    year: "Present",
    body: "I take care of my health. Gym sessions, healthy food, and steady habits keep the energy up for travel and everything else.",
  },
  {
    title: "Happy Being Single",
    year: "Choice",
    body: "I like to stay single and keep life light on responsibilities. I’m living for myself, the independence feels good, and I’m genuinely happy with it.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-brand">Decem</div>
        <div className="nav-tag">
          Sohail · <span className="date-highlight">Dec 1</span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow anim-item" style={{ animationDelay: "0.05s" }}>
            Decem&apos;s Little Adventures
          </p>
          <h1 className="brand-title anim-item" style={{ animationDelay: "0.15s" }}>
            Meet <span>Decem</span>
          </h1>
          <p className="hero-lead anim-item" style={{ animationDelay: "0.28s" }}>
            Born on <span className="date-highlight">December 1st</span>. A
            December baby living for himself: solo travel, nature over noisy
            scenes, chai 🍵, early mornings, the gym, and playing guitar to
            sing for his niece, whom he loves dearly, for the adventure, not
            because company isn&apos;t welcome.
          </p>
          <div className="cta-row anim-item" style={{ animationDelay: "0.4s" }}>
            <a className="btn btn-primary" href="#birthday">
              Meet Dec 1
            </a>
            <a className="btn btn-ghost" href="#lessons">
              Fun highlights
            </a>
          </div>
        </div>

        <div className="hero-media anim-item" style={{ animationDelay: "0.22s" }}>
          <div className="hero-glow" aria-hidden />
          <div className="hero-frame">
            <Image
              src="/my-pic-ghibli.jpeg"
              alt="Decem"
              width={720}
              height={900}
              priority
            />
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section" id="now">
          <div className="section-head">
            <h2>Decem, Right Now</h2>
            <p>No heavy stuff. Just the current fun report.</p>
          </div>
          <div className="vibe-grid">
            {vibes.map((item, index) => (
              <div
                className="vibe-card"
                key={item.label}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="vibe-label">{item.label}</div>
                <div className="vibe-value">{item.value}</div>
              </div>
            ))}
          </div>
          <p className="vibe-note">
            Thriving, lightly adventurous, and powered by chai and good vibes.
          </p>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="section" id="birthday">
          <div className="section-head">
            <h2>Until December 1st</h2>
            <p>
              Every year starts with that date for me. Here&apos;s how close the
              next celebration is.
            </p>
          </div>
          <BirthdayTimer />
        </section>
      </Reveal>

      <section className="section" id="lessons">
        <Reveal>
          <div className="section-head">
            <h2>Fun Highlights</h2>
            <p>Nature, guitar songs, and lessons that actually feel fun.</p>
          </div>
        </Reveal>
        <div className="lessons">
          {lessons.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="lesson">
                <div className="lesson-meta">
                  <h3>{item.title}</h3>
                  <span className="lesson-year">{item.year}</span>
                </div>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal delay={60}>
        <section className="section quote">
          <blockquote>
            &ldquo;The best audience I have is my niece. A guitar, a few songs,
            and her smile is more than enough.&rdquo;
          </blockquote>
          <cite>Decem, for the niece he loves dearly</cite>
        </section>
      </Reveal>

      <footer className="footer">
        Made with chai 🍵 for Decem&apos;s Little Adventures · Sohail ·{" "}
        {new Date().getFullYear()}
      </footer>
    </main>
  );
}
