import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import MaterialsModal from "@/components/MaterialsModal";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://cdn.poehali.dev/projects/971d192b-429a-48c7-95a8-79ad2cffcead/files/70b36b68-5e47-4f7f-b063-83e17f84446b.jpg"
            alt="Подготовка к ОГЭ по математике"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            СДАЙ ОГЭ
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
            Подготовка к ОГЭ по математике с нуля до уверенной пятёрки
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
            >
              Справочный материал
            </button>
            <button
              className="bg-transparent text-white border border-white px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
            >
              Начать пробник
            </button>
          </div>
        </div>
      </div>

      <MaterialsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}