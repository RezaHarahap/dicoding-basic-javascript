import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 }
]);

addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 }
]);

console.log(orders);
updateOrderStatus(orders[0].id, 'Diproses');
updateOrderStatus(orders[1].id, 'Selesai');
console.log(orders);
console.log(calculateTotalRevenue());
deleteOrder(orders[0].id);
console.log(orders);
