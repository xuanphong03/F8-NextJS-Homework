import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="h-screen flex justify-center items-center fixed inset-0 !z-[9999] bg-white">
      <Image src="/images/loading.gif" height={100} width={600} alt="loading" />
    </div>
  );
}
