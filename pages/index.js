import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  const inviteLink =
    "https://discord.com/oauth2/authorize?client_id=1338616254046535700&permissions=8&integration_type=0&scope=bot";

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      <Head>
        <title>HypheN | Discord Bot</title>
        <meta
          name="description"
          content="HypheN is a versatile Discord bot offering moderation, giveaways, utilities, fun commands, music, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <header className="text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-yellow-400"
        >
          Meet HypheN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-lg max-w-xl mx-auto text-gray-300"
        >
          A versatile Discord bot enhancing your server with moderation,
          giveaways, utilities, fun commands, music, and more.
        </motion.p>
        <div className="mt-6 flex justify-center gap-4">
          {/* Invite HypheN Button */}
          <a
            href={inviteLink}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold text-gray-900 shadow-md transition-transform transform hover:scale-105"
          >
            Invite HypheN
          </a>
          {/* Join Community Button */}
          <a
            href="https://discord.gg/hyphen"
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold text-gray-900 shadow-md transition-transform transform hover:scale-105"
          >
            Join Community
          </a>
        </div>
      </header>

      {/* Features Section */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <section id="features">
          <h2 className="text-center text-3xl font-bold mb-8 text-yellow-400">
            Features
          </h2>
          {/* Interactive Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "🛡️ Moderation: Powerful tools to keep your server safe.",
              "🎉 Giveaways: Host engaging giveaways easily.",
              "⚙️ Utilities: Useful commands to simplify server management.",
              "🎲 Fun Commands: Interactive games and entertainment.",
              "🎵 Music: High-quality music playback.",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:bg-gray-600 transition-colors"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Commands Section */}
        <section id="commands">
          <h2 className="text-center text-3xl font-bold mb-8 text-yellow-400">
            Commands
          </h2>
          {/* Scroll Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto"
          >
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm md:text-base bg-white text-gray-900">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="border border-gray-700 px-4 py-2">Category</th>
                  <th className="border border-gray-700 px-4 py-2">Commands</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  ["Moderation 🛡️", "/ban, /kick, /mute, /warn, /purge"],
                  ["Giveaways 🎉", "/giveaway start, /giveaway end, /reroll"],
                  ["Utilities ⚙️", "/serverinfo, /userinfo, /avatar"],
                  ["Fun 🎲", "/meme", "/8ball", "/joke"],
                  ["Music 🎵", "/play", "/pause", "/queue", "/skip"],
                ].map(([category, cmds], index) => (
                  <motion.tr
                    key={category}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <td className="border border-gray-700 px-4 py-2">{category}</td>
                    <td className="border border-gray-700 px-4 py-2">{cmds}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="text-center">
          <h2 className="text-center text-3xl font-bold mb-8 text-yellow-400">
            Get Started
          </h2>
          {/* Scroll Animation */}
          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="list-decimal list-inside space-y-4 text-lg max-w-md mx-auto"
          >
            {[
              "Click the Invite HypheN button above.",
              "Select your Discord server from the dropdown menu.",
              "Authorize required permissions for HypheN.",
              "Enjoy all the powerful features HypheN provides!",
            ].map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </motion.ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-800 text-white">
        © {new Date().getFullYear()} HypheN Bot. All Rights Reserved.
        {/* Footer Links */}
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-yellow">Privacy Policy</a> |
          <a href="#" className="hover:text-yellow">Terms of Service</a> |
          <a href="#" className="hover:text-yellow">Discord Community</a>
        </div>
      </footer>
    </div>
  );
}

