import styles from './page.module.css';
import Image from 'next/image';
import { Fragment } from 'react';

export const metadata = {
  title: 'Thillai Nathan | SEO Engineer',
  description:
    'SEO Engineer specializing in Enterprise SEO, International SEO, eCommerce SEO, Technical SEO, and Lead Generation.',
};

const expertise = [
  { left: 'SEO & Semantic SEO', right: 'Technical SEO' },
  { left: 'Topical Map Creation', right: 'Answer Engine Optimization (AEO)' },
  { left: 'International SEO', right: 'eCommerce SEO' },
  { left: 'Lead Generation', right: 'Google Ads' },
  { left: 'Content Strategy', right: 'Entity-Based SEO' },
];

export default function HomePage() {
  return (
    <>
      <h1>Thillai Nathan – SEO Engineer</h1>

      <br />

      <Image
        src="/thillai-nathan.png"
        alt="Thillai Nathan"
        width={300}
        height={350}
        priority
        className={styles.profileImage}
      />

      <br />

      <p>
        I am Thillai Nathan, an SEO Engineer with more than 2.5 years of
        experience across Enterprise SEO, International SEO, and eCommerce SEO.
      </p>

      <p>
        My goal is to help businesses grow from early-stage startups to
        industry leaders. Understanding a business is always my first priority
        because SEO should be aligned with business objectives, lead generation,
        and revenue growth.
      </p>

      <p>
        I work closely with founders, entrepreneurs, and business leaders to
        understand their goals before building SEO strategies that support
        sustainable growth.
      </p>

      <p>
        Every project begins with understanding the business, analyzing
        competitors, conducting technical SEO audits, and reviewing data from
        Google Search Console and Google Analytics. From there, I create
        actionable SEO roadmaps designed to improve visibility, conversions,
        and business performance.
      </p>

      <div className={styles.expertiseDivider} />

      <h2>Expertise</h2>

      <ul className={styles.expertiseGrid}>
        {expertise.map((row, i) => (
          <Fragment key={i}>
            <li className={styles.expertiseItem}>
              {row.left}
            </li>

            <li className={styles.expertiseItem}>
              {row.right}
            </li>
          </Fragment>
        ))}
      </ul>

      <div className={styles.expertiseDivider} />

      <h2>How I Work</h2>

      <ul>
        <li>Understand business goals and long-term growth plans</li>
        <li>Research competitors and market opportunities</li>
        <li>Perform technical SEO audits and identify issues</li>
        <li>Analyze Google Search Console and Analytics data</li>
        <li>Review keyword rankings and search visibility</li>
        <li>Identify lead generation and conversion gaps</li>
        <li>Create topical maps and content strategies</li>
        <li>Build topical authority using semantic SEO principles</li>
        <li>Align SEO efforts with business objectives and revenue goals</li>
        <li>Deliver actionable audits and growth roadmaps</li>
      </ul>

      <div className={styles.expertiseDivider} />

      <h2>My Approach to SEO</h2>

      <p>
        Many SEO professionals focus on increasing impressions, clicks, and
        traffic. While those metrics matter, they are not the final goal.
      </p>

      <p>
        Growing traffic from 2,000 to 15,000 visitors means little if it does
        not generate qualified leads, customers, or revenue.
      </p>

      <p>
        My SEO strategies are built around business outcomes. Every
        recommendation is connected to real business objectives, conversion
        opportunities, and long-term growth.
      </p>

      <p>
        I believe SEO should go beyond traffic metrics. Success means better
        customer trust, higher conversion rates, stronger market positioning,
        and sustainable business growth.
      </p>

      <p>
        If you would like to discuss SEO, business growth, or a potential
        project, you can reach me through the{' '}
        <a href="/contact">contact page</a> or email me directly at{' '}
        <a href="mailto:thillai213@gmail.com">
          thillai213@gmail.com
        </a>.
      </p>
    </>
  );
}