'use client';

import React from "react";
import {createClient} from "@/lib/supabase/client";
import {FormCard} from "@/components/FormCard";

export default function RegisterPage() {
    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function validate() {
        const next: Record<string, string> = {};
        setErrors({});

        if (!form.firstName.trim()) next.firstName = "Un prénom est requis.";
        if (!form.lastName.trim()) next.lastName = "Un nom complet est requis.";
        if (form.firstName.trim().length < 3) next.firstName = "Le prénom doit faire au moins 3 caractères.";
        if (form.lastName.trim().length < 3) next.lastName = "Le nom doit faire au moins 3 caractères.";
        if (!form.email.trim()) next.email = "Une adresse courriel est requise.";
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
            next.email = "Une adresse courriel valide est requise.";
        if (!form.password) next.password = "Un mot de passe est requis.";
        if (form.password && !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(form.password.trim()))
            next.password = "Le mot de passe doit contenir : 8 caractères, 1 majuscule, 1 miniscule, 1 caractère spécial et 1 chiffre";
        if (!form.confirmPassword) next.confirmPassword = "Confirmez votre mot de passe.";
        if (form.password && form.confirmPassword && form.password !== form.confirmPassword)
            next.confirmPassword = "Les mots de passe ne correspondent pas.";

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSuccess(false);

        if (!validate()) return;

        setIsLoading(true);

        const supabase = createClient();

        const { data, error } = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
            options: {
                data: {
                    first_name: form.firstName,
                    last_name: form.lastName
                }
            }
        });

        if (data.user && data.user.identities && data.user.identities.length === 0) {
            setErrors(prevState => ({ ...prevState, "api": "user_already_exists" }));
        } else if (error) {
            setErrors(prevState => ({ ...prevState, "api": error.code! }));
        } else {
            setIsSuccess(true);
        }

        setIsLoading(false);
    }

    return (
        <FormCard
            isLoading={isLoading}
            isSuccess={isSuccess}
            successMessage="Votre compte a bien été créé! Un courriel de validation vous a été envoyé."
            errors={errors}
            title="Créez votre compte"
            subtitle="Inscrivez-vous pour commencer."
        >
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-900">
                        Prénom
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="first-name"
                        value={form.firstName}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        placeholder="Votre prénom"
                    />
                    {errors.firstName ? (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-900">
                        Nom
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="last-name"
                        value={form.lastName}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        placeholder="Votre nom"
                    />
                    {errors.lastName ? (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">
                        Courriel
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        placeholder="joe@entreprise.com"
                    />
                    {errors.email ? (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="password" className="text-sm font-medium text-slate-900">
                        Mot de passe
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        value={form.password}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        placeholder="••••••••"
                    />
                    {errors.password ? (
                        <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    ) : (
                        <p className="mt-1 text-xs text-slate-500">Utilisez au moins 8 caractères.</p>
                    )}
                </div>

                <div className="mb-7">
                    <label
                        htmlFor="confirmPassword"
                        className="text-sm font-medium text-slate-900"
                    >
                        Confirmez le mot de passe
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        value={form.confirmPassword}
                        onChange={onChange}
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                        placeholder="••••••••"
                    />
                    {errors.confirmPassword ? (
                        <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer disabled:bg-slate-500"
                    disabled={ isLoading }
                >
                    Créer un compte
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