/**
 *
 * @author Admin
 * @name DATE
 * @manual 
 */ 
Select SURNAME, NAME,PATRONYMIC, DATEBIRTH
From READERS t1
 Where t1.DATEBIRTH > :Param1