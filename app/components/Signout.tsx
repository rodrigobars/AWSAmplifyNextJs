import { Button } from "@nextui-org/react";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import React from "react";

export default function Signout() {
    const router = useRouter()
  return (
    <Button onClick={ async () => {
        await signOut();
        router.push('/signup')
    }}>
        Sign out
    </Button>
  )
}