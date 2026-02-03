'use client';

import { useEffect, useState } from "react";
import {createClient} from "@/lib/supabase/client";
import { Header } from "@/components/Header";

type FileObject = {
    name: string;
    url: string;
};

export default function Demo() {
    const [files, setFiles] = useState<FileObject[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadAllAudioFiles() {
            const supabase = createClient();
            const { data: folders, error: folderError } = await supabase
                .storage
                .from('demo-bucket')
                .list(''); 

            if (folderError) {
                console.error('Folder error:', folderError);
                return;
            }

            const allFiles = await Promise.all(folders.map(async (folder) => {
                const { data, error } = await supabase
                    .storage
                    .from('demo-bucket')
                    .list(folder.name + '/audio'); 

                if (error) {
                    console.error(`Error fetching files from ${folder.name}:`, error);
                    return [];
                }
                return data.map(file => ({
                    ...file,
                    url: supabase.storage.from('demo-bucket').getPublicUrl(folder.name + '/audio/' + file.name).data.publicUrl
                }));
            }));

         
            const flattenedFiles = allFiles.flat();
            setFiles(flattenedFiles as FileObject[]);
            setLoading(false); 
        }

        loadAllAudioFiles();
    }, [])

    return (
        <main className="relative min-h-screen w-full pt-24 md:pt-28 bg-black text-white selection:bg-red-600/30">
            <Header />
            <div>
                <h1>Démos</h1>
                {loading && <div>Loading...</div>}
                {!loading && files && files.length > 0 && (
                    <ul>
                        {files.map((f: FileObject) => (
                            <li key={f.name}>{f.name} <audio controls src={f.url} /></li>
                        ))}
                    </ul>
                )}
                {!loading && files && files.length === 0 && <div>No files found</div>}
            </div>
        </main>
    )
}