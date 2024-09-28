import Image from "next/image";
import Quiz from "./components/Quiz";

export default function Home() {
  return (
    <div className="grid shadow-lg grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="sm:text-xl lg:text-4xl font-bold">Simple Javascript Quiz</h1>
      <Quiz className='border-green-400'/>
    </div>
  );
}
