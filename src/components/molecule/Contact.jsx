import Link from "../atom/Link";

const Contact = () => {
  return (
    <div className="flex flex-row-reverse gap-4">
      <Link
        style="hover:text-purple-400 duration-300 flex items-center"
        href="mailto:touron.arthur77@gmail.com"
      >
        <span className="w-6 h-6 material-symbols-outlined">mail</span>
      </Link>
      <Link href="https://github.com/Swaayveee">
        <img className="w-6 h-6" src="/src/assets/github_dark.svg" alt="GitHub" />
      </Link>
      <Link href="https://www.linkedin.com/in/arthur-touron-296815346/">
        <img className="w-6 h-6 fill-white" src="/src/assets/linkedin.svg" alt="LinkedIn" />
      </Link>
    </div>
  );
};

export default Contact;
