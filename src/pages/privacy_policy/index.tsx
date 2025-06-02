'use client';

import { Neucha } from 'next/font/google';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown'

const neucha = Neucha({
  weight: "400",
  preload: true,
  fallback: [
    "Neucha", "Dekko",
    // fallbacks from https://github.com/system-fonts/modern-font-stacks#handwritten
    'Segoe Print', 'Bradley Hand', 'Chilanka', 'TSCu_Comic',
    'casual', 'cursive',
  ],
  subsets: ["latin"],
})

async function getPrivacyPolicyMarkdown(): Promise<string> {
  const res = await fetch('https://raw.githubusercontent.com/saber-notes/saber/main/privacy_policy.md');
  const text = await res.text();
  return text;
}

type _Props = {
  markdown: string;
};
export async function getStaticProps(): Promise<{ props: _Props }> {
  const markdown = await getPrivacyPolicyMarkdown();
 
  return { props: { markdown } };
}

export default function PrivacyPolicy({ markdown }: _Props) {
  return (
    <>
    <Head>
      <title>Saber&apos;s Privacy Policy</title>
      <meta name="description" content="The notes app built for handwriting" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={neucha.className}>
      <ReactMarkdown>{markdown}</ReactMarkdown>

      <br />
      <p>
        See this page on{' '}
        <a href="https://github.com/saber-notes/saber/blob/main/privacy_policy.md">
          GitHub
        </a>
      </p>
    </main>
    </>
  );
}
