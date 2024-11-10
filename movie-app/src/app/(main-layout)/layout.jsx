import SideBar from "./_components/SideBar";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

export default async function MoviesLayout({ children }) {
  return (
    <>
      <Header primary />
      <main className="bg-white dark:bg-slate-500 min-h-screen py-20 text-white px-5 2xl:px-0">
        <div className="container mx-auto grid grid-cols-12 gap-10">
          <div className="col-span-12 xl:col-span-9">{children}</div>
          <div className="hidden xl:block xl:col-span-3">
            <SideBar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
