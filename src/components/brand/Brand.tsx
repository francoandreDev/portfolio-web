import { component$ } from '@builder.io/qwik';

import brandStyles from "../../modules/brand.module.css"

const nameBrand: string = "franco.dev"
import { Letter } from './exports.ts';

export default component$(({ id }: { id: unknown }) => {
    return (
        <span class={`${brandStyles.inline} ${brandStyles.selection}`}>
            {nameBrand.split("").map((letter: string, index: number) => {
                const timeAppear = index / 3
                const keyLetter = "" + id + index + letter
                return (<Letter letter={letter} sTime={timeAppear} key={keyLetter} />);
            })}
        </span>
    );
});