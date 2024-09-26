"use client";
import Script from "next/script";
import modelsJSON from "../../.../../../../constants/brands.json";

interface Props {
  brand: string;
}

const brandCodes: { [key: string]: string } = {
  AUDI: "jP5wzJEBKOlBYxkM0o3@",
  BMW: "D@nq36z$MW2eOB.7VEK}",
  CHEVROLET: "x9zr8Z1QvW8{4qgRe;EL",
  CITROEN: "nR9Nl50}oYojYXQ{1;.(",
  FIAT: "MDN0dx3o(Y()Wlnk@e;L",
  FORD: "M.mvrz@)qO)}WG26k(DJ",
  HONDA: "XKkV2N$rROZ840Ll}jpQ",
  NISSAN: "Z7}VQv.LM4nx4g6eRxnq",
  PEUGEOT: "7n8e6$)MrYxoWg;.XZpx",
  RENAULT: "7n8e6$)MrYxoWg;.XZpx",
  VOLVO: "PGQdwo59B4v2Yn7r@k$(",
  TOYOTA: "6DQqgNyj}A3GAKdRxreG",
  MITSUBISHI: "y(zQpvxj$Y0RA1{ReGgw",
  MAZDA: "0G.)mD@g54ExAxrP{Z}j",
  CHERY: "@nq36z$MW2ZMWB.7VEK}",
  CHRYSLER: "x0mVK8zvyOedWpP3Bo@7",
  VOLKSWAGEN: "nK.x{}jX$Ogm4N3VE(ZL",
  SUZUKI: "j$wNxD;o3AXyO9K{MQ1g",
};

export default function QuoteBrandsAside({ brand }: Props) {
  const brandCode = brandCodes[brand?.toUpperCase()] || "";
  // @ts-ignore
  const models = modelsJSON[brand?.toUpperCase()] || "";

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
      <input type="hidden" data-wokan-auto="marca" value={brandCode} />
      {models?.length != 0 &&
        models?.map((model: string, index: number) => (
          <button
            key={index}
            type="submit"
            data-wokan-auto-cotizar
            className="bg-primary font-bold rounded-sm mx-auto lg:items-center h-10 w-full cursor-pointer"
          >
            <h2 className="text-[16px] text-white cursor-pointer">
              Cotizar {model}
            </h2>
          </button>
        ))}
    </>
  );
}
