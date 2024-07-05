"use client";
import { houseSchema } from "@/app/schema/form-schema";
import { Button } from "@/components/ui/button.component";
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
import { onSubmitActionHouseQuote } from "@/lib/form-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const HouseFormQuoter = () => {
  const [state, formAction] = useFormState(onSubmitActionHouseQuote, {
    message: "",
  });
  const form = useForm<z.output<typeof houseSchema>>({
    resolver: zodResolver(houseSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      codArea: "",
      phone: "",
      contactHour: "",
      address: "",
      houseType: "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="space-y-4 bg-white p-8 h-fit shadow-lg"
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
            form.reset();
          })(evt);
        }}
      >
        <FormTitle
          title="Seguros para Casas"
          subtitle="Contactate y te asesoramos!"
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your Nombre.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your Apellido.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>Your email address.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="codArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cod. Area</FormLabel>
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
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
            name="contactHour"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hs de Contacto</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Horario de contacto.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Localidad</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Localidad.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="houseType"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Tipo de Casa</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Tipo de casa.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant={"quote_form"}>
          Enviar
        </Button>
      </form>
    </Form>
  );
};
