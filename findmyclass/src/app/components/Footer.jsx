import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between bg-black">
      <p className="text-white p-5 text-center font-semibold font-system-ui">
        © 2024 FindMyClass. All rights reserved.
      </p>
      <div className="flex items-center justify-center mr-4">
        <a href="https://github.com/TalhaNaveed1/FindMyClass-Guelph">
          <Image
            src="/images/footer-github.png"
            alt="Github Logo"
            width={40}
            height={40}
            className="m-1"
          />
        </a>
        <a href="https://www.linkedin.com/in/talha-naveed-b36290292/">
          <Image
            src="/images/footer-linkedin.png"
            alt="Linkdin Logo"
            width={40}
            height={40}
            className="m-1"
          />
        </a>
      </div>
    </footer>
  );
}
