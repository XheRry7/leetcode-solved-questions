# Write your MySQL query statement below
select * from Cinema 
Where description != 'boring' 
And id % 2 != 0 
order by rating desc