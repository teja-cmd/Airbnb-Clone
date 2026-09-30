import { useEffect, useState } from "react";

/**
 * Tracks which section is closest to the sticky-nav offset line so the active tab
 * matches the section the user is actually reading.
 */
export function useActiveSection(sectionIds: string[], offset = 150) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const updateActiveSection = () => {
      const viewportTop = window.scrollY + offset;
      let closestId = elements[0].id;
      let smallestDistance = Number.POSITIVE_INFINITY;

      for (const element of elements) {
        const elementTop = element.offsetTop;
        const distance = Math.abs(elementTop - viewportTop);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestId = element.id;
        }
      }

      setActiveId(closestId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds, offset]);

  return activeId;
}
