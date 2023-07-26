'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react';
import { annotate, annotationGroup } from 'rough-notation';

export default function Home() {
  useEffect(() => {
    const headerElem = document.querySelector<HTMLElement>('.'+styles.header)!;
    const otherElems = document.querySelectorAll<HTMLElement>(
      'h2, .'+styles.underlineMe
    );

    const headerAnnotation = annotate(headerElem, {
      type: 'box',
      strokeWidth: 2,
      iterations: 2,
    });
    const otherElemsAnnotations = Array.from(otherElems).map((elem) => {
      if (elem.tagName === 'H2') {
        return annotate(elem, {
          type: 'highlight',
          color: '#ffe28e',
          iterations: 2,
        });
      } else if (elem.classList.contains(styles.underlineMe)) {
        return annotate(elem, {
          type: 'underline',
          color: '#ffe28e',
          iterations: 2,
        });
      } else {
        throw new Error('Unknown element');
      }
    });

    const group = annotationGroup([
      headerAnnotation,
      ...otherElemsAnnotations,
    ]);
    group.show();

    return () => {
      group.hide();
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Image
          src="https://raw.githubusercontent.com/adil192/saber/main/assets/icon/resized/icon-512x512.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <h1 className={styles.title}>Saber</h1>
        <p className={styles.summary}>
          A cross-platform libre handwritten notes app
        </p>
      </div>

      <div className={styles.feature}>
        <h2>Private</h2>
        <p>Only you can access your notes!</p>
        <p>
          You can sync your notes across devices
          knowing that they are encrypted and stored securely,
          and not even the server can read them.
        </p>
      </div>

      <div className={styles.feature}>
        <h2>Cross-platform</h2>
        <p>
          You can sync and edit your notes across all your devices,
          whether they're a phone, tablet, or computer.
        </p>
      </div>

      <div className={styles.feature}>
        <h2>The perfect highlighter</h2>
        <p>
          Saber's highlighter doesn't overlap with itself
          and change color when you go over the same area again.
        </p>
        <p>
          The highlighter also renders{' '}
          <span className={styles.underlineMe}>underneath</span>{' '}
          the text, so you can still see the text clearly.
        </p>
      </div>

      <div className={styles.feature}>
        <h2>Stay organized</h2>
        <p>
          Saber lets you organize your notes into unlimited nested folders.
        </p>
        <p>
          You can also quickly access your most recent notes
          from the home screen.
        </p>
      </div>

      <div className={styles.feature}>
        <h2>Cohesive dark mode</h2>
        <p>
          Saber's dark mode doesn't just darken the UI;
          it also darkens the notes themselves.
        </p>
        <p>
          This means that you can read your notes in the dark
          without hurting your eyes.
        </p>
      </div>

      <div className={styles.feature}>
        <h2>Open source</h2>
        <p>No sneaky stuff! Saber is free and open source software.</p>
        <p>
          Find the code on{' '}
          <a href="https://github.com/adil192/saber">
            <Image
              className={styles.githubLogo}
              src="images/badges/GitHub_Logo.png"
              alt="GitHub"
              width={100}
              height={41}
            />
          </a>
          .
        </p>
      </div>
    </main>
  )
}
