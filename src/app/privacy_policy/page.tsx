'use client';

import ReactMarkdown from 'react-markdown'

async function getPrivacyPolicyMarkdown(): Promise<string> {
  const res = await fetch('https://raw.githubusercontent.com/adil192/saber/main/privacy_policy.md');
  const text = await res.text();
  return text;
}

export default async function() {
  const markdown = await getPrivacyPolicyMarkdown();
  return <PrivacyPolicy markdown={markdown} />;
}

function PrivacyPolicy({ markdown }: { markdown: string }) {
  return (
    <main>
      <ReactMarkdown children={markdown} />

      <br />
      <p>
        See this page on{' '}
        <a href="https://github.com/adil192/saber/blob/main/privacy_policy.md">
          GitHub
        </a>
      </p>
    </main>
  );
}
