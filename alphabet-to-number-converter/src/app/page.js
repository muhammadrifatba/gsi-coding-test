"use client"
import Image from "next/image";
import TextConverter from "../../components/TextConverter";

export default function Home() {
    return (
        <div className="bg-slate-300 min-h-screen flex items-center justify-center">
                <title>Alphabet to Number Converter</title>
            <main>
                <TextConverter />
            </main>
        </div>
    );
}