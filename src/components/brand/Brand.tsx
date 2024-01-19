import { $, component$, useSignal } from '@builder.io/qwik';
import { InnerBrand, OuterBrand } from './exports.ts';

import brandStyle from "~/modules/brand.module.css"

const minMoveX: number = 0
const maxMoveX: number = 100

export default component$(() => {
    const showInnerBrand = useSignal<boolean>(false);
    const showText = useSignal<boolean>(true);

    const moveX = useSignal<number>(minMoveX);

    const setMoveX = $(() => {
        moveX.value = moveX.value === minMoveX ? maxMoveX : minMoveX

        if (moveX.value === maxMoveX) {
            setTimeout(() => { moveX.value = minMoveX }, 1500)
        }
    });

    const toggleShow = $(() => {
        setMoveX()
        setTimeout(() => {
            showInnerBrand.value = !showInnerBrand.value
        }, 1000)
        showText.value = !showText.value
    });

    return (
        <div
            onClick$={() => toggleShow()}
            class={`${brandStyle["col-center"]} ${brandStyle.active}`}
        >
            <OuterBrand show={!showInnerBrand.value} showText={showText.value} moveX={moveX.value} />
            <InnerBrand show={showInnerBrand.value} />
        </div>
    );
});