// Dữ liệu danh sách sản phẩm mẫu
const products = [
    {
        id: 1,
        name: "Balo Sinh Viên UTC",
        price: 250000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 2,
        name: "Áo Thun Đồng Phục UTC",
        price: 150000,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"
    },
    {
        id: 3,
        name: "Sổ Tay Ghi Chép Cao Cấp",
        price: 45000,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500"
    },
    {
        id: 4,
        name: "Bình Nước Giữ Nhiệt 500ml",
        price: 120000,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"
    }
];

let cartCount = 0;

// Hàm hiển thị danh sách sản phẩm ra DOM
function renderProducts() {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Định dạng tiền tệ VND
        const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price);

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formattedPrice}</div>
                <button class="add-to-cart-btn" onclick="addToCart()">Thêm vào giỏ hàng</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Xử lý sự kiện thêm vào giỏ hàng
function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
    alert("Đã thêm sản phẩm vào giỏ hàng!");
}

// Chạy hàm render khi trang web tải xong
document.addEventListener("DOMContentLoaded", renderProducts);
