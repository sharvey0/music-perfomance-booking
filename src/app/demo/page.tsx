'use client';

import {useEffect, useState} from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { DemoObject } from "@/types/DemoObject";
import {loadAllDemoAudioFiles} from "@/lib/supabase/bucket";

export default function Demo() {
    const [files, setFiles] = useState<DemoObject[] | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let cancelled = false;

        (async () => {
            setLoading(true);
            setFiles(await loadAllDemoAudioFiles());
            if (!cancelled) setLoading(false);
        })();

        return () => {
            cancelled = true;
        };

    }, []);

    return (
        <main className="grid justify-items-center min-h-screen w-full pt-24 md:pt-28 bg-black text-white selection:bg-red-600/30">
            <Header />
                <div className="w-full max-w-4xl px-4 mt-30">
                    {
                        loading ?
                        <div className="absolute flex items-center justify-center inset-0 z-50">
                            <div className="loader"></div>
                        </div> : null
                    }
                    {
                        !loading && files && files.length > 0 && (
                            <ul className="flex flex-col gap-6">
                                <h1 className="text-5xl">Jeux Vidéo</h1>
                                <h1 className="text-5xl">Noël</h1>
                                <h1 className="text-5xl">Jazz</h1>
                                <h1 className="text-5xl">Pop</h1>
                                {files.map((file: DemoObject) => (
                                    <li key={file.name}>
                                        <div className="flex items-center bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                            <div className="relative w-1/2 h-128 bg-gray-800 flex-shrink-0">
                                                <Image 
                                                    src={"/img/" + file.category + ".jpg"}
                                                    alt={file.name} 
                                                    fill
                                                    priority
                                                    sizes="50vw"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <div className="w-1/2 p-6 flex flex-col justify-center gap-4">
                                                <h3 className="text-xl font-semibold">{file.name}</h3>
                                                <audio controls className="w-full" src={file.url} />
                                                <p>{file.category}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                    {
                        !loading && files && files.length === 0 && 
                        <div className="absolute flex items-center justify-center inset-0 z-50">
                            <div>Aucun fichier trouvé</div>
                        </div>
                    }
                </div>
        </main>
    )
} 