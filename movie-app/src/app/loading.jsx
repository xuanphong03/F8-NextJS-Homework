import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white">
      <Image
        src="/images/loading.gif"
        height={100}
        width={600}
        alt="loading"
        className="w-auto"
        priority
      />
    </div>
  );
}
