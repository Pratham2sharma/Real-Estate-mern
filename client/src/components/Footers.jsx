import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footers() {
  return (
    <Footer container>
      <div className="w-full text-center bg-slate-300 shadow-md">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">House</span>
              <span className="text-slate-700">Estate</span>
            </h1>
          </Link>
          <Footer.LinkGroup className="text-slate-500 font-semibold gap-4">
            <Footer.Link href="/about">About</Footer.Link>
          </Footer.LinkGroup>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon
              href="https://www.instagram.com/pratham2sharma/?next=%2F"
              icon={BsInstagram}
            />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Pratham Sharma" year={2023} />
      </div>
    </Footer>
  );
}
