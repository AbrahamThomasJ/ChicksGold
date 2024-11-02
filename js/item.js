/**
 * Item Class
 * Represents an item in the store with properties such as name, image, price, 
 * category, and stock status. This class is used to create item objects with all necessary 
 * details to display them on a landing page for an eCommerce website.
 */
class Item {
    /**
     * Constructor for the Item class.
     * @param {number} id - Unique identifier for the item.
     * @param {string} name - Name of the item.
     * @param {string} image - URL of the item's image.
     * @param {string} categoryIcon - URL of the item's category icon.
     * @param {number} price - Current price of the item.
     * @param {number} oldPrice - Original price of the item before discount.
     * @param {string} description - Brief description of the item.
     * @param {boolean} isOnSale - Indicates if the item is on sale.
     * @param {string} stockStatus - Current availability status of the item.
     */
    constructor(id, name, image, categoryIcon, price, oldPrice, description, isOnSale, stockStatus) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.categoryIcon = categoryIcon;
        this.price = price;
        this.oldPrice = oldPrice;
        this.description = description;
        this.isOnSale = isOnSale;
        this.stockStatus = stockStatus;
    }
}

/**
 * Example Data Array
 * Creates an array of sample items to simulate product data for the eCommerce page.
 * This array contains 30 items generated dynamically using the `Item` class.
 * Each item includes details such as name, image, price, sale status, and stock status.
 */
const items = Array.from({ length: 30 }, (v, i) => new Item(
    i + 1,
    `Dragon Ball Item ${i + 1}`,          // Unique name for each item
    "./src/img/dragon-ball.jpg",          // Placeholder image URL
    "./src/icons/dragon.svg",             // Placeholder category icon URL
    450.55,                               // Current price
    522.50,                               // Old price before discount
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",  // Placeholder description
    i % 2 === 0,                          // If the index is even, the item is on sale
    "In stock"                            // Default stock status
));
