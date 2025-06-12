import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { PhoneLoginSchema } from "@/types/formSchema";
import { usePhoneLoginMutation } from "@/hooks";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router";

export const PhoneLogin: React.FC = () => {
  const navigate = useNavigate()
  const handleSuccess = () => {
    navigate("/owner/verify", {
      state: {
        phone: form.getValues("phoneNumber")
      }
    });
  };
  const handleError = (data: Error) => {
    const errorMessage = data.message;
    toast.error(errorMessage);
  };
  const mutationLogin = usePhoneLoginMutation(handleError, handleSuccess);
  const form = useForm<z.infer<typeof PhoneLoginSchema>>({
    resolver: zodResolver(PhoneLoginSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });
  const onSubmit = (data: z.infer<typeof PhoneLoginSchema>) => {
    mutationLogin.mutate(data.phoneNumber);
  };
  return (
    <>
      <Toaster />
      <Card className="w-full max-w-sm mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Sign In</CardTitle>
          <CardDescription className="text-center">
            Please enter your phone to sign in
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="string"
                        placeholder="+1234567890"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full my-2.5">
                Next
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          Don't having account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </CardFooter>
      </Card>
    </>
  );
};
