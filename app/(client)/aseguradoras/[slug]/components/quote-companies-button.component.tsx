import companiesJSON from "../../../../constants/companies.json";
import Link from "next/link";

export default function QuoteCompaniesAside() {
  return (
    <>
      {companiesJSON.companias.map((company: any, index: number) => (
        <Link
          href={company.slug}
          key={index}
          className=" bg-primary text-white font-bold rounded-sm mx-auto lg:items-center h-10 w-full text-center flex justify-center items-center"
        >
          Cotizar {company.nombre}
        </Link>
      ))}
    </>
  );
}
