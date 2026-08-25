import { createFileRoute } from "@tanstack/react-router";

const title = "Tanuja Roy — B.Sc. CS Student & Aspiring Website Designer";
const description =
  "Portfolio of Tanuja Roy, a 2nd year B.Sc. Computer Science student and aspiring website designer. Education, skills and the Recipe Companion project.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The portfolio is a standalone vanilla HTML/CSS/JS document: public/portfolio.html
function Index() {
  return (
    <iframe
      src="/portfolio.html"
      title="Tanuja Roy — Portfolio"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
