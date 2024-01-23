import { $, component$ } from '@builder.io/qwik';
import type { PublicPath, RefT } from '@/types/exports.ts';

export default component$(({ name, ref, imageURL }: { name: string, ref: RefT, imageURL: PublicPath }) => {

    const goToRef = $((ref: RefT) => { location.href = ref });

    return (
        <button onClick$={() => goToRef(ref)}>
            <img src={imageURL} alt={"Image of " + name} width={100} height={100} />
        </button>
    );
});