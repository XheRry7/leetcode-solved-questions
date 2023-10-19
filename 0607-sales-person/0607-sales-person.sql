# Write your MySQL query statement below
Select P.name from SalesPerson P
Where P.sales_id not in (
SELECT O.sales_id from Orders O , Company C 
Where O.com_id = C.com_id && C.name = "RED"
);