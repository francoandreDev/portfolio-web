import { component$ } from '@builder.io/qwik';

import brandStyles from '~/modules/brand.module.css'

export default component$(({ show, showText, moveX }: { show: boolean, showText: boolean, moveX: number }) => {

    const appearComponentClass: string = brandStyles[show ? "appear" : "disappear"]

    const leftClass: string = brandStyles[moveX ? "move-to-left" : "move-return"]
    const rightClass: string = brandStyles[moveX ? "move-to-right" : "move-return"]
    const appearClass: string = brandStyles[showText ? "appear" : "disappear"]

    return (
        <div class={`${appearComponentClass}`}>
            <span class={`${leftClass} ${brandStyles.move}`}>{"<"}</span>
            <span class={`${appearClass}`}>F</span>
            <span class={`${appearClass}`}>c</span>
            <span class={`${rightClass} ${brandStyles.move}`}>{"/"}</span>
            <span class={`${rightClass} ${brandStyles.move}`}>{'>'}</span>
        </div>
    );
});