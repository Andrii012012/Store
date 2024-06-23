import { OverlayScrollbars } from "overlayscrollbars";
import { MutableRefObject, useEffect } from "react";


export default function useScrollbar(root: MutableRefObject<HTMLDivElement | null>, isScroll: boolean = true) {
  let scroll: any = null;
  useEffect(() => {
    if (root && root.current && isScroll) {
      scroll = OverlayScrollbars(root.current, {});
    }
    return () => {
      scroll.destroy();
    }
  }, [root, isScroll]);
}