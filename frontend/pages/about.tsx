import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>QuantumHive - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          About QuantumHive
        </h1>

        <p className="mt-3 text-2xl">
          Learn about our mission, values, and team.
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {/* Add sections for mission, values, team, history here */}
        </div>

        <Link href="/" className="mt-6 text-blue-600 hover:underline">
          <a>Go back to Homepage</a>
        </Link>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by the future
      </footer>
    </div>
  );
}