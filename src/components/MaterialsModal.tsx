import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

interface MaterialsModalProps {
  open: boolean;
  onClose: () => void;
}

const tabs = [
  {
    id: "geometry",
    label: "Геометрия",
    img: "https://cdn.poehali.dev/projects/971d192b-429a-48c7-95a8-79ad2cffcead/bucket/42540be5-5ca9-429a-ba02-03b89bca604c.jpeg",
    alt: "Геометрические формулы",
  },
  {
    id: "algebra",
    label: "Алгебра",
    img: "https://cdn.poehali.dev/projects/971d192b-429a-48c7-95a8-79ad2cffcead/bucket/6f52d6c9-2857-4bce-adf7-79d3466854b6.jpeg",
    alt: "Формулы сокращённого умножения",
  },
  {
    id: "tasks",
    label: "Карточки-пятиминутки",
    img: "https://cdn.poehali.dev/projects/971d192b-429a-48c7-95a8-79ad2cffcead/bucket/efbbccf4-9911-49c1-9252-89024e3e0930.jpeg",
    alt: "Карточки — пятиминутки «Готовимся к ОГЭ»",
  },
];

export default function MaterialsModal({ open, onClose }: MaterialsModalProps) {
  const [active, setActive] = useState("geometry");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
              <h2 className="text-lg font-bold uppercase tracking-wide">Вспомогательные материалы</h2>
              <button onClick={onClose} className="text-neutral-500 hover:text-black transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="flex border-b border-neutral-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex-1 py-3 text-sm uppercase tracking-wide transition-colors duration-200 ${
                    active === tab.id
                      ? "border-b-2 border-black font-semibold text-black"
                      : "text-neutral-500 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="overflow-y-auto flex-1 p-4">
              {tabs.map((tab) =>
                active === tab.id ? (
                  <img
                    key={tab.id}
                    src={tab.img}
                    alt={tab.alt}
                    className="w-full h-auto object-contain"
                  />
                ) : null
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
