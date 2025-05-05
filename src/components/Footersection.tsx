import { LinkedinFilled } from "@ant-design/icons";

export default function FooterSection() {
  return (
    <section className="pb-c-20">
      <div className="bg-c-gray-800 drop-shadow-2xl rounded-full py-c-6 px-c-7-5 flex justify-between">
        <p className="font-nunito text-c-gray-400">Follow me</p>
        <div className="flex gap-[20px] text-c-purple-300">
          <a
            href="https://www.linkedin.com/in/adam-ananda-6b8a38222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled />
          </a>
        </div>
      </div>
      <p className="ml-c-4 pt-3">Dam © 2025</p>
    </section>
  );
}
