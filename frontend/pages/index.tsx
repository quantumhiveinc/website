import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>QuantumHive - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600" href="https://quantumhive.us">QuantumHive!</a>
        </h1>

        <p className="mt-3 text-2xl">
          Your partner in quantum innovation.
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {/* Add sections for key offerings, call to actions here */}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by the future
      </footer>
    </div>
  );
}