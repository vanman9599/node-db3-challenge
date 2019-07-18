# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.(77 records????)

select p.productName , c.CategoryName
from products p
join categories c on p.CategoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.orderID, s.ShipperName
from orders as o join Shippers as s on 
o.ShipperID = s.ShipperID
where o.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, od.quantity
from Products as p, OrderDetails od, orders o
where o.OrderID =  od.OrderID
and od.productID = p.productID
and o.orderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderID as 'Order Id', c.CustomerName as 'Customer Name', e.LastName as Employee
FROM orders o, customers c, employees e
WHERE o.CustomerID = c.CustomerID
AND o.employeeId = e.employeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select c.categoryName, count(CategoryName) as Count
from categories c
join products p on c.CategoryID = p.categoryID
group by CategoryName

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

select o.orderID, od.quantity as ItemCount
from orders o
join orderDetails od on o.orderID = od.orderID
group by o.OrderID