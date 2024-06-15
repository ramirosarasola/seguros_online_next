"use client";
import { contactSchema } from "@/app/schema/form-schema";
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
import { onSubmitAction } from "@/lib/form-submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const ContactForm = () => {
  const [state, formAction] = useFormState(onSubmitAction, {
    message: "",
  });
  const form = useForm<z.output<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      codArea: "",
      phone: "",
      contactHour: "",
      consulta: "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="space-y-4 h-fit"
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(evt);
        }}
      >
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your first name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Your last name.</FormDescription> */}
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
              <FormItem className="flex-1">
                <FormLabel>Hora de Contacto</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>Localidad.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="consulta"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consulta</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              {/* <FormDescription>Horario de contacto.</FormDescription> */}
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
