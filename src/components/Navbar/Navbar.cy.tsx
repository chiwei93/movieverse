import React from "react";
import Navbar from "./Navbar";

describe(
  "<Navbar /> in mobile viewport",
  { viewportWidth: 375, viewportHeight: 600 },
  () => {
    it("should show logo, search icon and hamburger menu", () => {
      cy.mount(<Navbar />);
      cy.get("[data-cy=navbarLogo]").should("be.visible");
      cy.get("[data-cy=searchIcon]").should("be.visible");
      cy.get("[data-cy=hamburgerMenu]").should("be.visible");
    });

    it("should not show navigation links and search input field", () => {
      cy.mount(<Navbar />);
      cy.get('[data-cy="navbarLinks"]').should("not.be.visible");
      cy.get('[data-cy="searchInput"]').should("not.be.visible");
    });
  },
);

describe(
  "<Navbar /> in tablet viewport",
  { viewportWidth: 744, viewportHeight: 900 },
  () => {
    it("should show logo, navigation links and search icon", () => {
      cy.mount(<Navbar />);
      cy.get("[data-cy=navbarLogo]").should("be.visible");
      cy.get("[data-cy=searchIcon]").should("be.visible");
      cy.get('[data-cy="navbarLinks"]').should("be.visible");
    });

    it("should not show hamburger menu and search input field", () => {
      cy.mount(<Navbar />);
      cy.get("[data-cy=hamburgerMenu]").should("not.be.visible");
      cy.get('[data-cy="searchInput"]').should("not.be.visible");
    });
  },
);

describe(
  "<Navbar /> in desktop viewport",
  { viewportWidth: 1280, viewportHeight: 1000 },
  () => {
    it("should show logo, navigation links and search input field", () => {
      cy.mount(<Navbar />);
      cy.get("[data-cy=navbarLogo]").should("be.visible");
      cy.get('[data-cy="navbarLinks"]').should("be.visible");
      cy.get('[data-cy="searchInput"]').should("be.visible");
    });

    it("should not show hamburger menu and search icon", () => {
      cy.mount(<Navbar />);
      cy.get("[data-cy=hamburgerMenu]").should("not.be.visible");
      cy.get("[data-cy=searchIcon]").should("not.be.visible");
    });
  },
);
