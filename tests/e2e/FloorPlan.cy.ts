describe('FloorPlan Drag and Drop', () => {
    it('allows a table to be dragged and dropped', () => {
        cy.visit('/');
        cy.get('.table').first().trigger('mousedown', { which: 1 });
        cy.get('body').trigger('mousemove', { clientX: 100, clientY: 100 });
        cy.get('body').trigger('mouseup');
        cy.get('.table').first().should('have.css', 'left', '100px');
    });
});
