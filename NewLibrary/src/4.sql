/**
 *
 * @author Admin
 * @name __2
 * @manual 
 */ 
Select SURNAME, NAME, PATRONYMIC,NAMEBOOK,DATEISSUE 
From Issue_Books_1 q1
 Inner Join simple_1 q on q.READERS_ID = q1.READERSID
 Inner Join Literature_1 q2 on q1.CIPHER_BOOK = q2.CHIPER_ID