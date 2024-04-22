import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
        <Link href="/" className="font-bold text-3xl">
            Marshall<span className="text-blue-500">Blog</span>
        </Link>
    </nav>
  );
}
