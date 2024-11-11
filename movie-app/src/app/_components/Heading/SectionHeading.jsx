export default function SectionHeading({ title }) {
  return (
    <h2 className="text-xl font-bold lg:text-2xl flex items-center gap-2 text-light dark:text-white">
      <span className="w-2 h-6 lg:h-8 bg-[#032541] block rounded-full"></span>{" "}
      {title}
    </h2>
  );
}
