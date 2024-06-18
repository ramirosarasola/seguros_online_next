"use client";

import { CarIcon } from "@/app/(client)/components/icons/car.icon";
import { PaymentIcon } from "@/app/(client)/components/icons/payment.icon";
import { PersonIcon } from "@/app/(client)/components/icons/person.icon";
import { contratacionSchema } from "@/app/schema/form-schema";
import { Button } from "@/components/ui/button.component";
import { DatePicker } from "@/components/ui/date-picker.component";
import { FormTitle } from "@/components/ui/form-title.component";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.component";
import { Input } from "@/components/ui/input.component";
import { Option, Select } from "@/components/ui/select.component";
import { onSubmitAction } from "@/lib/form-submit";
import { Cotizacion } from "@/types/cotizacion.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ContratacionFormProps = {
  cotizacion: Cotizacion;
};

export const ContratacionForm = ({ cotizacion }: ContratacionFormProps) => {
  const [state, formAction] = useFormState(onSubmitAction, {
    message: "",
  });
  const form = useForm<z.output<typeof contratacionSchema>>({
    resolver: zodResolver(contratacionSchema),
    defaultValues: {
      id: cotizacion.id.toString(),
      tipo_dni: "dni",
      dni: "",
      direccion: "",
      altura: "",
      piso: "",
      depto: "",
      telefono_alt: "",
      patente: "",
      numero_motor: "",
      numero_chasis: "",
      fecha_vigencia: new Date().toISOString().split("T")[0],
      metodo_pago: "tarjeta_credito",
      numero_tarjeta: "",
      vencimiento_tarjeta: "",
      titular_tarjeta: "",
      cbu: "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(formRef.current!);
      formData.set("id", cotizacion.id.toString());
      const jsonPayload = JSON.stringify(
        Object.fromEntries(formData.entries())
      );

      const response = await fetch("http://localhost:8081/api/contratar", {
        method: "POST",
        body: jsonPayload,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      // Aquí puedes manejar la respuesta del servidor según tus necesidades
    } catch (error) {
      console.error("Error:", error);
      // Aquí puedes manejar los errores de la petición
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="space-y-4 bg-white p-8 h-fit shadow-lg"
        action={formAction}
        onSubmit={(event) => {
          // handleSubmit(event);
          event.preventDefault();
          form.handleSubmit(async (data) => {
            // console.log("Form data:", data); // Ver payload en consola
            const result = formAction(new FormData(formRef.current!));
            if (data) {
              handleSubmit(event);
            }
          })(event);
        }}
      >
        <FormTitle
          title="Contrata tu seguro de manera online y segura"
          subtitle=""
        />
        <div className="h-[60px] w-full bg-primary gap-4 flex items-center justify-start p-4">
          <PersonIcon />
          <h6 className="text-white">{`${cotizacion.nombre}, complete sus datos`}</h6>
        </div>
        <FormField
          // control={form.control}
          name="id"
          render={() => (
            <FormItem>
              {/* <div className="w-full"> */}
              <div>ID de su tramite</div>
              {/* <FormControl> */}
              <Input
                className="ring-1 ring-tertiary cursor-not-allowed"
                readOnly
                value={cotizacion.id.toString()}
                placeholder=""
              />
              {/* </FormControl> */}
              {/* <FormDescription>Your first name.</FormDescription> */}
              <FormMessage />
            </FormItem>
            // </div>
          )}
        />

        <div className="mb-4 flex flex-col md:flex-row gap-2">
          <FormField
            control={form.control}
            name="tipo_dni"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Tipo DNI</FormLabel>
                <FormControl>
                  {/* <Input placeholder="" {...field} /> */}
                  <Select {...field}>
                    <Option value="dni">DNI</Option>
                    <Option value="pasaporte">Pasaporte</Option>
                  </Select>
                </FormControl>
                {/* <FormDescription>Your first name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dni"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>DNI</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your last name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4 flex flex-col md:flex-row gap-2 justify-between">
          <FormField
            control={form.control}
            name="direccion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your email address.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="altura"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Altura</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your code area number.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="piso"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Piso</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your phone.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="depto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Depto.</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Horario de contacto.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="telefono_alt"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Telefono Alternativo (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>Localidad.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="h-[60px] w-full bg-primary gap-4  flex items-center justify-start p-4">
          <CarIcon />
          <h6 className="text-white">{`Datos de tu  ${cotizacion.marca} ${cotizacion.modelo}`}</h6>
        </div>
        <div className="mb-4 flex flex-col md:flex-row gap-2">
          <FormField
            control={form.control}
            name="patente"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Patente</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero_motor"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Numero de Motor</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero_chasis"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Numero de Chasis</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="fecha_vigencia"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Fecha de Vigencia de la Poliza</FormLabel>
              <FormControl>
                {/* <Input placeholder="" {...field} /> */}
                <DatePicker {...field} />
              </FormControl>
              {/* <FormDescription>Localidad.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="h-[60px] w-full bg-primary gap-4  flex items-center justify-start p-4">
          <PaymentIcon />
          <h6 className="text-white">{`Metodo de Pago`}</h6>
        </div>
        <div className="flex mb-4 flex-col gap-2">
          <FormField
            control={form.control}
            name="metodo_pago"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Metodo de Pago</FormLabel>
                <FormControl>
                  {/* <Input placeholder="" {...field} /> */}
                  <Select {...field}>
                    <Option value="tarjeta_credito">Tarjeta de Credito</Option>
                    <Option value="tarjeta_debito">
                      Debito Cuenta Bancaria{" "}
                    </Option>
                  </Select>
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero_tarjeta"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Numero de Plastico</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vencimiento_tarjeta"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Vencimiento de la Tarjeta</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="titular_tarjeta"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Titular de la Tarjeta</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="cbu"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>CBU</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>Tipo de casa.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"quote_form"}>
          Enviar
        </Button>
      </form>
    </Form>
  );
};
