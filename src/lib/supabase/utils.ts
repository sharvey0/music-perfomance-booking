import {SupabaseErrorMessages} from "@/enums/supabase/SupabaseErrorMessages";

export function getSupabaseErrorMessage(errorCode: string): string {
    if (errorCode in SupabaseErrorMessages) {
        return SupabaseErrorMessages[errorCode as keyof typeof SupabaseErrorMessages];
    }

    return SupabaseErrorMessages.default + " (" + errorCode + ")";
}