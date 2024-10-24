import Link from "next/link";
import React from "react";

export default function ContactInformationSession() {
  return (
    <div className="py-10">
      <h2 className="text-center text-2xl font-bold">Thông tin liên hệ</h2>
      <ul>
        <li className="flex items-center gap-2">
          <h3 className="font-bold">Phone:</h3>
          <Link className="text-orange-600" href="tel:0865783359">
            086 578 3359
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <h3 className="font-bold">Email:</h3>
          <Link
            className="text-orange-600"
            href="mailto:contact@fullstack.edu.vn"
          >
            contact@fullstack.edu.vn
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <h3 className="font-bold">Facebook:</h3>
          <Link
            className="text-orange-600"
            href="https://www.facebook.com/f8vnofficial"
          >
            https://www.facebook.com/f8vnofficial
          </Link>
        </li>
      </ul>
    </div>
  );
}
