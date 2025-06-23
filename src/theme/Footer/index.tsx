import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white px-8 py-8 text-sm">
      <div className="max-w-full flex flex-col-reverse md:flex-row gap-9 justify-between text-base">
        <div className="text-center">© {year} LYNC World</div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center md:justify-center">
          <a
            href="https://discord.com/invite/lyncworld"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4ce589] text-white flex items-center gap-1.5 transition-colors"
          >
            <img className="w-4 h-4" src="img/discord.svg" /> Discord
          </a>
          <a
            href="https://x.com/Lyncworld"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4ce589] text-white flex items-center gap-1.5 transition-colors"
          >
            <img className="w-4 h-4" src="img/x.svg" />
            Twitter
          </a>
          <a
            href="https://github.com/LYNC-WORLD"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4ce589] text-white flex items-center gap-1.5 transition-colors"
          >
            <img className="w-5 h-5" src="img/github.svg" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
