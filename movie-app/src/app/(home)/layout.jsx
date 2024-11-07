import Header from "../_components/Header/Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header secondary />
      <main>{children}</main>
    </>
  );
}
