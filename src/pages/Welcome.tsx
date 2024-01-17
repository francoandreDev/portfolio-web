import { component$ } from '@builder.io/qwik';
import { Brand } from '~/components/brand/exports.ts';

export default component$(() => {
    return (
        <>
            <div>Welcome</div>
            <h2>Proove my new Brand</h2>
            <Brand id="Example 1" />
        </>
    );
});