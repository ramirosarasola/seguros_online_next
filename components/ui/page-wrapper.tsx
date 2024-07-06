import { Footer } from "@/components";
import ServerNavbar from "@/components/navbar/server-navbar.component";

export const PageWrapper = ({ children }: any) => {
  return (
    <>
      <header className="bg-secondary">
        <ServerNavbar />
      </header>
      <main
        className={`${
          /*"pt-[96px]"*/ "pt-0"
        } flex flex-col justify-between min-h-[calc(100vh-18rem)] mx-auto`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
