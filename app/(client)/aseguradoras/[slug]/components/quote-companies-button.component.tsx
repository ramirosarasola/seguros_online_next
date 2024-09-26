"use client";
import Script from "next/script";
import companiesJSON from "../../../../constants/companies.json";
import Link from "next/link";

export default function QuoteCompaniesAside() {
  return (
    <>
      <Script
        id="wokan-script"
        src="//webpack.wokan.com.ar/app/v1/init.js"
        strategy="lazyOnload"
        onLoad={() => {
          /*@ts-ignore eslint-disable-line*/
          wokanInitWebpack({
            sid: process.env.NEXT_PUBLIC_WOKAN_SID,
            mainColor: "#1570B1",
          });
        }}
      />
      {companiesJSON.companias.map((company: any, index: number) => (
        <button
          key={index}
          type="submit"
          data-wokan-auto-cotizar
          className="bg-primary font-bold rounded-sm mx-auto lg:items-center h-10 w-full cursor-pointer"
        >
          <h2 className="text-[16px] text-white cursor-pointer">
            Cotizar {company.nombre}
          </h2>
        </button>
      ))}
    </>
  );
}
