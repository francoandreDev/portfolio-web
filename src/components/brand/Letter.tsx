import { component$ } from '@builder.io/qwik';

import brandStyles from "../../modules/brand.module.css"

export default component$(({ letter }: { letter: string }) => {
    return (
        <div class={`${brandStyles.letter} ${brandStyles["brand-font"]}`}>{letter}</div>
    );
});