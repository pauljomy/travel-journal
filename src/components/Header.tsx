import globImg from "../assets/img/globe.png";

export default function Header() {
  return (
    <header className="bg-header flex items-center justify-center gap-3 py-5 w-full">
      <img src={globImg} alt="Globe" className="w-8" />
      <h1 className=" text-2xl text-white ">my travel journal</h1>
    </header>
  );
}
