import Image from "next/image";

const vibes = [
  {
    label: "Current fuel",
    value: "Warm coffee",
  },
  {
    label: "Peak hours",
    value: "2 a.m. ideas",
  },
  {
    label: "Main quest",
    value: "Solo travel",
  },
  {
    label: "Side quest",
    value: "Extra cheese pizza",
  },
];

const lessons = [
  {
    title: "Coffee First, Always",
    year: "Daily",
    body: "Most problems feel smaller after a warm cup. The ones that don’t? Add another cup and a good playlist.",
  },
  {
    title: "Solo Trips Hit Different",
    year: "Favorite",
    body: "I love traveling solo and doing things myself: the freedom, the detours, the little wins. Independence is fun and adventurous, not a statement against company. Friends are great; going my own way is just another kind of joy.",
  },
  {
    title: "Say Yes to Random Plans",
    year: "2023",
    body: "The best stories usually start with “I wasn’t even supposed to go.” Spontaneity is undefeated, whether it’s a solo day out or a last-minute hang.",
  },
  {
    title: "Keep the Chaos Soft",
    year: "Present",
    body: "Life doesn’t need a perfect plot. A little mess, a lot of laughter, and people who get the bit. That’s the whole vibe.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-brand">Decem</div>
        <div className="nav-tag">Sohail · Dec 1</div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Decem&apos;s Little Adventures</p>
          <h1 className="brand-title">
            Meet <span>Decem</span>
          </h1>
          <p className="hero-lead">
            Born on December 1st, naturally cheerful! A December baby who loves
            solo travel, doing things his own way, warm coffee, and impulsive
            2 a.m. decisions, for the adventure, not because company isn&apos;t
            welcome.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#now">
              What’s cooking
            </a>
            <a className="btn btn-ghost" href="#lessons">
              Fun highlights
            </a>
          </div>
        </div>

        <div className="hero-media">
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

      <section className="section" id="now">
        <div className="section-head">
          <h2>Decem, Right Now</h2>
          <p>No heavy stuff. Just the current fun report.</p>
        </div>
        <div className="vibe-grid">
          {vibes.map((item) => (
            <div className="vibe-card" key={item.label}>
              <div className="vibe-label">{item.label}</div>
              <div className="vibe-value">{item.value}</div>
            </div>
          ))}
        </div>
        <p className="vibe-note">
          Thriving, slightly chaotic, and powered by caffeine and good vibes.
        </p>
      </section>

      <section className="section" id="lessons">
        <div className="section-head">
          <h2>Fun Highlights</h2>
          <p>Soft chaos, good snacks, and lessons that actually feel fun.</p>
        </div>
        <div className="lessons">
          {lessons.map((item) => (
            <article className="lesson" key={item.title}>
              <div className="lesson-meta">
                <h3>{item.title}</h3>
                <span className="lesson-year">{item.year}</span>
              </div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section quote">
        <blockquote>
          &ldquo;I like going solo because it&apos;s fun and adventurous, not
          because I don&apos;t like people. Independence just makes the map feel
          bigger.&rdquo;
        </blockquote>
        <cite>Decem, Solo Traveler &amp; Good-Vibes Collector</cite>
      </section>

      <footer className="footer">
        Made with ☕️ for Decem&apos;s Little Adventures · Sohail ·{" "}
        {new Date().getFullYear()}
      </footer>
    </main>
  );
}
