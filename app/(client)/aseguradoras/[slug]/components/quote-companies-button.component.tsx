import companiesJSON from "../../../../constants/companies.json";
import Link from "next/link";

export default function QuoteCompaniesAside() {
  return (
    <>
      {companiesJSON.companias.map((company: any, index: number) => (
        <h2
          key={index}
          className=" bg-primary text-white font-bold rounded-sm mx-auto lg:items-center h-10 w-full"
        >
          <Link
            className="w-full h-full flex items-center justify-center"
            href={company.slug}
          >
            Cotizar {company.nombre}
          </Link>
        </h2>
      ))}
    </>
  );
}
