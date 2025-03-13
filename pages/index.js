import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const inviteLink =
    "https://discord.com/oauth2/authorize?client_id=1338616254046535700&permissions=8&integration_type=0&scope=bot";

  const [hoveredFeature, setHoveredFeature] = useState(null);

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
      <header className="text-center py-16 px-4 bg-gradient-to-r from-navy-blue to-muted-rose">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-gold"
        >
          Meet HypheN
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
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-sunny-yellow hover:bg-gold px-6 py-3 rounded-lg font-semibold text-navy-blue shadow-md"
          >
            Invite HypheN
          </motion.a>
          {/* Join Community Button */}
          <motion.a
            href="https://discord.gg/hyphen"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-sunny-yellow hover:bg-gold px-6 py-3 rounded-lg font-semibold text-navy-blue shadow-md"
          >
            Join Community
          </motion.a>
        </div>
      </header>

      {/* Features Section */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <section id="features">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-bold mb-8 text-gold"
          >
            Features
          </motion.h2>

          {/* Interactive Boxes */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
  {[
    { title: "🛡️ Moderation", description: "Powerful tools to keep your server safe including ban, kick, mute, and warning systems." },
    { title: "🎉 Giveaways", description: "Host engaging giveaways with customizable duration, winners, and prizes." },
    { title: "⚙️ Utilities", description: "Useful commands to simplify server management with role assignment, polls, and more." },
    { title: "🎲 Fun Commands", description: "Interactive games and entertainment including memes, jokes, and trivia." },
    { title: "🎵 Music", description: "High-quality music playback with queue management, volume control, and playlist support." },
  ].map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredFeature(index)}
      onMouseLeave={() => setHoveredFeature(null)}
      whileHover={{ scale: 1.1 }}
      className="bg-mocha-mousse p-6 rounded-lg shadow-lg text-center hover:bg-muted-rose transition-all duration-300 cursor-pointer relative"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hoveredFeature === index ? -5 : 0 }}
        className="text-xl font-bold"
      >
        {feature.title}
      </motion.div>

      {/* Popup Box - Fixed positioning */}
      {hoveredFeature === index && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed mt-2 bg-crisp-white text-navy-blue p-4 rounded-lg shadow-lg z-50 w-64"
          style={{
            top: "auto",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "250px"
          }}
        >
          {feature.description}
        </motion.div>
      )}
    </motion.div>
  ))}
</div>

        </section>

        {/* Commands Section */}
        <section id="commands">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
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
                  ["Moderation 🛡️", "/ban, /kick, /mute, /warn, /purge"],
                  ["Giveaways 🎉", "/giveaway start, /giveaway end, /reroll"],
                  ["Utilities ⚙️", "/serverinfo, /userinfo, /avatar"],
                  ["Fun 🎲", "/meme, /8ball, /joke"],
                  ["Music 🎵", "/play, /pause, /queue, /skip"],
                ].map(([category, cmds], index) => (
                  <motion.tr
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    className="hover:bg-gray-100"
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
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-bold mb-8 text-gold"
          >
            Get Started
          </motion.h2>

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
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, color: "#FFD700" }}
              >
                {step}
              </motion.li>
            ))}
          </motion.ol>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10"
          >
            <motion.a
              href={inviteLink}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(255,215,0,0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-sunny-yellow hover:bg-gold px-8 py-4 rounded-lg font-semibold text-navy-blue shadow-md text-lg"
            >
              Get Started Now
            </motion.a>
          </motion.div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl font-bold mb-8 text-gold"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { 
                question: "Is HypheN free to use?", 
                answer: "Yes, HypheN is completely free to use with all core features available to everyone." 
              },
              { 
                question: "How do I report issues?", 
                answer: "Join our support server and create a ticket in the #support channel." 
              },
              { 
                question: "Can I customize command prefixes?", 
                answer: "Yes, you can set custom prefixes using the /prefix command." 
              },
              { 
                question: "Is HypheN always online?", 
                answer: "We maintain 99.9% uptime to ensure HypheN is available whenever you need it." 
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-mocha-mousse p-6 rounded-lg shadow-lg text-left hover:bg-muted-rose transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-navy-blue text-crisp-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          © {new Date().getFullYear()} HypheN Bot. All Rights Reserved.
          
          {/* Footer Links */}
          <div className="mt-4 space-x-4">
            Made with ❤️ by{' '}
            <motion.a
              href="https://discordapp.com/users/724914345003188265"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#FFD700" }}
              className="text-gold hover:text-muted-yellow underline"
            >
              avi911
            </motion.a>
          </div>
          
          
            </motion.a>
            <motion.a
              href="https://discord.gg/hyphen"
              whileHover={{ y: -5, color: "#7289DA" }}
              className="text-crisp-white hover:text-indigo-400"
            >
              Discord
            </motion.a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

