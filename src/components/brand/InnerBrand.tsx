import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Letter } from './exports.ts';

import brandStyles from "~/modules/brand.module.css"

const nameBrand: string = "{franco.dev}"
const delayBy: number = 750

export default component$(({ show }: { show: boolean }) => {
    const delaySignal = useSignal<boolean>(false)

    useTask$(() => {
        if (show) {
            const delay = (time: number) => new Promise((res) => setTimeout(res, time));
            delay(delayBy).then(() => delaySignal.value = true)
        }
    })

    const componentRender = (
        <span class={`${brandStyles.inline} ${brandStyles.selection} ${brandStyles.appear}`} style={{ position: "absolute" }}>
            {nameBrand.split("").map((letter: string, index: number) => {
                const timeAppear = index / 3
                const keyLetter = "" + index + letter
                return (<Letter letter={letter} sTime={timeAppear} key={keyLetter} />);
            })}
        </span>
    )

    const defaultRender = (<></>);

    return (delaySignal.value) ? componentRender : defaultRender

});