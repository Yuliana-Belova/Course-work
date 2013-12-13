/**
 * 
 * @author Admin
 * @name SurnameNameBook
 */
 var self = this;
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.Surname= "%" + self.textField.text + "%";
        self.Surname_Namebook.requery();
}//GEN-LAST:event_buttonActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        self.Surname = "%%";
        self.Surname_Namebook.requery();
}//GEN-LAST:event_formWindowOpened
