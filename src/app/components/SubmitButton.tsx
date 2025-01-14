"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Github, Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

interface iAppProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export function SubmitButton({ text, variant }: iAppProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-full" variant={variant}>
          <Loader2 className="size-4 mr-2 animate-spin" /> Please wait...
        </Button>
      ) : (
        <Button type="submit" className="w-full" variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button variant="outline" className="w-full" disabled>
            <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Github />
            Sign in with GitHub
          </Button>
        )}
      </>
    );
  }
  
  export function GoogleAuthButton() {
    const { pending } = useFormStatus();
    return (
      <>
        {pending ? (
          <Button variant="outline" className="w-full" disabled>
            <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <FaGoogle />
            Sign in with Google
          </Button>
        )}
      </>
    );
  }