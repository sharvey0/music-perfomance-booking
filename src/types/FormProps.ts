import {ReactNode} from "react";

export type FormProps = {
    children: ReactNode,
    isLoading: boolean,
    isSuccess?: boolean,
    successMessage?: string,
    errors: Record<string, string>,
    title: string,
    subtitle: string
};