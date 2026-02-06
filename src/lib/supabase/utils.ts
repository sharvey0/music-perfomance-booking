import {SupabaseErrorMessages} from "@/enums/supabase/SupabaseErrorMessages";
import {DemoAudioNames} from "@/enums/supabase/DemoAudioNames";
import { DemoAudioCategory } from "@/enums/supabase/DemoAudioCategory";

export function getSupabaseErrorMessage(errorCode: string) : string {
    if (errorCode in SupabaseErrorMessages) {
        return SupabaseErrorMessages[errorCode as keyof typeof SupabaseErrorMessages];
    }

    return SupabaseErrorMessages.default + " (" + errorCode + ")";
}

export function getDemoAudioFileName(filePath: string) : string {
    if (filePath in DemoAudioNames) {
        return DemoAudioNames[filePath as keyof typeof DemoAudioNames];
    }

    return filePath.replace('.opus', '');
}

export function getDemoImgFileName(filePath: string): string {
    const imgPath = "/img/"
    const imageMap: Record<string, string> = {
        "Noël": "noel.jpg",
        "Jazz": "jazz.jpg",
        "Pop": "pop.jpg"
    };

    for (const keyword in imageMap) {
        if (filePath.includes(keyword)) {
            return imgPath + imageMap[keyword];
        }
    }

    return imgPath + "jeux_video.jpg";
}

export function getDemoCategory(filePath: string): DemoAudioCategory {
    const imageMap: Record<string, DemoAudioCategory> = {
        "Noël": DemoAudioCategory.noel,
        "Jazz": DemoAudioCategory.jazz,
        "Pop": DemoAudioCategory.pop
    };

    for (const keyword in imageMap) {
        if (filePath.includes(keyword)) {
            return imageMap[keyword];
        }
    }

    return DemoAudioCategory.jeux_video
}