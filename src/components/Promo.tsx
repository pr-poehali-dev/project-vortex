import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full bg-neutral-900">
          <img
            src="https://cdn.poehali.dev/projects/971d192b-429a-48c7-95a8-79ad2cffcead/bucket/da8c15bc-5e83-40b0-b2a9-8292b5ae47dc.jpeg"
            alt="Таблица умножения"
            className="w-full h-full object-cover opacity-10"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Формат занятий
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
        Разбор реальных вариантов ОГЭ и домашние задания с проверкой.
        Начни — и уже через месяц увидишь прогресс.
      </p>
    </div>
  );
}