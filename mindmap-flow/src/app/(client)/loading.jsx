import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center fixed inset-0 z-50 bg-white">
      <Image src="/images/loading.gif" height={100} width={600} alt="loading" />
    </div>
  );
}
