/**
 * 
 * @author home
 * @name search
 */

function formComponentShown(evt) {//GEN-FIRST:event_formComponentShown
	// TODO Добавьте свой код:
        
}//GEN-LAST:event_formComponentShown

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        Param1="%" + textField.text + "%";
        qtest.requery();
        qtest.last();
        
        //var wnd = new Forma();
        //wnd.showModal();
}//GEN-LAST:event_buttonActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
         //qtest.requery();
}//GEN-LAST:event_formWindowOpened

function sURNAMEOnSelect(aEditor) {//GEN-FIRST:event_sURNAMEOnSelect
	// TODO Добавьте свой код:
        var wnd = new Forma();
        wnd.showModal();
}//GEN-LAST:event_sURNAMEOnSelect
