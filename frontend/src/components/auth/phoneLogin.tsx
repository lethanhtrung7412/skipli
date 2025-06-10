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

export const PhoneLogin: React.FC = () => {
    return (
        <Card className="w-full max-w-sm mx-auto mt-10">
            <CardHeader>
                <CardTitle className="text-center text-3xl">Sign In</CardTitle>
                <CardDescription className="text-center">
                    Please enter your phone to sign in
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+1234567890"
                            required
                        />
                        </div>
                    </div>
                </form>
                <Button type="submit" className="w-full my-2.5">
                    Next
                </Button>
            </CardContent>
            <CardFooter>
                Don't having account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
            </CardFooter>
        </Card>
    )
}
