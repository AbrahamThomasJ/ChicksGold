/**
 * Pagination Class
 * 
 * This class manages the pagination of items in a user interface.
 * It allows dividing a set of items into multiple pages, facilitating
 * their display and navigation.
 */
class Pagination {
    /**
     * Creates a new instance of the Pagination class.
     * 
     * @param {number} totalItems - Total number of items to paginate.
     * @param {number} itemsPerPage - Number of items to show per page.
     * @param {Object} renderer - An object that has a method `renderItems(currentItems)` to render the items.
     * @param {string} paginationButtonsId - The ID of the DOM element where the pagination buttons will be generated.
     */
    constructor(totalItems, itemsPerPage, renderer, paginationButtonsId) {
        this.currentPage = 1;
        this.itemsPerPage = itemsPerPage;
        this.totalPages = Math.ceil(totalItems / itemsPerPage);
        this.renderer = renderer;
        this.paginationButtonsContainer = document.getElementById(paginationButtonsId);

        this.init();
    }

    /**
     * Initializes the pagination.
     * Calls other methods to update pagination buttons,
     * render current page items, and add event listeners.
     */
    init() {
        this.updatePaginationButtons();
        this.updateArrowButtons();
        this.renderCurrentPageItems();
        this.addEventListeners();
    }

    /**
     * Adds event listeners to the navigation buttons ("prev" and "next").
     */
    addEventListeners() {
        document.getElementById('prev').addEventListener('click', () => this.changePage(this.currentPage - 1));
        document.getElementById('next').addEventListener('click', () => this.changePage(this.currentPage + 1));
    }

    /**
     * Changes to a specific page.
     * 
     * @param {number} page - The page number to change to.
     */
    changePage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        this.renderCurrentPageItems();
        this.updatePaginationButtons();
        this.updateArrowButtons();
    }

    /**
     * Renders the items that should be displayed on the current page.
     */
    renderCurrentPageItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const currentItems = items.slice(startIndex, endIndex);
        this.renderer.renderItems(currentItems);
    }

    /**
     * Updates the pagination buttons container.
     * Generates a button for each page and adds it to the container.
     */
    updatePaginationButtons() {
        this.paginationButtonsContainer.innerHTML = '';
        for (let i = 1; i <= this.totalPages; i++) {
            const button = this.createPageButton(i);
            this.paginationButtonsContainer.appendChild(button);
        }
    }

    /**
     * Creates a button for a specific page.
     * 
     * @param {number} pageNumber - The page number for which the button will be created.
     * @returns {HTMLElement} A DOM button element.
     */
    createPageButton(pageNumber) {
        const button = document.createElement('button');
        button.textContent = pageNumber;
        button.classList.add('pagination-button');
        if (pageNumber === this.currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => this.changePage(pageNumber));
        return button;
    }

    /**
     * Enables or disables the navigation buttons based on the current page.
     */
    updateArrowButtons() {
        document.getElementById('prev').disabled = this.currentPage === 1;
        document.getElementById('next').disabled = this.currentPage === this.totalPages;
    }
}





