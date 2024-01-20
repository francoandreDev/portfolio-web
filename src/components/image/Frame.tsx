import { component$ } from '@builder.io/qwik';
import type { PublicPath, ShapeStyle } from './exports.ts';

import imageStyles from '@/modules/image.module.css'

export default component$(({ imageURL, shape }: { imageURL: PublicPath, shape: ShapeStyle }) => {
    return (
        <div class={`${imageStyles.frame} ${imageStyles[shape]} ${imageStyles.parallax}`}>
            <img src={`${imageURL}`} alt="My own image" width={100} height={100} />
        </div>
    );
});