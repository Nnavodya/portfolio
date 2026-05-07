export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <span className="mx-4 text-blue-400 text-3xl sm:text-4xl font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
        •••
      </span>

      <div className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </div>
  );
}