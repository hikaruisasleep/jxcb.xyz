import { createEffect, createSignal } from "solid-js";
import styles from "./StarsBackground.module.scss";

function random (min: number, max: number) {
    return min + Math.random() * (max + 1 - min);
}

export default function Background() {
    let [cnv, setCnv] = createSignal({ width, height});
    let [ctx, setCtx] = createSignal({});

    createEffect(() => {
        setCnv((c) => {
            c.width = window.innerWidth;
        })
    })

    return (
        <canvas ref={cnv} class={styles.root}></canvas>
    )
}
