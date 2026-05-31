import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>Thillainathan</div>

        <div className={styles.col}>
          <h4>Resources</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/results">Results</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>More Stuff</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/photos">Photos</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Social</h4>
          <ul>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/thillai-nathan-/" target="_blank" rel="noopener noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/thillaiseo.bsky.social" target="_blank" rel="noopener noreferrer">
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        ©2026 - 2027 Thillai Nathan. All Rights Reserved.
      </div>

    </footer>
  );
}