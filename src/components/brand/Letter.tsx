import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import brandStyles from "../../modules/brand.module.css"

const colorsList: string[] = ["red", "purple", "green", "gold", "blue"]
const seconds: number = 1000

export default component$(({ letter, sTime }: { letter: string, sTime: number }) => {
    const indexColors = useSignal<number>(0);
    const classColor = useSignal<string>(brandStyles["letter-red"])
    const classVisible = useSignal<string>(brandStyles["hidden"])
    const totalReps: number = 4

    const beVisible = $(() => {
        classVisible.value = brandStyles["show"]
    });

    const changeColor = $(() => {
        indexColors.value = (indexColors.value + 1) % colorsList.length
        classColor.value = brandStyles[`letter-${colorsList[indexColors.value]}`]
    });

    const setFinalColor = $(() => {
        indexColors.value = 0
        classColor.value = brandStyles["letter-final"]
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        setTimeout(() => {
            beVisible()
            let rep = 0
            const interval = setInterval(() => {
                changeColor()
                rep++
                if (rep > totalReps) { clearInterval(interval); setFinalColor() }
            }, 2 * seconds)
        }, sTime * seconds)
    });


    return (
        <div
            class={`${brandStyles.letter} ${brandStyles["brand-font"]} ${classVisible.value} ${classColor.value}`}
        >
            {letter}
        </div>
    );
});