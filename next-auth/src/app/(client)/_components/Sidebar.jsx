import Image from "next/image";
import F8_Logo from "@/public/images/f8_logo.webp";

export default function Sidebar() {
  return (
    <aside className="col-span-3 px-2 space-y-4">
      <div>
        <div className="w-full aspect-square rounded-xl bg-gray-200 shadow-gray-500 shadow-around overflow-hidden">
          <Image
            priority
            alt="F8 Logo"
            src={F8_Logo}
            className="scale-90 hover:scale-105 transition-all"
          />
        </div>
        <h3 className="mt-2 text-center">Fullstack Developer</h3>
      </div>
      <div>
        <h2 className="font-bold text-xl">Các kỹ năng của tôi</h2>
        <ul className="space-y-1 mt-2">
          <li>
            <h3 className="">
              Kỹ năng làm việc:{" "}
              <span>
                REST API, ReactJS, NextJS, Redux, Context, CSS3, HTML5, UI/UX,
                Figma, Photoshop...
              </span>
            </h3>
          </li>
          <li>
            <h3>
              Các kỹ năng khác:{" "}
              <span>
                Kỹ năng nghiên cứu và tìm kiếm tương đối tốt. Tư duy làm việc,
                kỹ năng làm việc nhóm tốt so với độ tuổi.
              </span>
            </h3>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl">Lịch sử</h2>
        <ul className="space-y-1 mt-2">
          <li>
            <h3 className="">
              2009-2014:
              <span>Trường Tiểu học Vĩnh Quỳnh</span>
            </h3>
          </li>
          <li>
            <h3>
              2014-2018:
              <span>Trường THCS Vĩnh Quỳnh</span>
            </h3>
          </li>
          <li>
            <h3>
              2018-2021:
              <span>Trường THPT Ngô Thì Nhậm</span>
            </h3>
          </li>
          <li>
            <h3>
              2021-2024:
              <span>Trường Đại học Thăng Long</span>
            </h3>
          </li>
        </ul>
      </div>
    </aside>
  );
}
