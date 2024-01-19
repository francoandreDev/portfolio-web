import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import { Letter } from './exports.ts';

import brandStyles from "~/modules/brand.module.css"

const nameBrand: string = "{franco.dev}"
const delayBy: number = 750

export default component$(({ show }: { show: boolean }) => {
    const delaySignal = useSignal<boolean>(false)
    const component = useComputed$(() => {
        if (show) {
            const delay = (time: number) => new Promise((res) => setTimeout(res, time));
            delay(delayBy).then(() => delaySignal.value = true)
        }
        else { delaySignal.value = false; }
        if (delaySignal.value) {
            return (
                <span class={`${brandStyles.inline} ${brandStyles.selection} ${brandStyles.appear}`} style={{ position: "absolute" }}>
                    {nameBrand.split("").map((letter: string, index: number) => {
                        const timeAppear = index / 3
                        const keyLetter = "" + index + letter
                        return (<Letter letter={letter} sTime={timeAppear} key={keyLetter} />);
                    })}
                </span>
            )
        } else {
            delaySignal.value = false; return (<></>);
        }
    });

    return (component.value);

});