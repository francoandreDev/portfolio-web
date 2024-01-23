import { Project } from '@/components/exports.ts';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <>
            <Project name='Project1' imgURL={"assets/images/fondo.jpg"} ref1='https://google.com' ref2='https://youtube.com' />
        </>
    );
});