import { appMenu } from "@/config/app-menu-config";
import Link from "next/link";

export function AppLayout(props: { children: React.ReactNode }) {
  return (
    <main>
      <header className="w-full bg-blue-500/75 py-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-2xl">MON GARAGE</h1>
          <nav className="space-x-3">
            {appMenu.map((item, index) => (
              <Link href={item.href} key={index}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-72px)] py-12 ">{props.children}</main>
      <footer></footer>
    </main>
  );
}
