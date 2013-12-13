/**
 * 
 * @author Admin
 * @name LookChiper
 */
         var self = this;
function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
         self.Chiper_ID = "%%";
         self.Chiper.requery();
}//GEN-LAST:event_formWindowOpened

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код
        self.Chiper_ID = Number(self.textField.text) ;
        self.Chiper.requery();
}//GEN-LAST:event_buttonActionPerformed
