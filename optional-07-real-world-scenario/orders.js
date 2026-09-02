function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

const orders = [];

function addOrder(customerName, items) {
  const id = generateUniqueId();
  const order = {
    id,
    customerName,
    items,
    totalPrice: items.reduce((totalPrice, item) => totalPrice + item.price, 0),
    status: "Menunggu",
  };
  orders.push(order);
}

function updateOrderStatus(orderId, status) {
  const index = orders.findIndex((order) => order.id === orderId);
  if (index != -1) orders[index].status = status;
}

function calculateTotalRevenue() {
  return orders.reduce((totalRevenue, order) => {
    return order.status == "Selesai" ? totalRevenue + order.totalPrice : totalRevenue;
  }, 0);
}

function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);
  if (index != -1) orders.splice(index, 1);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
