import { Button } from "./button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b shadow-sm flex items-center px-6 z-10">
      <div className="text-xl font-bold text-slate-950">공간시스템 폴딩&썬루프</div>

      <nav className="ml-auto hidden md:flex items-center space-x-4">
        <Button variant="ghost">회사 소개</Button>
        <Button variant="ghost">제품 소개</Button>
        <Button variant="ghost">시공사례</Button>
        <Button variant="ghost">견적 요청</Button>
      </nav>
    </header>
  );
}
