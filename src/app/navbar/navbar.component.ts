import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  downloadCV() { 
    const link = document.createElement('a'); 
    link.href = 'assets/Cv.Version.Fr.pdf';
     document.body.appendChild(link); 
     link.click(); document.body.removeChild(link); 
    }
}
