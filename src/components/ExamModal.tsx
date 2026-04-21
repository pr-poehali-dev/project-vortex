import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

interface ExamModalProps {
  open: boolean;
  onClose: () => void;
}

const questions = [
  { id: 1, text: "Вычислите: 12 × 15 − 80", answer: "100" },
  { id: 2, text: "Найдите значение выражения: (3² + 4²)", answer: "25" },
  { id: 3, text: "Решите уравнение: 2x + 6 = 18. Найдите x.", answer: "6" },
  { id: 4, text: "Найдите 20% от числа 350.", answer: "70" },
  { id: 5, text: "Периметр прямоугольника равен 36 см, одна сторона 10 см. Найдите другую сторону (в см).", answer: "8" },
  { id: 6, text: "Упростите: 5a + 3a − 2a. Коэффициент при a равен…", answer: "6" },
  { id: 7, text: "Найдите значение: √144", answer: "12" },
  { id: 8, text: "Чему равно: 2³ × 3²?", answer: "72" },
  { id: 9, text: "Решите неравенство: 3x − 5 > 4. Найдите наименьшее целое x.", answer: "4" },
  { id: 10, text: "В треугольнике два угла равны 60° и 70°. Найдите третий угол (в градусах).", answer: "50" },
  { id: 11, text: "Найдите НОД(36, 48).", answer: "12" },
  { id: 12, text: "Чему равно: 0,5² + 0,25?", answer: "0,5" },
  { id: 13, text: "Сторона квадрата равна 7 см. Найдите его площадь (в см²).", answer: "49" },
  { id: 14, text: "Поезд прошёл 240 км за 3 часа. Найдите скорость поезда (в км/ч).", answer: "80" },
  { id: 15, text: "Решите уравнение: x² = 81. Найдите положительный корень.", answer: "9" },
  { id: 16, text: "Найдите значение выражения: |−15| + |−7|", answer: "22" },
  { id: 17, text: "В классе 30 учеников, 18 из них — девочки. Какой процент составляют мальчики?", answer: "40" },
  { id: 18, text: "Найдите объём куба со стороной 3 см (в см³).", answer: "27" },
  { id: 19, text: "Дробь 18/24 в несократимом виде: числитель равен…", answer: "3" },
  { id: 20, text: "Сумма углов четырёхугольника равна… (в градусах)", answer: "360" },
  { id: 21, text: "Найдите: (-3) × (-4) + (-2)", answer: "10" },
  { id: 22, text: "Радиус окружности равен 5 см. Найдите диаметр (в см).", answer: "10" },
  { id: 23, text: "Решите уравнение: 5x − 3 = 2x + 9. Найдите x.", answer: "4" },
  { id: 24, text: "Среднее арифметическое чисел 4, 8, 12, 16 равно…", answer: "10" },
  { id: 25, text: "Прямой угол равен… (в градусах)", answer: "90" },
];

export default function ExamModal({ open, onClose }: ExamModalProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");

  const handleNext = () => {
    const updated = [...answers];
    updated[current] = input.trim();
    setAnswers(updated);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setInput(updated[current + 1] || "");
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    const updated = [...answers];
    updated[current] = input.trim();
    setAnswers(updated);
    setCurrent(current - 1);
    setInput(updated[current - 1] || "");
  };

  const score = answers.filter((a, i) =>
    a.replace(",", ".").trim() === questions[i].answer.replace(",", ".").trim()
  ).length;

  const getMark = () => {
    if (score >= 22) return "5";
    if (score >= 15) return "4";
    if (score >= 8) return "3";
    return "2";
  };

  const handleClose = () => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(""));
    setInput("");
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
              <h2 className="text-lg font-bold uppercase tracking-wide">Пробник ОГЭ</h2>
              <button onClick={handleClose} className="text-neutral-500 hover:text-black transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            {!submitted ? (
              <div className="p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center text-xs text-neutral-400 uppercase tracking-wide">
                  <span>Задание {current + 1} из {questions.length}</span>
                  <span>{Math.round(((current) / questions.length) * 100)}% выполнено</span>
                </div>

                <div className="w-full bg-neutral-100 h-1">
                  <div
                    className="bg-black h-1 transition-all duration-300"
                    style={{ width: `${(current / questions.length) * 100}%` }}
                  />
                </div>

                <p className="text-lg text-neutral-900 font-medium leading-snug min-h-[60px]">
                  {questions[current].text}
                </p>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && input.trim() && handleNext()}
                  placeholder="Введите ответ..."
                  className="border border-neutral-300 px-4 py-3 text-base focus:outline-none focus:border-black transition-colors"
                  autoFocus
                />

                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    disabled={current === 0}
                    className="px-5 py-2 border border-neutral-300 text-sm uppercase tracking-wide hover:border-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Назад
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-black text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors"
                  >
                    {current === questions.length - 1 ? "Завершить" : "Далее"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col items-center gap-6 text-center">
                <div className="text-7xl font-bold text-black">{getMark()}</div>
                <div>
                  <p className="text-2xl font-semibold mb-1">Результат: {score} из {questions.length}</p>
                  <p className="text-neutral-500 text-sm">
                    {score >= 22 ? "Отлично! Ты готов к ОГЭ." :
                     score >= 15 ? "Хороший результат! Ещё немного — и будет пятёрка." :
                     score >= 8 ? "Неплохо, но есть над чем поработать." :
                     "Не сдавайся — запишись на занятия и разберём ошибки вместе!"}
                  </p>
                </div>

                <div className="w-full flex flex-col gap-2 text-left max-h-48 overflow-y-auto border border-neutral-100 p-3">
                  {questions.map((q, i) => {
                    const correct = answers[i].replace(",", ".").trim() === q.answer.replace(",", ".").trim();
                    return (
                      <div key={q.id} className="flex items-start gap-2 text-sm">
                        <Icon name={correct ? "CheckCircle" : "XCircle"} size={16} className={correct ? "text-green-500 mt-0.5 shrink-0" : "text-red-400 mt-0.5 shrink-0"} />
                        <span className="text-neutral-600">
                          №{q.id}: твой ответ — <b>{answers[i] || "—"}</b>{!correct && <>, правильно: <b>{q.answer}</b></>}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={handleClose}
                  className="w-full bg-black text-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-neutral-800 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
