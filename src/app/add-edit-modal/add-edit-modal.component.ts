import { Component, OnInit, Input } from '@angular/core';
import { TemperatureService } from '../temperature.service';
import { cities } from '../mockCities'


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

  ngOnInit(): void {
  }

  
 

}
