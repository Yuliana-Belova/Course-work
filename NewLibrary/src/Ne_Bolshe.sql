/**
 *
 * @author Admin
 * @name __4
 * 
 */ 
Select SURNAME, NAME, PATRONYMIC
, NUBERCOPIES 
From Literature_1 q1
, simple_1 q
 Inner Join Issue_Books_1 q2 on q.READERS_ID = q2.READERSID
 and q1.CHIPER_ID = q2.CIPHER_BOOK
Where NUBERCOPIES<2

