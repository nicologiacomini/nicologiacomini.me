'use client';

import { useEffect } from "react";

export default function NameTab({ nameTab }: { nameTab: string }) {
    useEffect(() => {
        document.title = nameTab;
    }, [nameTab]);

    return null;
}
