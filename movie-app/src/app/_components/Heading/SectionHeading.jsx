export default function SectionHeading({ title }) {
  return (
    <h2 className="text-xl lg:text-2xl flex items-center gap-2">
      <span className="w-2 h-6 lg:h-8 bg-indigo-800 block rounded-full"></span>{" "}
      {title}
    </h2>
  );
}
