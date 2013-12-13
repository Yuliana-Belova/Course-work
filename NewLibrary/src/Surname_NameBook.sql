/**
 *
 * @author Admin
 * @name __1
 * 
 */ 
Select SURNAME, NAME, PATRONYMIC
, NAMEBOOK 
From ISSUEBOOKS t
 Inner Join LITERATURE t1 on t.CIPHER_BOOK = t1.CHIPER_ID
 Inner Join READERS t2 on t2.READERS_ID = t.READERSID
 Where t2.SURNAME LIKE :SURMANE ; 