import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const inviteLink =
    "https://discord.com/oauth2/authorize?client_id=1338616254046535700&permissions=8&integration_type=0&scope=bot";

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen"
      onMouseMove={handleMouseMove}
    >
      <Head>
        <title>HypheN | Discord Bot</title>
        <meta
          name="description"
          content="HypheN is a versatile Discord bot offering moderation, giveaways, utilities, fun commands, music, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-10 h-10 bg-yellow-500 rounded-full pointer-events-none"
        style={{
          top: mousePosition.y - 20,
          left: mousePosition.x - 20,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Hero Section */}
      <header className="relative text-center py-16 px-4 bg-gradient-to-r from-navy-blue to-muted-rose overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ zIndex: -1, opacity: 0.5 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-gold"
        >
          <Typewriter
            words={['Meet HypheN', 'Your Server Assistant', 'Moderation Made Easy']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-lg max-w-xl mx-auto text-crisp-white"
        >
          A versatile Discord bot enhancing your server with moderation,
          giveaways, utilities, fun commands, music, and more.
        </motion.p>
        <div className="mt-6 flex justify-center gap-4">
          {/* Invite HypheN Button */}
          <motion.a
            href={inviteLink}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-sunny-yellow hover:bg-gold px-6 py-3 rounded-lg font-semibold text-navy-blue shadow-md transition-transform"
          >
            Invite HypheN
          </motion.a>
          {/* Join Community Button */}
          <motion.a
            href="https://discord.gg/hyphen"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-sunny-yellow hover:bg-gold px-6 py-3 rounded-lg font-semibold text-navy-blue shadow-md transition-transform"
          >
            Join Community
          </motion.a>
        </div>
      </header>

      {/* Features Section */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <section id="features">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-bold mb-8 text-gold"
          >
            Features
          </motion.h2>

          {/* Interactive Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "🛡️ Moderation",
              "🎉 Giveaways",
              "⚙️ Utilities",
              "🎲 Fun Commands",
              "🎵 Music",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : +50 }} // Alternate directions
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: index * 0.3 + .5 }} // Staggered reveal effect
                className="bg-mocha-mousse p-6 rounded-lg shadow-lg text-center hover:bg-muted-rose transition-colors"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Commands Section */}
        <section id="commands">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-bold mb-8 text-gold"
          >
            Commands
          </motion.h2>

          {/* Scroll Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto"
          >
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm md:text-base bg-crisp-white text-navy-blue">
              <thead className="bg-muted-rose text-crisp-white">
                <tr>
                  <th className="border border-gray-700 px-4 py-2">Category</th>
                  <th className="border border-gray-700 px-4 py-2">Commands</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  ["Moderation 🛡️", "/ban, /kick"],
                  ["Giveaways 🎉", "/giveaway start"],
                  ["Utilities ⚙️", "/serverinfo"],
                  ["Fun 🎲", "/meme"],
                  ["Music 🎵", "/play"],
                ].map(([category], index) => (
      {/* Footer */}
      <footer className="py-8 text-center bg-navy-blue text-crisp-white">
        © {new Date().getFullYear()} HypheN Bot. All Rights Reserved.
        
        {/* Footer Links */}
        <div className="mt-4 space-x-4">
          Made with ❤️ by{' '}
          <a
            href="https://discordapp.com/users/724914345003188265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-muted-yellow underline"
          >
            Avi911
          </a>.
          
           | 
          
           Privacy Policy | Terms of Use.

