import React from "react";
import NavigationDropdown from "./NavigationDropdown";

const navbarLinks = [
  { href: "/movies", name: "movies" },
  { href: "/series", name: "series" },
  { href: "/animations", name: "animations" },
];

const navigationDropdownProps = {
  navigationLinks: navbarLinks,
};

const renderTestComponent = () => {
  return (
    <div className="relative">
      <div className="absolute right-0">
        <NavigationDropdown {...navigationDropdownProps} />
      </div>
    </div>
  );
};

describe(
  "<NavigationDropdown />",
  { viewportWidth: 1280, viewportHeight: 1000 },
  () => {
    it("should be able to open a dropdown when hamburger menu is clicked", () => {
      cy.mount(renderTestComponent());
      cy.get("[data-cy=hamburgerMenu]").click();
      cy.get("[data-cy=nav-links-dropdown]").should("be.visible");
    });

    it("should have 3 navigation links in the dropdown", () => {
      cy.mount(renderTestComponent());
      cy.get("[data-cy=hamburgerMenu]").click();
      cy.get("[data-cy=nav-links-dropdown]").get("a").should("have.length", 3);
    });

    it("should 3 navigation links with the correct values in the dropdown", () => {
      cy.mount(renderTestComponent());
      cy.get("[data-cy=hamburgerMenu]").click();
      cy.get("[data-cy=nav-links-dropdown]")
        .get("a")
        .each((row, index) => {
          const link = cy.wrap(row);
          link.should("have.attr", "href", navbarLinks[index].href);
          link.contains(navbarLinks[index].name);
        });
    });
  },
);
