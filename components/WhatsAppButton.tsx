"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/content";

export default function WhatsAppButton() {
  const href = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : undefined;

  return (
    <motion.a
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label="Stuur een WhatsApp-bericht"
      title={href ? "Stuur een WhatsApp-bericht" : "WhatsApp-nummer nog toevoegen"}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-shadow duration-300 hover:shadow-[0_12px_32px_-8px_rgba(37,211,102,0.55)] md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={1.8} className="text-white" />
    </motion.a>
  );
}
