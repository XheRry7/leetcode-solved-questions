#SELECT
#  Score,
#  (SELECT count(distinct Score) FROM Scores WHERE Score >= s.Score) as  'Rank'
#FROM Scores s
#ORDER BY Score desc

SELECT score, dense_rank() OVER(ORDER BY score DESC) as "rank"
FROM Scores