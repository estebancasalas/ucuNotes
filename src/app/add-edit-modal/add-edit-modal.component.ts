import { Component, OnInit, Input } from '@angular/core';
import { TemperatureService } from '../temperature.service';
import { cities } from '../mockCities'
import { NOTES } from '../cards/Mock-notes';


@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.css']
})
export class AddEditModalComponent implements OnInit {

  @Input() id : string = "modal-agregar";
  ciudades : Array<string> = Object.keys(cities)

  constructor() {
    
  }

  /* editarNota_aux(){ 
    let text = 
}

  editarNota(id){
    populateDropdown('CiudadEditar');
    let idTexto = "cText" + id[id.length - 1]
    recuperarTexto(idTexto);
    idActual = idTexto;
    return
} */

  ngOnInit(): void {
  }

  
 

}
