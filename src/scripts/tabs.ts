/**
 * Accessible tabs for any `[data-tabs]` block: `[data-tab]` buttons and
 * `[data-panel]` panels in the same order. `data-autoplay="<ms>"` advances on
 * its own while the block is on screen, until someone picks a tab.
 */
export function initTabs() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll<HTMLElement>("[data-tabs]").forEach((root) => {
    if (root.dataset.tabsReady) return;
    root.dataset.tabsReady = "true";

    const tabs = [...root.querySelectorAll<HTMLButtonElement>("[data-tab]")];
    const panels = [...root.querySelectorAll<HTMLElement>("[data-panel]")];
    const delay = Number(root.dataset.autoplay ?? 0);
    let index = Math.max(
      0,
      tabs.findIndex((tab) => tab.getAttribute("aria-selected") === "true"),
    );
    let timer = 0;
    let auto = delay > 0 && !reduce;
    let visible = false;
    let paused = false;

    const select = (next: number, focus = false) => {
      index = (next + tabs.length) % tabs.length;
      tabs.forEach((tab, i) => {
        const on = i === index;
        tab.setAttribute("aria-selected", String(on));
        tab.tabIndex = on ? 0 : -1;
        if (on && focus) tab.focus();
      });
      panels.forEach((panel, i) => {
        const on = i === index;
        panel.toggleAttribute("data-active", on);
        panel.toggleAttribute("inert", !on);
      });
      schedule();
    };

    const schedule = () => {
      window.clearTimeout(timer);
      root.toggleAttribute("data-playing", auto && visible && !paused);
      if (!auto || !visible || paused) return;
      root.style.setProperty("--tab-duration", `${delay}ms`);
      timer = window.setTimeout(() => select(index + 1), delay);
    };

    const stop = () => {
      auto = false;
      schedule();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        stop();
        select(i);
      });
      tab.addEventListener("keydown", (event) => {
        const keys: Record<string, number> = {
          ArrowRight: 1,
          ArrowDown: 1,
          ArrowLeft: -1,
          ArrowUp: -1,
        };
        if (event.key in keys) {
          event.preventDefault();
          stop();
          select(index + keys[event.key], true);
        } else if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          stop();
          select(event.key === "Home" ? 0 : tabs.length - 1, true);
        }
      });
    });

    root.addEventListener("pointerenter", () => {
      paused = true;
      schedule();
    });
    root.addEventListener("pointerleave", () => {
      paused = false;
      schedule();
    });

    new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      },
      { threshold: 0.35 },
    ).observe(root);

    select(index);
  });
}
