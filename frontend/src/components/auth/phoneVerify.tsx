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
import { Button } from "@/components/ui/button";

import { PhoneVerifySchema } from "@/types/formSchema";
import { useLocation } from "react-router";
import { usePhoneVerifyMutation } from "@/hooks";

export const PhoneVerify: React.FC = () => {
  const location = useLocation();
  const { phone } = location.state || {};
  const handleSuccess = () => {
    console.log("Match")
  }

  const handleError = (data: Error) => {
    const errorMessage = data.message;
    console.log("Error:", errorMessage)
  }

  const mutationVerify = usePhoneVerifyMutation(handleError, handleSuccess)

  const form = useForm<z.infer<typeof PhoneVerifySchema>>({
    resolver: zodResolver(PhoneVerifySchema),
    defaultValues: {
      code: undefined,
    },
  });
  const onSubmit = (data: z.infer<typeof PhoneVerifySchema>) => {
    // e.preventDefault();
    mutationVerify.mutate({ phoneNumber: phone, accessCode: data.code })
  };
  return (
    <Card className="w-full max-w-sm mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center text-3xl">
          Phone verification
        </CardTitle>
        <CardDescription className="text-center">
          Please enter your code that send to your phone
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your code"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full my-2.5">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        Code not receive?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Send again
        </a>
      </CardFooter>
    </Card>
  );
};
