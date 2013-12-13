/**
 *
 * @author Admin
 * @name __2
 *  
 */ 
Select SURNAME, NAME, PATRONYMIC, DATEISSUE 
From ISSUEBOOKS t1
 Inner Join LITERATURE t on t1.CIPHER_BOOK = t.CHIPER_ID
 Inner Join READERS t2 on t2.READERS_ID = t1.READERSID
 Where t2.SURNAME LIKE :Surname ;