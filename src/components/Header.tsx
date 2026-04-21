interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="text-white text-sm uppercase tracking-wide">МатОГЭ</div>
          <div className="text-white/70 text-xs">Артём Васюхин Сергеевич</div>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-white/60 text-xs uppercase tracking-wide">Сделано на Python</span>

        </div>
      </div>
    </header>
  );
}