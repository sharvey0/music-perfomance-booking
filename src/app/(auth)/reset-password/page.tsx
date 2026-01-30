"use client";

import {createClient} from "@/lib/supabase/client";
import * as React from "react";
import {FormCard} from "@/components/FormCard";


export default function ResetPassword() {
    const [form, setForm] = React.useState({email: ""});
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const supabase = createClient();

    const successMessage = "Un courriel a bien été envoyé à l'adresse : " + form.email;

    async function resetPassword(email: string) {
        const { error } = await supabase.auth.resetPasswordForEmail(email);

        if (error) {
            setErrors(prevState => ({ ...prevState, "api": error.code! }));
        } else {
            setIsSuccess(true);
        }
    }

    function validate() {
        const next: Record<string, string> = {};

        if (!form.email.trim()) next.email = "Une adresse courriel est requise.";
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            next.email = "Une adresse courriel valide est requise.";

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSuccess(false);

        if(!validate()) return;

        setIsLoading(true);

        await resetPassword(form.email);

        setIsLoading(false);
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    return (
        <FormCard
            isLoading={isLoading}
            isSuccess={isSuccess}
            successMessage={successMessage}
            errors={errors}
            title="Réinitialiser le mot de passe"
            subtitle="Entrez votre adresse courriel"
        >
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="mb-8">
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

                <button
                    type="submit"
                    className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer disabled:bg-slate-500"
                    disabled={ isLoading }
                >
                    Réinitialiser le mot de passe
                </button>

                <p className="text-center text-sm text-slate-600">
                    Vous avez déjà un compte ?{" "}
                    <a href="/login" className="font-medium text-slate-900 underline underline-offset-4">
                        Se connecter
                    </a>
                </p>
            </form>
        </FormCard>
    );
}