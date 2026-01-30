"use client";

import { FormCard } from "@/components/FormCard";

import * as React from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export default function LoginPage() {
    const [form, setForm] = React.useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();

    function toResetPassword() {
        router.push("/reset-password");
    }

    function validate() {
        const next: Record<string, string> = {};

        if (!form.email.trim()) next.email = "Une adresse courriel est requise.";
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            next.email = "Une adresse courriel valide est requise.";
        if (!form.password) next.password = "Un mot de passe est requis.";

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if(!validate()) return;

        setIsLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password
        });

        setIsLoading(false);

        if (!error) {
            router.push("/dashboard/admin");
        } else {
            setErrors(prevState => ({ ...prevState, "api": error.code! }));
        }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    return (
        <FormCard
            isLoading={isLoading}
            errors={errors}
            title="Se connecter"
            subtitle="Connectez-vous pour commencer."
        >

            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">
                        Adresse courriel
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        value={form.email}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        placeholder="Votre adresse courriel"
                    />
                    {errors.email ? (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    ) : null}
                </div>

                <div className="mb-7">
                    <label htmlFor="password" className="text-sm font-medium text-slate-900">
                        Mot de passe
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        value={form.password}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        placeholder="••••••••"
                    />

                    <p className="text-xs text-slate-600 mt-1 cursor-pointer">
                        <a onClick={toResetPassword} className="font-medium text-slate-900 underline underline-offset-4">
                            Réinitialiser le mot de passe
                        </a>
                    </p>

                    {errors.password ? (
                        <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer disabled:bg-slate-500"
                >
                    Se connecter
                </button>

                <p className="text-center text-sm text-slate-600">
                    Vous n&#39;avez pas de compte ?{" "}
                    <a href="/register" className="font-medium text-slate-900 underline underline-offset-4">
                        S&#39;inscrire
                    </a>
                </p>
            </form>
        </FormCard>
    )
}