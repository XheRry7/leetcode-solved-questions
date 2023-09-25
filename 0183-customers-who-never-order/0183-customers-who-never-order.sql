# Write your MySQL query statement below

# description: So first I am selecting the customer name and than checking id of the customer that is not in all the ids of the orders
SELECT name as Customers
from Customers
where id not in (
    select customerId
    from Orders
);