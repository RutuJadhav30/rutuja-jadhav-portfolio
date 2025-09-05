import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800/50 relative overflow-hidden">
      {/* Ambient subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(420px_240px_at_50%_120%,rgba(147,51,234,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(75,85,99,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(75,85,99,0.05)_1px,transparent_1px)] bg-[size:22px_22px]" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Rutuja</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
