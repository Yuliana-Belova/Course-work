/**
 * 
 * @author Admin
 * @name LookNameBook
 */
var self = this;
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.Param1= "%" + self.textField.text + "%";
        self.Chiper.requery();
}//GEN-LAST:event_buttonActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
         self.Param1 = "%%";
         self.Chiper.requery();
}//GEN-LAST:event_formWindowOpened
