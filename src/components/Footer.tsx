export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between relative overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/971d192b-429a-48c7-95a8-79ad2cffcead/bucket/da8c15bc-5e83-40b0-b2a9-8292b5ae47dc.jpeg"
              alt="Таблица умножения"
              className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
            />
            <div className="flex flex-col gap-4 max-w-2xl">
              <h3 className="uppercase text-neutral-400 text-xs sm:text-sm tracking-wide">Что такое ОГЭ по математике</h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                ОГЭ по математике — обязательный государственный экзамен для учеников 9 класса. Он состоит из двух модулей: алгебры и геометрии, и включает 25 заданий разного уровня сложности.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Математика — это не просто экзамен. Навыки логического мышления, умение решать задачи и работать с числами нужны в любой профессии: от программирования и медицины до бизнеса и дизайна. Хорошая оценка по ОГЭ открывает двери в сильные колледжи и профильные классы, а главное — даёт уверенность в себе.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                МатОГЭ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} МатОГЭ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}