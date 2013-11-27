/**
 *
 * @author Admin
 * @name __5
 * @manual 
 */ 
Select SURNAME,NAME,PATRONYMIC,DATEISSUE
From __2 q1
Where DATE_SUB (CURDATE(), INTERVAL 1 MONTH)