/**
 * ItemRenderer Class
 * This class is responsible for rendering a list of items as product cards within a specified container on the page.
 * It dynamically creates the HTML structure for each item, including elements for the product image, name, category, 
 * price, stock status, quantity selection, and action buttons (like "Add" and "Details").
 */
class ItemRenderer {
    /**
     * Constructor for the ItemRenderer class.
     * @param {string} itemsContainerId - The ID of the HTML element where items will be rendered.
     */
    constructor(itemsContainerId) {
        this.itemsContainer = document.getElementById(itemsContainerId);
    }

    /**
     * Renders a list of items within the items container.
     * Clears any existing content in the container, then iterates over each item and generates
     * a product card with the item's details.
     * @param {Array} items - An array of item objects to be rendered. Each item object should contain:
     *   - {string} name - The name of the item.
     *   - {string} image - URL of the item's image.
     *   - {string} description - A brief description of the item.
     *   - {string} categoryIcon - URL of the item's category icon.
     *   - {number} price - The current price of the item.
     *   - {number} [oldPrice] - The original price of the item, if applicable.
     *   - {string} stockStatus - Availability status of the item.
     *   - {boolean} isOnSale - Flag indicating whether the item is on sale.
     */
    renderItems(items) {
        // Clear existing content in the items container
        this.itemsContainer.innerHTML = '';

        // Iterate over each item and create a product card
        items.forEach(item => {
            // Create the product card container
            const itemCard = document.createElement('div');
            itemCard.classList.add('product-card');

            // Generate HTML content for the product card
            itemCard.innerHTML = `
                <div class="product-header">
                    <div class="stock-info">
                        ${item.isOnSale ? `<div class="on-sale-advice-container"><span><div class="dot"></div>ON SALE</span></div>` : ''}
                        <span class="stock-status">${item.stockStatus}</span>
                    </div>
                    <div class="quantity-selection">
                        <div class="number-arrows"><div class="arrow down">▼</div></div>
                        <div class="quantity-input"><input type="text" value="1" min="0" max="999999"></div>
                        <div class="number-arrows"><div class="arrow up">▲</div></div>
                    </div>
                </div>
                <div class="product-image">
                    <figure class="figure-product-image">
                        <img src="${item.image}" alt="Product Image">
                    </figure>
                </div>
                <div class="product-info">
                    <div class="product-name-category">
                        <div class="product-name">${item.name}</div>
                        <div class="category-icon">
                            <img src="${item.categoryIcon}" alt="Category Icon">
                        </div>
                    </div>
                    <div class="price-container">
                        <div class="product-price">$${item.price.toFixed(2)}</div>
                        ${item.oldPrice ? `<div class="product-price old-price">$${item.oldPrice.toFixed(2)}</div>` : ''}
                    </div>
                </div>
                <div class="product-description">
                    <span class="description">${item.description}</span>
                </div>
                <div class="product-actions">
                    <div class="details-container">
                        <a href="#" class="button details-button">Details</a>
                    </div>
                    <button class="button add-button">
                        <span>Add</span>
                        <div class="cart-icon-container">
                            <img src="./src/icons/cart.svg" alt="cart">
                        </div>
                    </button>
                </div>
            `;

            // Append the product card to the items container
            this.itemsContainer.appendChild(itemCard);
        });
    }
}

