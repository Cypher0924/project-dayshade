"use client";

import { useActionState } from "react";
import { login } from "@/app/(auth)/login/actions";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { LoginState } from "@/lib/validation/auth";

const initialState: LoginState = {
  errors: {},
  error: undefined,
};

const labelClass =
  "font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-foreground/60";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    initialState
  );

  return (
    <div className={cn("panel overflow-hidden", className)} {...props}>
      <div className="grid md:grid-cols-[1.1fr_1fr]">
        <form className="p-8 md:p-12" action={formAction}>
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-6 shrink-0 bg-pd-green" />
            <span className={labelClass}>Restricted</span>
          </div>

          <h1 className="display-md mt-6">PD Superadmin Login</h1>
          <p className="prose-body mt-3 text-sm">
            Login to your Superadmin account
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email" className={labelClass}>
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                autoComplete="off"
              />
              {state.errors.email && (
                <p className="font-mono text-xs text-destructive">
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password" className={labelClass}>
                Password
              </Label>
              <Input id="password" name="password" type="password" required />
              {state.errors.password && (
                <p className="font-mono text-xs text-destructive">
                  {state.errors.password[0]}
                </p>
              )}
            </div>

            {/* Global error */}
            {state.error && (
              <p className="border border-destructive/40 bg-destructive/10 px-4 py-3 font-mono text-xs text-destructive">
                {state.error}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={pending}
              className="mt-2 w-full font-mono text-xs uppercase tracking-[0.16em]"
            >
              {pending ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

        <div className="relative hidden bg-pd-green md:block">
          <Image
            src="/assets/logo_blk.png"
            alt=""
            fill
            priority
            className="object-contain p-14"
          />
        </div>
      </div>
    </div>
  );
}
