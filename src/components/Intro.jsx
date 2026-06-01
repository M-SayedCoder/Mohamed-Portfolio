/* cspell:ignore Csvg Crect */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["My", "name", "is"];

export default function Intro({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [500, 1200, 900];

    if (step >= delays.length) {
      const finishTimer = setTimeout(() => {
        onFinish?.();
      }, 250);
      return () => clearTimeout(finishTimer);
    }

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, delays[step]);

    return () => clearTimeout(timer);
  }, [step, onFinish]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Poppins:wght@200;300;400&display=swap"
        rel="stylesheet"
      />

      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          overflow: "hidden",
          backgroundColor: "#050508",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Green glow — top right (matches hero) */}
        <motion.div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(75,227,161,0.1) 0%, transparent 65%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Purple glow — bottom left (matches hero) */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 65%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Grid pattern (matches hero) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(75,227,161,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(75,227,161,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Noise overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.025,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px",
            pointerEvents: "none",
          }}
        />

        {/* Content — perfectly centered */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <AnimatePresence mode="wait">

            {/* Step 0 — HEY */}
            {step === 0 && (
              <motion.h1
                key="hey"
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(3rem, 9vw, 7rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#4BE3A1",
                  margin: 0,
                  padding: 0,
                  lineHeight: 1,
                  userSelect: "none",
                  textShadow: "0 0 60px rgba(75,227,161,0.3)",
                }}
              >
                Hey
              </motion.h1>
            )}

            {/* Step 1 — MY NAME IS */}
            {step === 1 && (
              <motion.div
                key="words"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              >
                {words.map((word) => (
                  <motion.span
                    key={word}
                    variants={{
                      hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(1.5rem, 4vw, 3rem)",
                      letterSpacing: "0.28em",
                      color: "#9090A8",
                      textTransform: "uppercase",
                      userSelect: "none",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Step 2 — FINAL NAME */}
            {step >= 2 && (
              <motion.div
                key="final"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Green accent line */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    height: "2px",
                    width: "80px",
                    background: "linear-gradient(to right, transparent, #4BE3A1, transparent)",
                    marginBottom: "28px",
                    transformOrigin: "center",
                    boxShadow: "0 0 12px rgba(75,227,161,0.5)",
                  }}
                />

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #F0F0F8 0%, #9090A8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    margin: 0,
                    padding: 0,
                    userSelect: "none",
                  }}
                >
                  Mohamed Sayed
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35 }}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.45em",
                    fontWeight: 400,
                    color: "#4BE3A1",
                    textTransform: "uppercase",
                    marginTop: "16px",
                    userSelect: "none",
                    opacity: 0.8,
                  }}
                >
                  Full Stack Developer
                </motion.p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
