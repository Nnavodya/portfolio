"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);

  const [copied, setCopied] = useState("");

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "nethmirajapaksha038@gmail.com",
      href: "mailto:nethmirajapaksha038@gmail.com",
      color: "group-hover:text-red-400",
      copyable: true,
    },
    {
      icon: FaPhone,
      label: "Call/SMS",
      value: "+94 704 122 495",
      href: "tel:+94704122495",
      color: "group-hover:text-green-400",
      copyable: true,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+94 704 122 495",
      href: "https://wa.me/94704122495",
      color: "group-hover:text-green-500",
      copyable: false,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Nethmi Rajapaksha",
      href: "https://www.linkedin.com/in/nethmi-rajapaksha-465335359",
      color: "group-hover:text-blue-400",
      copyable: false,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Nnavodya",
      href: "https://github.com/Nnavodya",
      color: "group-hover:text-gray-300",
      copyable: false,
    },
  ];

  const validateForm = () => {
    let valid = true;

    const newErrors = {
      user_name: "",
      user_email: "",
      message: "",
    };

    if (formData.user_name.trim().length < 3) {
      newErrors.user_name = "Name must be at least 3 characters";
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email";
      valid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);

    setCopied(label);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!validateForm()) return;

    setIsSending(true);

    setStatus({
      type: null,
      message: "",
    });

    try {
      const result = await emailjs.sendForm(
        "service_4sb3ke6",
        "template_k7qlvv7",
        formRef.current,
        "_3_fYq2hOvA-L2i7b"
      );

      console.log("SUCCESS!", result.text);

      setStatus({
        type: "success",
        message: "Message sent successfully 🚀",
      });

      formRef.current.reset();

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

    } catch (error: any) {
      console.error("EMAILJS ERROR:", error);

      setStatus({
        type: "error",
        message:
          error?.text ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);

      setTimeout(() => {
        setStatus({
          type: null,
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden py-24 px-6 md:px-10 bg-[#050816] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
            }}
            className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
            style={{
              left: `${i * 5}%`,
              top: `${i * 4}%`,
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Let&apos;s Work Together
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-8 text-base md:text-lg">
            I’m always interested in internship opportunities,
            collaborations, and exciting software engineering
            projects. Feel free to reach out anytime.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" />

            <h3 className="text-2xl font-bold mb-2">
              Get in Touch
            </h3>

            <p className="text-gray-400 mb-8 leading-7">
              You can contact me through email, phone,
              WhatsApp, or my social platforms.
            </p>

            <div className="flex flex-col gap-4">

              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                    }}
                    key={info.label}
                    className="group relative overflow-hidden flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/30 p-5 transition-all duration-300"
                  >

                    <a
                      href={info.href}
                      target={
                        info.label === "Email" ||
                        info.label === "Call/SMS"
                          ? "_self"
                          : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 flex-1"
                    >

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-2xl text-gray-300 transition-all duration-300 ${info.color} group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]`}
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">
                          {info.label}
                        </h4>

                        <p className="text-sm text-gray-400 break-all">
                          {info.value}
                        </p>
                      </div>

                    </a>

                    {info.copyable && (
                      <button
                        onClick={() =>
                          copyToClipboard(info.value, info.label)
                        }
                        className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center transition"
                      >
                        {copied === info.label ? (
                          <FaCheck className="text-green-400" />
                        ) : (
                          <FaCopy className="text-gray-300" />
                        )}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 pointer-events-none" />

            <h3 className="text-2xl font-bold mb-2 relative z-10">
              Send Message
            </h3>

            <p className="text-gray-400 mb-8 leading-7 relative z-10">
              Have a project idea or internship opportunity?
              Send me a message.
            </p>

            <AnimatePresence>
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`mb-5 rounded-2xl px-5 py-4 border ${
                    status.type === "success"
                      ? "bg-green-500/10 border-green-500/30 text-green-300"
                      : "bg-red-500/10 border-red-500/30 text-red-300"
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative z-10 flex flex-col gap-5"
            >

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user_name: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />

                {errors.user_name && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.user_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  value={formData.user_email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user_email: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />

                {errors.user_email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.user_email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={7}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 resize-none"
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{
                  scale: isSending ? 1 : 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {isSending ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}