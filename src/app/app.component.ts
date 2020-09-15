import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private usrServ: UsuariosService) {
    this.usrServ.obtenerUsuarios()
      .subscribe( resp => {

        console.log( resp );

      }, (err) => {
        // tratamiento del error: sweetAlert por ejemplo
        console.log ('Error al obtener usuarios');
      });
  }

}
