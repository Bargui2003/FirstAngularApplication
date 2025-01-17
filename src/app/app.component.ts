import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private loaderService: LoaderService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show(); // Affiche le loader au début de la navigation
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loaderService.hide(); // Cache le loader après ....secondes
        }, 1500);
      }
    });
  }
}
