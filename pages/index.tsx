import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>ნიქსლერი</title>
      <meta
        name="description"
        content="Niksleri is a Georgian SaaS company powering Relocify.nl — the platform that lets expats secure Dutch rentals remotely. Pure software, no brokerage. Germany launch Q4 2025."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>ნიქსლერი</h1>
        <p className={styles.tagline}>
          We build the software that lets expats rent Dutch homes from abroad.
        </p>
        <a href="#platform" className={styles.button}>
          See the platform
        </a>
      </section>

      <section className={styles.section}>
        <h2>Why we exist</h2>
        <p>
          <strong>Pure SaaS, zero brokerage.</strong> Niksleri LLC is a Georgian
          software studio. We design, ship, and maintain the engine behind
          <strong> Relocify </strong>— the Dutch remote-rental marketplace. No
          key-holding, no money-handling, just code, compliance, and support.
        </p>
      </section>

      <section id="platform" className={styles.section}>
        <h2>Platform highlights</h2>
        <ul>
          <li>Virtual viewings (WebRTC)</li>
          <li>E-signable NL lease templates (eIDAS-ready)</li>
          <li>Tenant KYC / AML checks via API</li>
          <li>GDPR-hosted document vault</li>
          <li>Role-based dashboards for renters, landlords, presenters</li>
          <li>Webhooks + GraphQL API</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>What we don’t do</h2>
        <p>
          We never touch client funds, hold deposits, or act as a real-estate
          broker. On-site viewings are handled by freelance presenters contracted
          by our Dutch sister company.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Live deployments</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Region</th>
              <th>Front-end brand</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🇳🇱 Netherlands</td>
              <td>
                <strong>Relocify.nl</strong>
              </td>
              <td>Operating since 2023</td>
            </tr>
            <tr>
              <td>🇩🇪 Germany</td>
              <td>
                <strong>Relocify.de</strong>
              </td>
              <td>
                <em>Launching Q4 2025 – join wait-list</em>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <a href="https://relocify.nl" target="_blank" rel="noopener noreferrer">
            Visit Dutch marketplace →
          </a>
          <br />
          <a href="mailto:de@relocify.com?subject=Wait-list">
            Join German wait-list →
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h2>Tech & compliance badge strip</h2>
        <p>
          (TypeScript • Next.js • Postgres • ISO 27001 • PCI-DSS tokenisation)
        </p>
      </section>

      <section className={styles.section}>
        <h2>About & contact</h2>
        <p>
          Built by remote engineers in Tbilisi, supported round-the-clock,
          architected for EU compliance.
          <br />
          <a href="mailto:hello@niksleri.com">hello@niksleri.com</a> • Reg № 42
          345 678 • Tbilisi, Georgia
        </p>
      </section>

      <footer className={styles.footer}>
        © 2025 Niksleri LLC · Privacy · Terms
      </footer>
    </main>
  </div>
)

export default Home
