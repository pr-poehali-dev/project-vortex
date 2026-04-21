export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/971d192b-429a-48c7-95a8-79ad2cffcead/bucket/fc615e19-be3e-451f-b486-db3e426be207.jpeg"
          alt="ОГЭ по математике"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему у нас получаются результаты</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Никакой воды и зубрёжки — только понятные разборы задач, система повторения и живая обратная связь от преподавателя.
          Ученики сдают ОГЭ на 4 и 5.
        </p>

      </div>
    </div>
  );
}