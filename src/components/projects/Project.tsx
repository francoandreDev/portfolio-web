import type { PublicPath, RefT } from '@/types/exports.ts';
import { component$ } from '@builder.io/qwik';
import { Logo } from '../buttons/exports.ts';

export default component$(({ name, imgURL, ref1, ref2 }: { name: string, imgURL: PublicPath, ref1: RefT, ref2: RefT }) => {
    const urlGithub: PublicPath = "assets/logos/github.avif"
    const urlDemo: PublicPath = "assets/logos/demo.avif"

    return (
        <div>
            <h2>{name}</h2>
            <img src={imgURL} alt={`Image of ${name}`} width={100} height={100} />
            <span>
                <Logo name="Github" imageURL={urlGithub} ref={ref1} />
                <Logo name="Code" imageURL={urlDemo} ref={ref2} />
            </span>
        </div>
    );
});