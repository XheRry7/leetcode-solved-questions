# Write your MySQL query statement below
#Select name from Employee as Employee
#where Employee.managerId  != Null && Employee.salary > ();

Select EMP.name AS Employee from Employee EMP, Employee MGR
WHERE EMP.managerId = MGR.id && EMP.salary > MGR.salary; 