import Head from 'next/head';
import styles from '../styles/Home.module.css';

const topics = [
  {
    title: 'Analysis',
    description:
      'Rigorous foundations of calculus — limits, continuity, sequences, series, and the epsilon-delta arguments that make calculus precise.',
  },
  {
    title: 'Linear Algebra',
    description:
      'Vector spaces, matrices, linear maps, eigenvalues and eigenvectors — the toolkit behind nearly every other branch of mathematics.',
  },
  {
    title: 'Proof & Logic',
    description:
      'How to read, write, and critique proofs. Induction, contradiction, contrapositive, and the language of sets and quantifiers.',
  },
  {
    title: 'Abstract Algebra',
    description:
      'Groups, rings, and fields — the study of structure itself, and why symmetry shows up everywhere from puzzles to physics.',
  },
  {
    title: 'Probability & Statistics',
    description:
      'Randomness made rigorous: probability spaces, distributions, and the statistical reasoning behind data-driven fields.',
  },
  {
    title: 'Discrete Mathematics',
    description:
      'Combinatorics, graph theory, and number theory — the mathematics underlying computer science and cryptography.',
  },
];

const tips = [
  'Attend every lecture and rework your notes within 24 hours — proofs fade fast.',
  'Do the problem sets by hand before checking solutions. Struggling productively is the point.',
  'Form a study group early. Explaining a proof out loud reveals what you actually understand.',
  'Read ahead lightly, but expect to reread each topic two or three times before it clicks.',
  'Office hours are not just for when you are stuck — use them to go deeper.',
];

const resources = [
  {
    name: 'Book of Proof by Richard Hammack',
    detail: 'Free, excellent introduction to mathematical proof — read this before term starts.',
  },
  {
    name: '3Blue1Brown (YouTube)',
    detail: 'Visual intuition for linear algebra, calculus, and more — great companion to lectures.',
  },
  {
    name: 'Your department’s reading list',
    detail: 'Check your welcome email or student portal for course-specific textbooks.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Mathematics — Incoming BSc Students</title>
        <meta
          name="description"
          content="A welcome guide for incoming Mathematics BSc students: what to expect, key first-year topics, study tips, and resources."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Incoming BSc Mathematics</p>
          <h1 className={styles.title}>Welcome to your maths degree</h1>
          <p className={styles.subtitle}>
            You are about to spend three years learning to think with total precision.
            It will be harder and stranger than school maths — and far more rewarding.
            Here is what to expect before you arrive.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What&apos;s different from school maths</h2>
          <p className={styles.sectionText}>
            At university, mathematics shifts from <em>computing answers</em> to{' '}
            <em>proving statements</em>. Instead of &quot;solve for x&quot;, you&apos;ll be asked
            to show <em>why</em> something is always true, for every possible case, with no
            exceptions. This is a genuine skill you build over time — nobody arrives already
            fluent in proof-writing.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core first-year topics</h2>
          <div className={styles.grid}>
            {topics.map((topic) => (
              <article key={topic.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{topic.title}</h3>
                <p className={styles.cardText}>{topic.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Study tips that actually help</h2>
          <ul className={styles.list}>
            {tips.map((tip) => (
              <li key={tip} className={styles.listItem}>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resources to get ahead</h2>
          <div className={styles.resourceList}>
            {resources.map((resource) => (
              <div key={resource.name} className={styles.resourceItem}>
                <span className={styles.resourceName}>{resource.name}</span>
                <span className={styles.resourceDetail}>{resource.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.closing}>
          <h2 className={styles.sectionTitle}>One last thing</h2>
          <p className={styles.sectionText}>
            Everyone in your cohort will feel lost at some point in the first term. That
            feeling is not a sign you don&apos;t belong — it&apos;s the normal cost of learning
            something genuinely new. Ask questions early and often.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>Good luck, and welcome to the department.</p>
        </footer>
      </main>
    </>
  );
}
