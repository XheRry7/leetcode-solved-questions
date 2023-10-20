# Write your MySQL query statement below
Select customer_number from Orders
Group By customer_number
ORDER BY Count(*) DESC
LIMIT 1; 

