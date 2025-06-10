import React from "react";
import {
  Card,
//   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";

export const PhoneVerify: React.FC = () => {
    return (
        <Card className="w-full max-w-sm mx-auto mt-10">
            <CardHeader>
                <CardTitle className="text-center text-3xl">Phone verification</CardTitle>
                <CardDescription className="text-center">
                    Please enter your code that send to your phone
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                        <Input
                            id="number"
                            type="number"
                            placeholder="Enter Your code"
                            required
                        />
                        </div>
                    </div>
                </form>
                <Button type="submit" className="w-full my-2.5">
                    Submit
                </Button>
            </CardContent>
            <CardFooter>
                Code not receive? <a href="/register" className="text-blue-500 hover:underline">Send again</a>
            </CardFooter>
        </Card>
    )
}
