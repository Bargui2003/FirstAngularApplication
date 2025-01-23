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
    onBlurEffect(event: FocusEvent): void {
      const button = event.target as HTMLElement;
      button.classList.remove('tracking-tight');
      button.classList.add('tracking-widest');
    }
  
    onFocusEffect(event: FocusEvent): void {
      const button = event.target as HTMLElement;
      button.classList.remove('tracking-widest');
      button.classList.add('tracking-tight');
    }  
}
