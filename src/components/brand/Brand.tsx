import { component$ } from '@builder.io/qwik';

import brandStyles from "../../modules/brand.module.css"

const nameBrand: string = "franco.dev"
import { Letter } from './exports.ts';

export default component$(({ id }: { id: unknown }) => {
    return (
        <span class={`${brandStyles.inline}`}>
            {nameBrand.split("").map((letter, index) => <Letter letter={letter} key={"" + id + index + letter} />)}
        </span>
    );
});