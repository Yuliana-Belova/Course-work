/**
 *
 * @author Admin
 * @name __1
 * @manual 
 */ 
Select SURNAME, NAME, PATRONYMIC
, NAMEBOOK 
From simple_1 q1
 Inner Join Issue_Books_1 q on q1.READERS_ID = q.READERSID
 Inner Join Literature_1 q2 on q.CIPHER_BOOK = q2.CHIPER_ID