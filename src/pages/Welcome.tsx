import { component$ } from '@builder.io/qwik';
import { Image } from '@/components/image/exports.ts';
import type {PublicPath} from "@/types/exports.ts"

export default component$(() => {

    const imagePath: PublicPath = "assets/image.webp"

    return (
        <>
            <Image imageURL={imagePath} shape='circle'/>
        </>
    );
});