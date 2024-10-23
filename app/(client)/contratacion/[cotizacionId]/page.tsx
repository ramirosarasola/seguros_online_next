import axios from "axios";
import https from "https";
import { Cotizacion } from "@/types/cotizacion.type";
import { ContratacionForm } from "./components/contratacion-form.component";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function getCotizacion(cotizacionId: string) {
  try {
    const url = `${process.env.BASE_URL}/api/retrieveData?quote=${cotizacionId}`;
    // console.log("URL de la API:", url);

    const response = await axios.get(url, {
      httpsAgent: agent,
    });

    const cotizacion: Cotizacion = response.data;
    return cotizacion;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function ContratacionPage({
  params,
}: {
  params: { cotizacionId: string };
}) {
  // console.log("ID de cotización recibido:", params.cotizacionId);

  const cotizacion = await getCotizacion(params.cotizacionId);

  if (cotizacion?.status === "CONTRATADO") {
    return (
      <div>
        <h1>La cotización ya se encuentra contratada</h1>
      </div>
    );
  }

  // console.log("Cotización:", cotizacion);

  if (!cotizacion) {
    return <div>No se encontró la cotización.</div>;
  }

  return (
    <div>
      <ContratacionForm cotizacion={cotizacion} />
    </div>
  );
}
