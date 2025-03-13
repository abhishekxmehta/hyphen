import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const inviteLink =
    "https://discord.com/oauth2/authorize?client_id=1338616254046535700&permissions=8&integration_type=0&scope=bot";

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>HypheN | Discord Bot</title>
        <meta
          name="description"
          content="HypheN is a versatile Discord bot offering moderation, giveaways, utilities, fun commands, music, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header Section */}
      <header className="py-12 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Meet HypheN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
        >
          A versatile Discord bot enhancing your server with moderation,
          giveaways, utilities, fun commands, music, and more.
        </motion.p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          {/* Invite Button */}
          <Link
            href={inviteLink}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold inline-block text-center w-full sm:w-auto"
          >
            Invite HypheN
          </Link>
          {/* Join Community Button */}
          <Link
            href="https://discord.gg/hyphen"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold inline-block text-center w-full sm:w-auto"
          >
            Join Community
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* Features Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold border-b border-gray-700 pb-2"
          >
            Features
          </motion.h2>
          <ul className="mt-6 space-y-3 text-lg md:grid md:grid-cols-2 gap-4">
            {[
              "🛡️ Moderation: Powerful tools to keep your server safe.",
              "🎉 Giveaways: Host engaging giveaways easily.",
              "⚙️ Utilities: Useful commands to simplify server management.",
              "🎲 Fun Commands: Interactive games and entertainment.",
              "🎵 Music: High-quality music playback.",
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-4 rounded-lg"
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Commands Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold border-b border-gray-700 pb-2"
          >
            Commands
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="mt-6 w-full table-auto border-collapse border border-gray-700 text-sm md:text-base">
              <thead className="bg-gray-800">
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
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <td className="border border-gray-700 px-4 py-2">{category}</td>
                    <td className="border border-gray-700 px-4 py-2">{cmds}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Get Started Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold border-b border-gray-700 pb-2"
          >
            Get Started
          </motion.h2>
          <ol className="mt-6 list-decimal list-inside space-y-2 text-lg">
            {[
              "Click the Invite HypheN button above.",
              "Select your Discord server from the dropdown menu.",
              "Authorize required permissions for HypheN.",
              "Enjoy all the powerful features HypheN provides!",
            ].map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm border-t border-gray-800">
        © {new Date().getFullYear()} HypheN Bot. All Rights Reserved.
        <div className="mt-3 space-x-4">
          {/* Footer Links */}
          <Link href="/privacy-policy" className="hover:text-blue-400 inline-block">
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/terms-of-service" className="hover:text-blue-400 inline-block">
            Terms of Service
          </Link>{" "}
          |
          <Link href="https://discord.gg/hyphen" className="hover:text-blue-400 inline-block">
            Discord Community
          </Link>
        </div>
      </footer>
    </div>
  );
}
