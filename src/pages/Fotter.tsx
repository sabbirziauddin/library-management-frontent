const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} My Library App. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/sabbirziauddin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-sm"
          >
            GitHub
          </a>
          <a href="/privacy-policy" className="hover:text-blue-500 text-sm">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-500 text-sm">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
